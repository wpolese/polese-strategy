export type Post = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string; // HTML string
};

export const posts: Post[] = [
  {
    slug: "oracle-japan-enterprise-saas-business-model",
    title: "Why Enterprise SaaS Companies Get Japan Wrong — And What Oracle Learned Over 30 Years",
    subtitle:
      "Oracle Japan has delivered 14 consecutive years of record profits. But the business model they operate there looks almost nothing like their global standard. Here's what that means for any company entering Japan.",
    date: "May 26, 2026",
    readTime: "7 min read",
    category: "Japan Market",
    excerpt:
      "Oracle Japan has delivered 14 consecutive years of record profits. The business model they operate there looks almost nothing like their global standard — and that's exactly the point.",
    content: `
<p>If you ask most enterprise software executives what their Japan strategy looks like, you'll hear some version of the same answer: "We'll deploy our standard product, localize the UI, hire a local sales team, and run our usual subscription model."</p>

<p>This is the answer that leads to expensive, multi-year failures.</p>

<p>Oracle Japan — one of the most successful foreign enterprise technology companies in the country — has delivered 14 consecutive years of record operating profits. But if you look closely at how they operate in Japan, it bears little resemblance to Oracle's global playbook. That gap is not a bug. It's the entire strategy.</p>

<h2>Japan's Enterprise Market Is Structurally Different</h2>

<p>Most foreign companies arrive in Japan with a mental model shaped by their experience in the US, Europe, or even other parts of Asia. That model fails in Japan because the structural dynamics of how large Japanese enterprises buy, deploy, and operate technology are genuinely different — not cosmetically different.</p>

<p>Here are the fault lines that catch most entrants off guard:</p>

<h3>1. The Subscription Model Is Culturally Distrusted</h3>

<p>SaaS, by definition, is a rental model. You pay for access; you don't own the software. In most markets this is unremarkable. In Japan, particularly among large enterprises and government-adjacent organisations, this model triggers a deep cultural resistance.</p>

<p>Japanese enterprises have a strong preference for perpetual licensing — the idea that you buy a system, you own it, it sits in your data center under your control, and you are not dependent on a vendor's continued operation or pricing decisions for access to your own business-critical infrastructure.</p>

<p>This isn't irrational. It reflects a corporate risk culture that values stability, control, and long-term predictability over flexibility and cost efficiency. A SaaS vendor whose pricing model or support terms might change next year is a risk. An on-premise license you've owned for 15 years is not.</p>

<h3>2. "Pickled" Legacy Systems Are Not a Problem to Solve — They're a Feature</h3>

<p>Japan has a well-documented phenomenon sometimes called <em>塩漬けシステム</em> (shio-zuke systems) — literally "salt-pickled systems." These are core business applications that companies have been running, largely unchanged, for 10, 15, or even 20+ years.</p>

<p>From a Western technology vendor's perspective, these look like an opportunity: legacy modernization. Come in, replace the old system, upgrade to the cloud. In reality, many Japanese enterprises view these systems not as a liability but as a stable, well-understood asset that the business has grown around. The risk of replacement — operational disruption, retraining, integration failure — is considered higher than the cost of continued maintenance.</p>

<p>Oracle Japan's CEO has publicly identified this as one of the primary challenges for the current fiscal year: convincing enterprises that modernisation is now necessary, not optional. That they're still working on this argument — after 30+ years in market — tells you something important about the pace of change.</p>

<h3>3. Data Sovereignty Is Non-Negotiable</h3>

<p>For many Japanese enterprises — particularly in financial services, public sector, and manufacturing — putting core operational data on a shared public cloud infrastructure managed by a foreign company is not a viable option. It isn't primarily a technical objection. It's a regulatory, legal, and governance one.</p>

<p>Oracle's response has been to build dedicated sovereign cloud infrastructure in Japan: their <em>Dedicated Region Cloud@Customer</em> and Oracle Alloy offerings deploy Oracle Cloud infrastructure physically inside a customer's own data center, under the customer's control, with no data leaving their environment. This is a fundamentally different product than "use our public cloud." It costs significantly more to build and operate. And it was necessary to win the deals that matter in Japan.</p>

<h3>4. Sales Cycles Are Measured in Years, Not Quarters</h3>

<p>Enterprise software sales cycles in Japan for mission-critical systems routinely run 12 to 24 months — and that's when things are going well. Decision-making is typically consensus-driven, involving multiple internal stakeholders at multiple levels. A single "champion" sponsoring a deal, as is common in Western enterprise sales, is insufficient. The entire buying committee needs to be brought along.</p>

<p>For foreign companies accustomed to quarterly revenue targets and deal velocity metrics, this creates structural tension. The pressure to show Japan results by Q3 is incompatible with how Japanese enterprises actually make decisions. Companies that try to accelerate this process — through aggressive pricing, executive pressure, or shortened evaluation timelines — tend to lose trust rather than close deals faster.</p>

<h3>5. The Partner Ecosystem Is the Market</h3>

<p>Oracle Japan does not primarily sell direct. Their go-to-market in Japan is built around an extensive network of local system integrators (SIs) — companies like Fujitsu, NEC, NTT Data, and hundreds of regional specialists. These SIs have relationships with Japanese enterprises that go back decades. They understand the buying process. They speak the language — not just Japanese, but the internal language of each client's industry and organisation.</p>

<p>Trying to sell enterprise software in Japan without the right SI partnerships is like trying to sell through a channel that doesn't exist yet. Building those partnerships takes years and requires genuine investment — not just a partner program and a portal.</p>

<h2>What This Means for Companies Entering Japan</h2>

<p>Oracle's Japan success is not a template you can copy. They have 30+ years of relationship equity, dedicated infrastructure built specifically for the market, and a product that is genuinely embedded in Japan's most critical enterprise systems. Most entrants don't have that foundation.</p>

<p>But the lessons are instructive for any B2B technology or services company evaluating Japan:</p>

<ul>
<li><strong>Your standard commercial model may need to change.</strong> Whether that's pricing structure, contract terms, deployment architecture, or support model — Japan will require adaptation at the business model level, not just the product level.</li>
<li><strong>The sales cycle is the strategy.</strong> If your market entry plan assumes deal velocity similar to your home market, your financial projections will be wrong from the start.</li>
<li><strong>Local partnerships are not optional.</strong> They are the primary distribution channel for enterprise buyers who trust the partners they already have more than vendors they've just met.</li>
<li><strong>Data sovereignty is a first-principles question.</strong> Before you go to market, understand where your product's data lives and whether that's acceptable to the enterprises you're targeting.</li>
<li><strong>Research the buying committee, not just the buyer.</strong> Japanese enterprise decisions are made by consensus. Understanding who is at the table — and what each stakeholder needs — is as important as understanding the product fit.</li>
</ul>

<h2>The Broader Point</h2>

<p>Japan is not a hard market because it's hostile to foreign companies. It's a hard market because it's different in ways that are easy to underestimate — and expensive to discover late.</p>

<p>The companies that succeed in Japan tend to share one characteristic: they researched those differences before they committed capital, not after. They understood the structural dynamics of their specific market segment — licensing preferences, decision-making structure, regulatory requirements, partner ecosystems — before they built their entry strategy around them.</p>

<p>That research is exactly what protects your investment and compresses the timeline between market entry and real commercial traction. It's also, not coincidentally, what Polese Strategic Insights exists to do.</p>

<hr />

<p><em>Will Polese is the founder and CEO of Polese Strategic Insights, a boutique consultancy specialising in APAC market entry and expansion strategy. PSI works with leadership teams to build the research foundation that makes APAC strategy defensible.</em></p>
    `.trim(),
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
