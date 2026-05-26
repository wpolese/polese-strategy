/**
 * PSI Weekly Blog Post Generator
 *
 * Generates a new thought leadership post for polesestrategy.com and prepends
 * it to lib/posts.ts. Designed to run inside a GitHub Actions workflow that
 * opens a PR for review before the post goes live.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=<key> node scripts/generate-blog-post.mjs
 *
 * Optional env vars:
 *   TOPIC_OVERRIDE  — pass a specific topic string to bypass the rotation list
 */

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// ─── 1. Load existing posts so the AI avoids duplicates ───────────────────────
const postsFile = readFileSync(join(ROOT, "lib/posts.ts"), "utf-8");
const existingSlugs = [...postsFile.matchAll(/slug:\s*"([^"]+)"/g)].map(
  (m) => m[1]
);
const existingTitles = [...postsFile.matchAll(/title:\s*"([^"]+)"/g)].map(
  (m) => m[1]
);

// ─── 2. Topic rotation list ────────────────────────────────────────────────────
const TOPICS = [
  "What to look for when evaluating a local distribution partner in Southeast Asia",
  "How to read a Japanese enterprise buyer: the ringi system and what it means for your sales cycle",
  "Pricing strategy in APAC: why your global pricing model will need to change",
  "The difference between market entry in Singapore versus Indonesia — and why companies get it wrong",
  "How to size a market in APAC when reliable data is scarce",
  "What due diligence on a local JV partner in Asia actually looks like",
  "Regulatory red flags foreign companies miss when entering APAC markets",
  "Go-to-market sequencing: which APAC market should you enter first?",
  "How enterprise SaaS companies should think about Japan's IT buying culture",
  "Vietnam's consumer market: what the growth story looks like up close",
  "Why competitive intelligence in APAC is harder than it looks — and how to do it anyway",
  "The hidden costs of APAC market entry that kill ROI projections",
  "How to assess cultural fit between your leadership team and an APAC market",
  "India market entry: why the North/South/West split matters more than the national TAM",
  "What the best APAC market entry research reports actually contain",
  "Channel strategy in Korea: why direct sales is harder than it looks",
  "How to structure your first year of operations in a new APAC market",
  "The role of government relations in Southeast Asian market entry",
  "Why most APAC market entry timelines are wrong — and how to build a realistic one",
  "Understanding consumer trust signals in markets you have no brand equity in",
];

// Pick a topic. Use TOPIC_OVERRIDE env var if set, otherwise rotate by week.
function pickTopic() {
  if (process.env.TOPIC_OVERRIDE) return process.env.TOPIC_OVERRIDE;
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  return TOPICS[weekNumber % TOPICS.length];
}

const topic = pickTopic();
const today = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

console.log(`📝 Generating post for topic: "${topic}"`);

// ─── 3. Build the prompt ───────────────────────────────────────────────────────
const PROMPT = `You are writing a thought leadership blog post for Polese Strategic Insights (PSI), a boutique B2B strategy consulting firm led by Will Polese. PSI specialises in APAC market entry and expansion strategy for mid-size international companies.

PSI's voice: direct, analytical, no corporate fluff. Every paragraph earns its place. Sharp sentences. Write like a smart strategy consultant talking candidly to a senior executive who has heard every cliché before.

─── TOPIC ───
${topic}

─── EXISTING POSTS (do not repeat these angles) ───
${existingTitles.map((t) => `• ${t}`).join("\n")}

─── INSTRUCTIONS ───
Write a concrete, specific post within the topic area. Avoid generic advice. Use real examples, specific countries, real company names, or documented patterns where you have reliable knowledge.

Requirements:
- 700–900 words of body content
- 3–5 section headers (use <h2> or <h3>)
- Inline citations using superscript: <sup><a href="#ref-1">[1]</a></sup>
- A numbered sources section at the bottom using: <ol class="references-list"> with <li id="ref-N"> entries
- End with PSI author bio: <p><em>Will Polese is the founder and CEO of Polese Strategic Insights, a boutique consultancy specialising in APAC market entry and expansion strategy. PSI works with leadership teams to build the research foundation that makes APAC strategy defensible.</em></p>

─── CITATION RULES ───
Only cite sources you are confident actually exist. Use the real publication name, article title, and URL. If you are not certain a URL is accurate, write the citation as: Publication Name, "Article Title" (Year) — with no URL. Do not fabricate URLs.

─── OUTPUT FORMAT ───
Return ONLY a valid JSON object — no markdown fences, no preamble, just the raw JSON:

{
  "slug": "url-friendly-slug-max-60-chars",
  "title": "Specific Article Title",
  "subtitle": "One sentence elaborating on the title for the hero subheading",
  "date": "${today}",
  "readTime": "X min read",
  "category": "one of: Japan Market | Southeast Asia | India | China | APAC Strategy | Market Research | Sales & GTM | Operations",
  "excerpt": "One to two sentence summary shown on the listing page.",
  "content": "<p>Full HTML body content...</p>...<ol class='references-list'>...</ol><hr /><p><em>Will Polese...</em></p>"
}`;

// ─── 4. Call the API ───────────────────────────────────────────────────────────
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

let message;
try {
  message = await client.messages.create({
    model: "claude-opus-4-5",
    max_tokens: 4096,
    messages: [{ role: "user", content: PROMPT }],
  });
} catch (err) {
  console.error("❌ Anthropic API error:", err.message);
  process.exit(1);
}

const raw = message.content[0].text.trim();

// ─── 5. Parse the JSON response ────────────────────────────────────────────────
let post;
try {
  // Strip markdown code fences if the model added them despite instructions
  const cleaned = raw.replace(/^```(?:json)?\n?/i, "").replace(/\n?```$/i, "");
  post = JSON.parse(cleaned);
} catch {
  // Last resort: try to extract the first {...} block
  const match = raw.match(/\{[\s\S]*\}/);
  if (!match) {
    console.error("❌ Could not parse JSON from model response:\n", raw);
    process.exit(1);
  }
  try {
    post = JSON.parse(match[0]);
  } catch (e) {
    console.error("❌ JSON parse failed:", e.message, "\nRaw:\n", raw);
    process.exit(1);
  }
}

// ─── 6. Validate required fields ──────────────────────────────────────────────
const REQUIRED = ["slug", "title", "subtitle", "date", "readTime", "category", "excerpt", "content"];
for (const field of REQUIRED) {
  if (!post[field]) {
    console.error(`❌ Missing required field: ${field}`);
    process.exit(1);
  }
}

// Sanitise slug and ensure uniqueness
post.slug = post.slug.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").slice(0, 80);
if (existingSlugs.includes(post.slug)) {
  post.slug = `${post.slug}-${Date.now()}`;
}

// ─── 7. Serialise the new post entry ──────────────────────────────────────────
// Escape backticks in content so it can sit inside a template literal
const escapedContent = post.content.replace(/`/g, "\\`").replace(/\${/g, "\\${");

const newEntry = `  {
    slug: ${JSON.stringify(post.slug)},
    title: ${JSON.stringify(post.title)},
    subtitle: ${JSON.stringify(post.subtitle)},
    date: ${JSON.stringify(post.date)},
    readTime: ${JSON.stringify(post.readTime)},
    category: ${JSON.stringify(post.category)},
    excerpt: ${JSON.stringify(post.excerpt)},
    content: \`
${escapedContent.trim()}
    \`.trim(),
  },
`;

// ─── 8. Prepend to posts array in lib/posts.ts ────────────────────────────────
const ARRAY_MARKER = "export const posts: Post[] = [";
if (!postsFile.includes(ARRAY_MARKER)) {
  console.error("❌ Could not find posts array marker in lib/posts.ts");
  process.exit(1);
}

const updated = postsFile.replace(ARRAY_MARKER, `${ARRAY_MARKER}\n${newEntry}`);
writeFileSync(join(ROOT, "lib/posts.ts"), updated, "utf-8");

// ─── 9. Report ─────────────────────────────────────────────────────────────────
console.log(`\n✅ Post generated and written to lib/posts.ts`);
console.log(`   Title:    ${post.title}`);
console.log(`   Slug:     ${post.slug}`);
console.log(`   Category: ${post.category}`);
console.log(`   Date:     ${post.date}`);
