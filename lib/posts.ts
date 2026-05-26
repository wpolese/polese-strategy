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

<p>Oracle Japan — one of the most successful foreign enterprise technology companies in the country — has delivered 14 consecutive years of record operating profits.<sup><a href="#ref-1">[1]</a></sup> But if you look closely at how they operate in Japan, it bears little resemblance to Oracle's global playbook. That gap is not a bug. It's the entire strategy.</p>

<h2>Japan's Enterprise Market Is Structurally Different</h2>

<p>Most foreign companies arrive in Japan with a mental model shaped by their experience in the US, Europe, or even other parts of Asia. That model fails in Japan because the structural dynamics of how large Japanese enterprises buy, deploy, and operate technology are genuinely different — not cosmetically different.</p>

<p>Here are the fault lines that catch most entrants off guard:</p>

<h3>1. The Subscription Model Is Culturally Distrusted</h3>

<p>SaaS, by definition, is a rental model. You pay for access; you don't own the software. In most markets this is unremarkable. In Japan, particularly among large enterprises and government-adjacent organisations, this model triggers a deep cultural resistance.</p>

<p>Japanese enterprises have a strong preference for perpetual licensing — the idea that you buy a system, you own it, it sits in your data center under your control, and you are not dependent on a vendor's continued operation or pricing decisions for access to your own business-critical infrastructure.</p>

<p>This isn't irrational. It reflects a corporate risk culture that values stability, control, and long-term predictability over flexibility and cost efficiency. A SaaS vendor whose pricing model or support terms might change next year is a risk. An on-premise license you've owned for 15 years is not.</p>

<h3>2. "Pickled" Legacy Systems Are Not a Problem to Solve — They're a Feature</h3>

<p>Japan has a well-documented phenomenon called <em>塩漬けシステム</em> (shio-zuke systems) — literally "salt-pickled systems."<sup><a href="#ref-2">[2]</a></sup> These are core business applications that companies have been running, largely unchanged, for 10, 15, or even 20+ years.</p>

<p>From a Western technology vendor's perspective, these look like an opportunity: legacy modernization. Come in, replace the old system, upgrade to the cloud. In reality, many Japanese enterprises view these systems not as a liability but as a stable, well-understood asset that the business has grown around. The risk of replacement — operational disruption, retraining, integration failure — is considered higher than the cost of continued maintenance.</p>

<p>Oracle Japan President Toshimitsu Misawa publicly identified this as one of the primary challenges for the FY2025 fiscal year, stating that resolving the "pickled system problem" through modernisation has become "an essential way of thinking going forward."<sup><a href="#ref-3">[3]</a></sup> That they're still working on this argument — after 40 years in market — tells you something important about the pace of change.</p>

<h3>3. Data Sovereignty Is Non-Negotiable</h3>

<p>For many Japanese enterprises — particularly in financial services, public sector, and manufacturing — putting core operational data on a shared public cloud infrastructure managed by a foreign company is not a viable option. It isn't primarily a technical objection. It's a regulatory, legal, and governance one.</p>

<p>Oracle's response has been to build dedicated sovereign cloud infrastructure in Japan: their <em>OCI Dedicated Region</em> (formerly Dedicated Region Cloud@Customer) deploys Oracle Cloud infrastructure physically inside a customer's own data center, under the customer's control, with no data leaving their environment.<sup><a href="#ref-4">[4]</a></sup> This is a fundamentally different product than "use our public cloud." It costs significantly more to build and operate. And it was necessary to win the deals that matter in Japan.</p>

<h3>4. Sales Cycles Are Measured in Years, Not Quarters</h3>

<p>Enterprise software sales cycles in Japan for mission-critical systems typically run 9 to 18 months — and complex implementations involving regulatory requirements can extend well beyond that.<sup><a href="#ref-5">[5]</a></sup> Decision-making is driven by two interlocking processes: <em>nemawashi</em> (informal stakeholder consensus-building) and <em>ringi</em> (a formal approval document that circulates through multiple levels of organisational hierarchy). A single "champion" sponsoring a deal, as is common in Western enterprise sales, is insufficient. The entire buying committee needs to be aligned before any formal proposal is viable.</p>

<p>For foreign companies accustomed to quarterly revenue targets and deal velocity metrics, this creates structural tension. The pressure to show Japan results by Q3 is incompatible with how Japanese enterprises actually make decisions. Companies that try to accelerate this process — through aggressive pricing, executive pressure, or shortened evaluation timelines — tend to lose trust rather than close deals faster.</p>

<h3>5. The Partner Ecosystem Is the Market</h3>

<p>Oracle Japan does not primarily sell direct. Their go-to-market in Japan is built around an extensive network of local system integrators (SIs) — companies like Fujitsu, NEC, and NTT Data, which together account for the majority of Japan's enterprise IT services market.<sup><a href="#ref-6">[6]</a></sup> These SIs have relationships with Japanese enterprises that go back decades. They understand the buying process. They speak the language — not just Japanese, but the internal language of each client's industry and organisation.</p>

<p>Trying to sell enterprise software in Japan without the right SI partnerships is like trying to sell through a channel that doesn't exist yet. Building those partnerships takes years and requires genuine investment — not just a partner program and a portal.</p>

<h2>What This Means for Companies Entering Japan</h2>

<p>Oracle's Japan success is not a template you can copy. They have 40 years of relationship equity, dedicated infrastructure built specifically for the market, and a product genuinely embedded in Japan's most critical enterprise systems. Most entrants don't have that foundation.</p>

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

<h2 id="sources">Sources & Notes</h2>

<ol class="references-list">
  <li id="ref-1">Nikkei Shimbun, <a href="https://www.nikkei.com/article/DGXZQOUC276TA0X20C25A6000000/" target="_blank" rel="noopener noreferrer">"Oracle Japan FY2025: Record Profit for 14th Consecutive Year, Driven by Active IT Investment"</a> (日本オラクルの25年5月期、14年連続最高益　IT投資活発), June 27, 2025. Oracle Japan's own earnings release (FY2025 Q4 Tanshin) confirms net sales of ¥263.5bn, operating profit ¥86.8bn, record highs across all categories.</li>
  <li id="ref-2">Nikkei Cross Tech, <a href="https://active.nikkeibp.co.jp/atclact/active/17/112900191/" target="_blank" rel="noopener noreferrer">"The Unavoidable Pickled Systems"</a> (どうしようもない塩漬けシステム), Nikkei BP, 2017. A multi-part investigative series documenting the origins, characteristics, and scale of shio-zuke systems in Japanese enterprise IT.</li>
  <li id="ref-3">IT Leaders, <a href="https://it.impress.co.jp/articles/-/26659" target="_blank" rel="noopener noreferrer">"Oracle Japan FY2025 Business Strategy: Misawa Identifies Legacy Modernisation as Urgent Priority"</a> (競争力を削ぐ「塩漬けの基幹システム」、モダナイゼーションが急務), July 9, 2024. Direct quote from President Misawa: "モダナイゼーションに取り組んで塩漬け問題を解消していくことは、今後、必須の考え方になる." See also Cloud Watch coverage of the same briefing: <a href="https://cloud.watch.impress.co.jp/docs/news/1607070.html" target="_blank" rel="noopener noreferrer">cloud.watch.impress.co.jp</a>.</li>
  <li id="ref-4">Oracle Corporation, <a href="https://www.oracle.com/cloud/cloud-at-customer/dedicated-region/" target="_blank" rel="noopener noreferrer">"OCI Dedicated Region: Overview."</a> OCI Dedicated Region (previously Dedicated Region Cloud@Customer) deploys a full Oracle Cloud region — IaaS, PaaS, and SaaS — physically inside a customer's own data center to meet data residency, sovereignty, and regulatory requirements.</li>
  <li id="ref-5">Nihonium, <a href="https://resources.nihonium.io/faq/what-is-ringi-decision-making-japan" target="_blank" rel="noopener noreferrer">"Ringi Decision-Making in Japan: How It Impacts SaaS Sales Cycles."</a> Comprehensive breakdown of nemawashi and ringi processes in enterprise purchasing. Enterprise accounts: 9–12 months standard; regulatory/complex implementations: 18 months or beyond. See also: Silkdrive, <a href="https://www.silkdrive.com/insights/ringi-japanese-approval-process" target="_blank" rel="noopener noreferrer">"The Japanese Approval Process"</a>; JapanFlex, <a href="https://japanflex.com/japans-slow-business-decisions-understanding-ringi-and-nemawashi-as-a-foreign-entrepreneur/" target="_blank" rel="noopener noreferrer">"Japan's Slow Business Decisions: Ringi and Nemawashi Explained."</a></li>
  <li id="ref-6">Nihonium, <a href="https://nihonium.io/the-unique-role-of-a-system-integrator-si-in-japan/" target="_blank" rel="noopener noreferrer">"The Unique Role of a System Integrator (SI) in Japan."</a> On market size and rankings, see also: NTT DATA INTELLILINK, <a href="https://www.intellilink.co.jp/en/business/software/column2023041700.aspx" target="_blank" rel="noopener noreferrer">"Japan Market IT Services Outsourcing,"</a> which identifies Fujitsu, NTT Data, Hitachi, and NEC as the four largest Japan IT services providers by revenue.</li>
</ol>

<hr />

<p><em>Will Polese is the founder and CEO of Polese Strategic Insights, a boutique consultancy specialising in APAC market entry and expansion strategy. PSI works with leadership teams to build the research foundation that makes APAC strategy defensible.</em></p>
    `.trim(),
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
