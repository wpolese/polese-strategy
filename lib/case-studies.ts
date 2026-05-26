export type CaseStudy = {
  slug: string;
  company: string;
  market: string;
  industry: string;
  period: string;
  outcome: "failure" | "success";
  headline: string;
  summary: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "linkedin-china",
    company: "LinkedIn",
    market: "China",
    industry: "SaaS / Social",
    period: "2014–2021",
    outcome: "failure",
    headline: "LinkedIn China: When Compliance Kills the Product",
    summary:
      "LinkedIn was the last major Western social platform allowed to operate in China. Seven years in, it shut down its social features entirely — a case study in how regulatory compromise can gradually hollow out the very thing that makes a product valuable.",
    excerpt:
      "LinkedIn entered China in 2014 as the last major Western social network allowed to operate there. By 2021 it had shut down its core social features. The story of what happened in between is one of the clearest case studies in how regulatory compromise can gradually hollow out the product you brought to market.",
    date: "May 26, 2026",
    readTime: "5 min read",
    content: `
<p>LinkedIn entered China in February 2014, publicly acknowledging that it would need to comply with Chinese content censorship requirements — and promising to be transparent about how it did so.<sup><a href="#ref-1">[1]</a></sup> It was the last major US social platform allowed to operate in China, while Facebook, Twitter, and Google had all exited or been blocked.</p>

<p>By October 2021, LinkedIn had shut down its Chinese social network entirely, replacing it with a job-search-only app called InJobs with no social feed, no post sharing, and no articles.<sup><a href="#ref-2">[2]</a></sup></p>

<p>What happened in between is a case study in how regulatory compromise, product fragmentation, and the absence of genuine localisation can combine to produce a slow-motion exit.</p>

<h2>What Went Wrong</h2>

<h3>1. Compliance Eroded the Core Product</h3>
<p>LinkedIn's value proposition is global professional networking. Its competitive moat in any market is the ability to connect with professionals <em>around the world</em>. Operating under Chinese censorship requirements meant progressively restricting exactly that capability — blocking profiles of foreign journalists, censoring political content, and suppressing posts visible to China-based users.</p>
<p>In March 2021, Chinese regulators suspended LinkedIn's new-user registrations for 30 days after finding insufficient political content moderation.<sup><a href="#ref-3">[3]</a></sup> The regulatory cost of staying was escalating faster than the business case for remaining.</p>

<h3>2. Localisation Was Slow and Underfunded</h3>
<p>In its early years, LinkedIn China lacked basic localised features that were standard for Chinese internet users: phone-number registration and local payment integration were not available and remained unresolved for years. Building these required involvement from LinkedIn's US headquarters — slow, expensive, and low-priority relative to the global product roadmap.</p>
<p>The Chinese team also lacked the marketing budget to compete. Chinese internet companies routinely invested heavily in offline acquisition events and promotional campaigns. LinkedIn's headquarters believed good products should sell themselves and saw limited ROI from the Chinese team's proposals — a deadlock that cost them user growth at the moment it mattered most.<sup><a href="#ref-4">[4]</a></sup></p>

<h3>3. Local Competitors Filled the Gap</h3>
<p>By the time LinkedIn's China offering was fully operational, local competitors had already adapted more precisely to how Chinese professionals actually behaved. BOSS Zhipin offered real-time instant messaging between recruiters and candidates. Liepin focused on headhunting for mid-to-senior professionals. Maimai built an anonymous professional network with strong word-of-mouth dynamics. WeChat, Douyin, and Xiaohongshu evolved to host professional conversation natively within super-apps that had far deeper user engagement.<sup><a href="#ref-5">[5]</a></sup></p>

<h2>Key Lessons</h2>
<ul>
<li><strong>Regulatory compliance is a product decision, not a legal one.</strong> If the compliance requirement strips features that define your competitive advantage, the business case for entering needs to be rebuilt from scratch — not assumed.</li>
<li><strong>Localisation requires genuinely local authority.</strong> Product decisions made in a US HQ that filter through a global roadmap process cannot respond to a Chinese market that moves quarterly.</li>
<li><strong>Your global network is not a moat in a closed market.</strong> LinkedIn's most defensible asset — cross-border professional connectivity — was the exact capability Chinese regulatory requirements most constrained.</li>
<li><strong>Know who you're entering against.</strong> Super-apps with hundreds of millions of daily active users do not leave obvious openings for foreign entrants with slower product cycles and higher regulatory overhead.</li>
</ul>

<hr />

<h2 id="sources">Sources</h2>
<ol class="references-list">
  <li id="ref-1">LinkedIn, <a href="https://www.linkedin.com/pulse/20140224235450-22330283-linkedin-in-china-connecting-the-world-s-professionals" target="_blank" rel="noopener noreferrer">"LinkedIn in China: Connecting the World's Professionals,"</a> LinkedIn Pulse, February 24, 2014. LinkedIn's own announcement of the China launch, including its public acknowledgment of censorship compliance requirements.</li>
  <li id="ref-2">CNBC, <a href="https://www.cnbc.com/2021/10/14/microsoft-to-shut-down-linkedin-in-china.html" target="_blank" rel="noopener noreferrer">"Microsoft to shut down LinkedIn in China,"</a> October 14, 2021.</li>
  <li id="ref-3">BBC News, <a href="https://www.bbc.com/news/technology-58911297" target="_blank" rel="noopener noreferrer">"Microsoft shutting down LinkedIn in China,"</a> October 14, 2021. Covers the March 2021 regulatory action and 30-day new-user suspension.</li>
  <li id="ref-4">Code Switch, <a href="https://codeswitch.substack.com/p/how-linkedin-failed-in-china" target="_blank" rel="noopener noreferrer">"How LinkedIn Failed in China,"</a> Substack. Analysis of LinkedIn China's product and budget constraints, including the marketing investment deadlock.</li>
  <li id="ref-5">Wansong Li, <a href="https://www.linkedin.com/pulse/linkedin-story-china-lessons-from-global-giants-market-wansong-li-zdcne" target="_blank" rel="noopener noreferrer">"The LinkedIn Story in China: Lessons from a Global Giant's Market Exit,"</a> LinkedIn Pulse. Analysis of competitive displacement by BOSS Zhipin, Liepin, and Chinese super-apps.</li>
</ol>
    `.trim(),
  },
  {
    slug: "groupon-china",
    company: "Groupon",
    market: "China",
    industry: "E-Commerce",
    period: "2011–2012",
    outcome: "failure",
    headline: "Groupon China: Speed Without Substance",
    summary:
      "Groupon entered China in 2011 with Tencent as a partner, $8.6M in capital, and a plan to dominate the group-buying market. Within a year, it had laid off more than 400 staff and closed 13 offices. The collapse was not caused by the market — it was caused by how Groupon chose to enter it.",
    excerpt:
      "Groupon entered China in 2011 with Tencent as a partner, $8.6M in capital, and a plan to dominate the group-buying market. Within a year it had laid off more than 400 staff and closed 13 offices. The collapse came not from the market — but from how Groupon chose to enter it.",
    date: "May 26, 2026",
    readTime: "4 min read",
    content: `
<p>In early 2011, Groupon entered China through a joint venture with Tencent called Gaopeng, investing $8.6 million for a 40% stake.<sup><a href="#ref-1">[1]</a></sup> The timing looked right: China's group-buying market was exploding, and Uber's model of entering fast with heavy capital had just proven itself in ride-hailing. Groupon planned to do the same.</p>

<p>By mid-2011, Gaopeng had laid off more than 400 employees and closed 13 local offices across China.<sup><a href="#ref-2">[2]</a></sup> It failed to make the top ten group-buying sites by sales. The joint venture that was meant to dominate the market had become a case study in how not to enter China.</p>

<h2>What Went Wrong</h2>

<h3>1. Speed Over Substance</h3>
<p>Groupon hired hundreds of Chinese employees in just a few months, recruited heavily from competitors at inflated salaries, and scaled operations across dozens of cities simultaneously. This rapid hiring prioritised volume over quality — service delivery suffered, merchant relationships were poorly managed, and the rush created an organisation that was too large and too disorganised to execute at the level China's demanding consumers expected.<sup><a href="#ref-3">[3]</a></sup></p>

<h3>2. A Partner Treated as a Door-Opener</h3>
<p>Tencent was not just a capital partner — it was one of the most sophisticated operators of Chinese consumer internet platforms in the country, with deep knowledge of Chinese user behaviour and commerce. Groupon never leveraged that knowledge. According to analysts at the time, Groupon "saw Tencent only as a door opener and investment partner, but never considered asking them for strategic guidance on the Chinese market."<sup><a href="#ref-4">[4]</a></sup></p>
<p>This strategic misalignment eventually led Tencent to redirect focus to Gaopeng's direct competitors.</p>

<h3>3. Cultural Missteps From Day One</h3>
<p>Before Gaopeng even launched, Groupon aired a Super Bowl ad in the US that referenced Tibet — a topic of deep political sensitivity in China — in a way that many Chinese observers found offensive. The ad damaged Groupon's brand image in China before operations had started and created early friction within the Tencent partnership.<sup><a href="#ref-1">[1]</a></sup></p>
<p>Relying heavily on foreign managers further reinforced the perception that Groupon was importing its culture rather than adapting to the market.</p>

<h3>4. The Market Was Already Overcrowded</h3>
<p>China's group-buying market in 2011 had hundreds of domestic competitors already operating, many of whom understood local merchant relationships, consumer expectations, and service standards far better than Gaopeng. Gaopeng failed to make the top ten by sales despite its funding advantage, while local leader Meituan was quietly building the operational depth and merchant network that would eventually make it the dominant food delivery platform in China.<sup><a href="#ref-3">[3]</a></sup></p>

<h2>Key Lessons</h2>
<ul>
<li><strong>Moving fast without local knowledge does not create a first-mover advantage — it creates a first-mover liability.</strong> Poor execution at scale damages brand reputation faster than slow execution at small scale.</li>
<li><strong>A local JV partner is only valuable if you actually listen to them.</strong> Structural partnerships without operational knowledge transfer provide capital but not competitive advantage.</li>
<li><strong>Cultural sensitivity is a pre-entry requirement, not a post-launch adjustment.</strong> Errors in the public record before operations begin are difficult to undo in a market where brand trust is hard-won.</li>
<li><strong>The existence of a large market is not evidence of an accessible market.</strong> China's group-buying market was large — but it was already served by local operators who understood it better.</li>
</ul>

<hr />

<h2 id="sources">Sources</h2>
<ol class="references-list">
  <li id="ref-1">Medium / DataDrivenInvestor, <a href="https://medium.com/datadriveninvestor/a-case-study-on-international-expansion-groupons-cultural-mistake-in-china-f0ca8ccd7f32" target="_blank" rel="noopener noreferrer">"A Case Study on International Expansion: Groupon's Cultural Mistake in China."</a> Covers the JV structure, Tibet ad incident, and staffing strategy.</li>
  <li id="ref-2">Beijing Review, <a href="https://www.bjreview.com/Cover_Stories_Series_2012/2011-09/13/content_442483.htm" target="_blank" rel="noopener noreferrer">"Curiosity Killed the Groupon Copycat,"</a> September 13, 2011. Reports 400+ layoffs and closure of 13 local branches.</li>
  <li id="ref-3">Computerworld, <a href="https://www.computerworld.com/article/1431869/groupon-s-struggle-in-china-no-surprise-say-analysts.html" target="_blank" rel="noopener noreferrer">"Groupon's struggle in China no surprise, say analysts,"</a> 2011. Analyst commentary on classic China entry mistakes and Gaopeng's failure to rank in the top ten group-buying sites.</li>
  <li id="ref-4">Deadly Sins, <a href="https://www.deadlysins.info/138-groupon-in-china-another-one-bit-the-china-dust/" target="_blank" rel="noopener noreferrer">"Groupon in China: No longer in the company of distinguished friends."</a> Analysis of the strategic misalignment between Groupon and Tencent.</li>
</ol>
    `.trim(),
  },
  {
    slug: "kelloggs-india",
    company: "Kellogg's",
    market: "India",
    industry: "FMCG",
    period: "1994–2000s",
    outcome: "failure",
    headline: "Kellogg's India: Selling Breakfast to a Country That Already Had One",
    summary:
      "Kellogg's launched in India in 1994 with a $30M investment and intense media activity. Sales came to a near-standstill within months. The product was fine. The problem was that Kellogg's had tried to replace one of the world's most diverse and deeply embedded breakfast cultures with a bowl of cold cornflakes.",
    excerpt:
      "Kellogg's launched in India in 1994 with a $30M investment and heavy media support. By September 1995, sales had virtually come to a standstill. The product was fine. The problem was that Kellogg's had tried to replace one of the world's most diverse breakfast cultures with a bowl of cold cornflakes.",
    date: "May 26, 2026",
    readTime: "4 min read",
    content: `
<p>In September 1994, Kellogg's launched in India with its 30th global manufacturing facility, a $30 million investment, and an initial product lineup of cornflakes, wheat flakes, and basmati rice flakes.<sup><a href="#ref-1">[1]</a></sup> The launch was backed by one of the most intensive marketing campaigns the Indian market had seen for a food product.</p>

<p>By April 1995, distributors in Mumbai were reporting a 25% countrywide sales decline from the prior month. By September 1995, sales had virtually come to a standstill.<sup><a href="#ref-1">[1]</a></sup> It was one of the most high-profile FMCG failures in India's post-liberalisation era.</p>

<h2>What Went Wrong</h2>

<h3>1. The Product Did Not Work With Indian Milk</h3>
<p>Most Indians boiled their milk — even pasteurised milk. Poured hot over dry cornflakes, the result was an immediate, unappetising soggy mess. Cold milk was less common, and when used, adding sugar to a cold liquid was frustrating and ineffective. Kellogg's had designed a product for a Western breakfast context and assumed the Indian context would adapt to it.<sup><a href="#ref-2">[2]</a></sup></p>

<h3>2. India Already Had Breakfast</h3>
<p>Kellogg's entered a country with one of the most diverse, regional, and culturally embedded breakfast traditions in the world — idli, dosa, upma, poha, paratha, puttu, and dozens of regional variants. These were not inconvenient substitutes for cereal. They were deeply preferred, nutritionally familiar, and socially embedded in morning routines. Kellogg's positioning implicitly framed these traditions as inferior — an approach that was both strategically incorrect and culturally tone-deaf.<sup><a href="#ref-2">[2]</a></sup></p>

<h3>3. Premium Pricing Without Perceived Value</h3>
<p>Kellogg's entered at roughly twice the price of local competitors like Mohun's. At that price premium, a product needed to be clearly and immediately superior. For most Indian consumers, it was not — and the result was trial without repeat purchase. The novelty effect of a global brand was not sufficient to sustain repurchase at a price that felt unjustified against both local alternatives and the consumer's own experience of the product.<sup><a href="#ref-3">[3]</a></sup></p>

<h3>4. Distribution Was Urban and Narrow</h3>
<p>Kellogg's focused on India's metros and premium retail stores. This approach placed large segments of the Indian population outside its reach entirely — and even within metros, it did not build the broad distribution presence required to establish a new category.<sup><a href="#ref-4">[4]</a></sup></p>

<h2>The Recovery — And What It Required</h2>
<p>Kellogg's eventually recovered by doing everything it had refused to do initially: localising aggressively. It introduced products designed to pair with curd and local toppings, adapted flavour profiles, replaced brand imagery with local faces, and built distribution. By 2000 it had reached a 65% share of India's breakfast cereal category — a category it had largely created through years of market development work.<sup><a href="#ref-3">[3]</a></sup></p>
<p>The recovery cost far more time and capital than proper pre-entry consumer research would have.</p>

<h2>Key Lessons</h2>
<ul>
<li><strong>Consumer behaviour research is not optional for FMCG market entry.</strong> Understanding how your target consumer actually prepares and consumes food in their daily context is fundamental — not a nice-to-have.</li>
<li><strong>Creating a new category requires a longer runway and a lower price of entry.</strong> You cannot charge a premium for a product that requires behaviour change.</li>
<li><strong>Do not position against local food culture.</strong> Implicitly framing traditional foods as inferior to your product is not a positioning strategy — it is a way to generate hostility in your target market.</li>
<li><strong>Metro distribution is not India.</strong> Restricting launch to premium urban channels limits your ability to build the scale required to be a viable category player.</li>
</ul>

<hr />

<h2 id="sources">Sources</h2>
<ol class="references-list">
  <li id="ref-1">IBS Centre for Management Research, <a href="https://www.ibscdc.org/Case_Studies/Marketing/Marketing/Kellogg%27s%20Indian%20Experience.htm" target="_blank" rel="noopener noreferrer">"Kellogg's Indian Experience."</a> Documents the $30M investment, September 1994 launch, and the April 1995 25% sales decline across India.</li>
  <li id="ref-2">Enthu Cutlet, <a href="https://enthucutlet.com/enthuoriginals/growing-up-in-the-90s/why-kellogs-failed-in-india/" target="_blank" rel="noopener noreferrer">"Snap, Crackle, and Flop,"</a> 2021. Analysis of the hot milk problem and India's embedded breakfast culture.</li>
  <li id="ref-3">Toppan Digital, <a href="https://toppandigital.com/us/blog-us/how-kelloggs-failed-and-then-won-in-india/" target="_blank" rel="noopener noreferrer">"How Kellogg's Failed, and Then Won, in India."</a> Documents the premium pricing issue, recovery strategy, and 65% market share by 2000.</li>
  <li id="ref-4">SlideShare, <a href="https://www.slideshare.net/slideshow/kellogs-failed-in-india/120813477" target="_blank" rel="noopener noreferrer">"Kellogg's Failed in India."</a> Analysis of narrow metro distribution strategy and its impact on market reach.</li>
</ol>
    `.trim(),
  },
  {
    slug: "walmart-south-korea",
    company: "Walmart",
    market: "South Korea",
    industry: "Retail",
    period: "1998–2006",
    outcome: "failure",
    headline: "Walmart South Korea: The World's Biggest Retailer, Outsold by Housewives",
    summary:
      "Walmart entered South Korea in 1998 and exited in 2006, selling its 16 stores for $882M — having never made the top five retailers in the market. The world's largest retailer was undone not by a lack of scale, but by an inability to understand what South Korean shoppers actually wanted from a supermarket.",
    excerpt:
      "Walmart entered South Korea in 1998 and exited in 2006, selling 16 stores for $882M — never making the top five retailers. The world's largest retailer was undone not by a lack of scale, but by a failure to understand what South Korean shoppers actually wanted from a supermarket.",
    date: "May 26, 2026",
    readTime: "4 min read",
    content: `
<p>Walmart entered South Korea in 1998, two years after France's Carrefour, as part of an aggressive international expansion strategy. By May 2006, it had sold all 16 of its Korean stores to local retailer Shinsegae — operator of the E-Mart chain — for $882 million.<sup><a href="#ref-1">[1]</a></sup> Walmart had ranked last in sales among the five major mass retailers in the market, posting a net loss of ₩9.9 billion on revenues of ₩728.7 billion in its final year.<sup><a href="#ref-2">[2]</a></sup></p>

<p>Carrefour had exited the month before, selling to Eland for a comparable sum. Both had made the same fundamental mistake.</p>

<h2>What Went Wrong</h2>

<h3>1. The Western Hypermarket Model Was the Wrong Format</h3>
<p>Walmart and Carrefour both deployed their global hypermarket format essentially unchanged for the Korean market: large-footprint warehouse-style stores with a focus on dry goods, electronics, and clothing, with merchandise displayed in or near their delivery boxes. South Korean shoppers, however, visited hypermarkets primarily for fresh food and groceries — not dry goods. And they expected a quality retail experience, not a warehouse aesthetic.<sup><a href="#ref-3">[3]</a></sup></p>
<p>E-Mart understood this. It used megaphones, hand-clapping demonstrations, and elaborate fresh produce displays to create an experience tailored to how Korean shoppers — particularly housewives who managed household purchasing — actually shopped. Walmart sold products out of boxes. E-Mart understood the emotional dimensions of the shopping trip.<sup><a href="#ref-4">[4]</a></sup></p>

<h3>2. Failure to Build Scale Fast Enough</h3>
<p>Both Walmart and Carrefour were slow to expand their store networks in Korea. With only 16 stores at exit, Walmart never built the purchasing leverage to pressure suppliers on pricing — the core of its global competitive model. Without scale, Walmart's price advantages were not competitive. Without competitive prices, there was no compensating reason for Korean consumers to prefer a format they found inferior to E-Mart's.<sup><a href="#ref-2">[2]</a></sup></p>

<h3>3. Consumer Expectations Were Underestimated</h3>
<p>South Korean consumers rank price below convenience, quality, and choice. They are among the most demanding retail shoppers in Asia. Analysts at the time noted that Walmart had "failed to read what South Korean housewives want when they go shopping" — a failure not of product category selection but of understanding the decision-making framework of the core customer.<sup><a href="#ref-2">[2]</a></sup></p>

<h2>Key Lessons</h2>
<ul>
<li><strong>Your global format is not a global advantage.</strong> Retail store design, merchandise mix, and the emotional experience of shopping are deeply local. What works in the US Midwest does not transfer automatically to Seoul.</li>
<li><strong>You cannot out-price a local competitor without scale — and you cannot build scale without a compelling customer proposition.</strong> In Korea, Walmart had neither.</li>
<li><strong>Understand the primary decision-maker in the household.</strong> Korean grocery purchasing was dominated by women managing household budgets who made their choices based on fresh food quality, convenience, and store atmosphere — not on abstract price comparisons.</li>
<li><strong>Entering with the same product as a local market leader who has been adapting for years is not a viable strategy.</strong> E-Mart had been refining its Korean retail model since the 1990s. Walmart arrived with a model developed for a different consumer in a different country.</li>
</ul>

<hr />

<h2 id="sources">Sources</h2>
<ol class="references-list">
  <li id="ref-1">Korea JoongAng Daily, <a href="https://koreajoongangdaily.joins.com/2006/05/22/economy/WalMart-joins-Carrefour-in-leaving-Korea/2727651.html" target="_blank" rel="noopener noreferrer">"Wal-Mart joins Carrefour in leaving Korea,"</a> May 22, 2006. Reports the sale terms and Walmart Asia president's statement on competitive positioning.</li>
  <li id="ref-2">London Korean Links, <a href="https://londonkoreanlinks.net/2006/06/04/walmart-follows-carrefour-in-exit-from-korea/" target="_blank" rel="noopener noreferrer">"Walmart follows Carrefour in exit from Korea,"</a> June 4, 2006. Includes analyst commentary on the failure to localise and the "housewives" observation.</li>
  <li id="ref-3">Food Navigator, <a href="https://www.foodnavigator.com/Article/2006/05/23/Wal-Mart-exits-South-Korea/" target="_blank" rel="noopener noreferrer">"Wal-Mart exits South Korea,"</a> May 23, 2006. Notes the warehouse store format's mismatch with Korean consumer expectations.</li>
  <li id="ref-4">Regent University, <a href="https://www.regent.edu/journal/regent-global-business-review/why-walmart-did-not-succeed-in-south-korea/" target="_blank" rel="noopener noreferrer">"Why Walmart Did Not Succeed in South Korea."</a> Documents E-Mart's in-store techniques and the contrast with Walmart's product-in-box presentation.</li>
</ol>
    `.trim(),
  },
  {
    slug: "vodafone-japan",
    company: "Vodafone",
    market: "Japan",
    industry: "Telecom",
    period: "2001–2006",
    outcome: "failure",
    headline: "Vodafone Japan: Five Presidents in Five Years",
    summary:
      "Vodafone's acquisition of J-Phone in 2001 was the largest foreign investment in Japan at the time. Five years later, it sold the business to SoftBank for ¥1.75 trillion — having lost subscribers every month for the prior year. Its own CFO later summarised the failure in three words: bad foreign management.",
    excerpt:
      "Vodafone's acquisition of J-Phone in 2001 was the largest foreign investment in Japan at the time. Five years later it sold to SoftBank for ¥1.75 trillion — having lost subscribers for a year. Its own CFO later summarised the failure in three words: bad foreign management.",
    date: "May 26, 2026",
    readTime: "5 min read",
    content: `
<p>In 2001, Vodafone acquired J-Phone, Japan's third-largest mobile operator. It was the largest foreign investment in Japan at the time. The acquisition was followed by a rebrand to Vodafone K.K. and an ambitious plan to integrate Japan into Vodafone's global platform strategy.</p>

<p>In April 2006, Vodafone sold the entire Japanese operation to SoftBank for ¥1.75 trillion (approximately $15.4 billion).<sup><a href="#ref-1">[1]</a></sup> Between January and May 2005, the company had lost more subscribers in Japan than it gained — a structural decline in a market where DoCoMo and KDDI were growing.<sup><a href="#ref-2">[2]</a></sup></p>

<p>The CFO of Vodafone Japan, John Durkin, later provided a frank post-mortem to the US Embassy in Tokyo. His summary of the primary failure: "bad managers brought in by Vodafone who never understood the local environment."<sup><a href="#ref-1">[1]</a></sup></p>

<h2>What Went Wrong</h2>

<h3>1. Five Presidents in Five Years</h3>
<p>According to Durkin, Vodafone cycled through five presidents over five years — each new team brought in to fix the problems created by the previous one. The 2005 management team was described as "particularly dysfunctional" — with British and Dutch managers who were "culturally insensitive to the point of racism." Japanese managers and engineers were aware of the company's problems but were discouraged from raising them with leadership.<sup><a href="#ref-1">[1]</a></sup></p>
<p>This was not a minor operational issue. Leadership churn prevented any consistent strategy from being executed, and cultural insensitivity destroyed the trust of the Japanese staff needed to adapt the business to the market.</p>

<h3>2. Global Strategy Over Local Reality</h3>
<p>Vodafone attempted to fit Japan into a global product strategy rather than building around Japanese consumer expectations. Its global handset — launched with considerable fanfare — was a flop. Japanese mobile consumers in the mid-2000s demanded advanced, Japan-specific features: high-resolution cameras, mobile payments, QR code integration, and content ecosystems. A generic global handset built for a European consumer did not serve these needs.<sup><a href="#ref-3">[3]</a></sup></p>

<h3>3. 3G Was Late and Underfunded</h3>
<p>Japan's mobile market in the early 2000s was one of the most technically advanced in the world. Being first with 3G services was competitively critical. Vodafone's global strategy delayed its Japanese 3G rollout — reportedly failing to introduce the service successfully three separate times before finally achieving it.<sup><a href="#ref-4">[4]</a></sup> Meanwhile, DoCoMo and KDDI were building 3G networks and content ecosystems that pulled subscribers away. Underinvestment in network infrastructure left Vodafone Japan with inferior coverage and handset quality compared to both primary rivals.<sup><a href="#ref-4">[4]</a></sup></p>

<h3>4. Structural Profitability Misalignment</h3>
<p>European and US shareholders expected profitability levels inconsistent with Japan's lower mobile margin environment. This created pressure to extract returns from the business rather than invest in the network and product improvements necessary to compete. The resulting underinvestment compounded the technology gap with domestic rivals.<sup><a href="#ref-1">[1]</a></sup></p>

<h2>Key Lessons</h2>
<ul>
<li><strong>Local market leadership requires local market understanding — which requires local leadership.</strong> Rotating foreign managers through a Japan operation every 12 months is not a management strategy; it is a mechanism for ensuring nothing is ever executed.</li>
<li><strong>Japanese consumers are among the most technically sophisticated in the world.</strong> Products built for a global average will be perceived as inferior in Japan's most competitive consumer markets.</li>
<li><strong>Technology cadence in Japan is faster than most markets.</strong> Being a fast follower in mobile technology in Japan in 2003 was equivalent to being a slow follower in most other markets.</li>
<li><strong>Profitability expectations must be calibrated to market structure, not home market norms.</strong> Japan's competitive dynamics often require sustained investment before returns emerge — a mismatch with quarterly reporting pressure from Western investors.</li>
</ul>

<hr />

<h2 id="sources">Sources</h2>
<ol class="references-list">
  <li id="ref-1">WikiLeaks / US Embassy Tokyo, <a href="https://wikileaks.jcvignoli.com/cable_06TOKYO3509" target="_blank" rel="noopener noreferrer">Diplomatic Cable 06TOKYO3509: "Why Did Vodafone Fail in Japan?"</a> CFO John Durkin's frank post-mortem to the US Embassy, June 2006. Primary source for the "five presidents in five years" account and the cultural insensitivity characterisation.</li>
  <li id="ref-2">NBC News, <a href="https://www.nbcnews.com/id/wbna11874806" target="_blank" rel="noopener noreferrer">"SoftBank to buy Vodafone mobile unit in Japan,"</a> 2006. Documents the subscriber losses and competitive underperformance against DoCoMo and KDDI.</li>
  <li id="ref-3">Financial Times, <a href="https://www.ft.com/content/a479d176-ac6b-11da-8226-0000779e2340" target="_blank" rel="noopener noreferrer">"Mobile group ready to call it a day in Japan,"</a> 2006. Covers the global handset failure and Vodafone's acknowledgment of its failure to understand Japanese consumer preferences.</li>
  <li id="ref-4">EU-Japan, <a href="https://eu-japan.com/2006/03/why-did-vodafone-fail-in-japan/" target="_blank" rel="noopener noreferrer">"EU Investments in Japan: Why Did Vodafone Fail in Japan?"</a> Documents the three failed 3G attempts, infrastructure underinvestment, and inferior handset lineup relative to DoCoMo and KDDI.</li>
</ol>
    `.trim(),
  },
  {
    slug: "gojek-vietnam",
    company: "Gojek (GoViet)",
    market: "Vietnam",
    industry: "Super-App / Ride-Hailing",
    period: "2018–2024",
    outcome: "failure",
    headline: "Gojek Vietnam: What Worked in Jakarta Did Not Work in Ho Chi Minh City",
    summary:
      "Gojek launched in Vietnam in 2018 as GoViet, backed by $500M in regional expansion capital and the momentum of its Indonesian dominance. After six years and nearly ₫5,700 billion in accumulated losses, it exited in September 2024. The lesson was not about Vietnam's market size — it was about what made Gojek's model work in Indonesia and why those conditions did not exist in Vietnam.",
    excerpt:
      "Gojek launched in Vietnam in 2018 as GoViet with $500M in regional expansion capital and the momentum of Indonesian dominance. After six years and ₫5,700 billion in accumulated losses, it exited in September 2024. The lesson: what made Gojek dominant in Indonesia did not exist in Vietnam.",
    date: "May 26, 2026",
    readTime: "5 min read",
    content: `
<p>In 2018, Gojek launched in Vietnam under the brand GoViet — a standalone entity with its own management team, app, and identity, positioned as the opening move in a $500M regional expansion strategy.<sup><a href="#ref-1">[1]</a></sup> Gojek had just established dominance in Indonesia and was expanding aggressively to prevent Grab from consolidating Southeast Asia.</p>

<p>On September 16, 2024 — six years later — Gojek terminated GoRide, GoFood, and GoSend services across Vietnam, accumulating an estimated ₫5,700 billion (approximately $230M) in losses over its operating life in the country.<sup><a href="#ref-2">[2]</a></sup> It represented less than 1% of Gojek's platform gross revenue despite years of subsidy-driven expansion.<sup><a href="#ref-3">[3]</a></sup></p>

<h2>What Went Wrong</h2>

<h3>1. Grab Had Already Won</h3>
<p>When Uber exited Vietnam in 2018, Grab absorbed the majority of its customer base and held roughly 73% of the Vietnamese ride-hailing market when GoViet launched.<sup><a href="#ref-1">[1]</a></sup> This was not a market with an open competitive landscape waiting to be captured — it was a market where the primary competitor had first-mover advantages, established driver and merchant networks, and deep brand recognition. Displacing Grab required not just matching its offering but providing a reason for customers to switch, at scale, against a competitor that could match any promotional spend.</p>

<h3>2. The Indonesia Playbook Did Not Transfer</h3>
<p>Gojek's Indonesian dominance was built on a unique set of conditions: a fragmented informal transport market, a population with limited access to formal financial services that benefited from GoPay's digital payments ecosystem, and a competitive window before Grab had established its current position. None of those conditions existed in Vietnam in 2018. Vietnam had different consumer behaviour, different regulatory requirements around taxation and employment, and a different competitive landscape — including strong local players like Be and, later, Vingroup's electric taxi service Xanh SM.<sup><a href="#ref-3">[3]</a></sup></p>

<h3>3. Leadership Instability and Strategic Drift</h3>
<p>GoViet cycled through two experienced CEOs in its second year of operation as it attempted to balance growth targets with profitability pressures. The standalone brand and management structure — intended to enable local adaptation — instead created coordination problems with the Gojek parent company and unclear accountability for strategic decisions.<sup><a href="#ref-1">[1]</a></sup></p>

<h3>4. Profitability Was Structurally Elusive</h3>
<p>Vietnam's ride-hailing market is characterised by high price sensitivity, thin margins, and a competitive dynamic that punished any reduction in subsidies with immediate churn. Gojek's Vietnam losses peaked at nearly ₫1,400 billion in 2022 before the company stopped "burning money" in 2023 — at which point its revenue also declined sharply, confirming that the customer base had been subsidy-dependent rather than loyalty-driven.<sup><a href="#ref-2">[2]</a></sup></p>

<h2>Key Lessons</h2>
<ul>
<li><strong>Dominance in your home market does not create a transferable playbook.</strong> Gojek's Indonesian success was built on specific structural conditions that needed to be verified — not assumed — before entering Vietnam.</li>
<li><strong>Entering a market where the leading competitor has 73% share requires a differentiated strategy, not a matching one.</strong> Promotional competition against an entrenched incumbent with deep pockets is a path to losses, not market share.</li>
<li><strong>The regulatory environment in each market is distinct.</strong> Vietnam's rules on taxation, employment classification, and competition differ meaningfully from Indonesia — differences that affect cost structure, operational model, and competitive positioning.</li>
<li><strong>Customer acquisition through subsidies is not the same as customer retention through value.</strong> When subsidies end, loyalty built on price evaporates.</li>
</ul>

<hr />

<h2 id="sources">Sources</h2>
<ol class="references-list">
  <li id="ref-1">Tech Wire Asia, <a href="https://techwireasia.com/08/2020/gojek-refocuses-its-regional-ambitions-in-vietnam-is-thailand-next/" target="_blank" rel="noopener noreferrer">"Gojek refocuses its regional ambitions in Vietnam,"</a> August 2020. Documents Grab's 73% market share at GoViet's launch and the leadership changes in year two.</li>
  <li id="ref-2">VietData, <a href="https://www.vietdata.vn/post/fierce-ride-hailing-market-in-vietnam-grab-starts-making-billions-in-profit-putting-pressure-on-co" target="_blank" rel="noopener noreferrer">"Fierce ride-hailing market in Vietnam: Grab starts making billions in profit, Gojek loses nearly 6,000 billion before giving up."</a> Documents the ₫5,700 billion in accumulated losses and the 2022 peak loss of ₫1,400 billion.</li>
  <li id="ref-3">Vietcetera, <a href="https://vietcetera.com/en/gojek-leaves-the-vietnam-market-as-growth-companies-push-for-profitability" target="_blank" rel="noopener noreferrer">"Gojek Leaves The Vietnam Market As Growth Companies Push For Profitability,"</a> 2024. Reports the less-than-1% platform gross revenue figure and analysis of local competitor strength.</li>
</ol>
    `.trim(),
  },
  {
    slug: "kitkat-japan",
    company: "KitKat (Nestlé)",
    market: "Japan",
    industry: "FMCG",
    period: "2000–present",
    outcome: "success",
    headline: "KitKat Japan: 400+ Flavours and What That Actually Means",
    summary:
      "KitKat is not a top-selling confectionery brand in Japan because it made a clever marketing pun. It's top-selling because Nestlé Japan built a distribution model, a cultural insight, and a product innovation engine around the specific ways Japanese consumers buy, give, and value food. The flavours are the output of a system, not the system itself.",
    excerpt:
      "KitKat is not a top-selling confectionery brand in Japan because it made a clever marketing pun. It's top-selling because Nestlé Japan built a distribution model, a cultural insight, and a product innovation engine around how Japanese consumers actually buy, give, and value food.",
    date: "May 26, 2026",
    readTime: "5 min read",
    content: `
<p>In 2012, KitKat overtook Meiji Chocolate as Japan's top-selling confectionery brand.<sup><a href="#ref-1">[1]</a></sup> By 2024, Nestlé Japan had produced over 400 distinct flavours.<sup><a href="#ref-2">[2]</a></sup> KitKat Chocolatory — a premium KitKat boutique concept — launched in Japan first, selling individual bars for ¥300–500, before being introduced elsewhere in the world.</p>

<p>Most accounts attribute this success to the "kitto katsu" coincidence — KitKat sounds like the Japanese phrase for "you will surely win," making it a popular good-luck gift for students during exam season. This is real, and it matters. But treating it as the explanation misses what actually drove the result.</p>

<h2>What Nestlé Got Right</h2>

<h3>1. Deep Cultural Alignment, Not Surface-Level Localisation</h3>
<p>Nestlé Japan BEO for Confectionery Olivier Jakubowicz described the approach explicitly: "This goes far beyond simply having the same product in a different local flavour launched in the market — it requires localisation in terms of innovation, in terms of positioning, in terms of route to market and so much more."<sup><a href="#ref-3">[3]</a></sup></p>
<p>Three cultural frameworks drove the product strategy:</p>
<ul>
<li><em>Shun</em> — Japan's cultural emphasis on seasonality and respecting the moment. KitKat launches a new flavour every month aligned to the season, such as Strawberry Shortcake at the start of strawberry season.</li>
<li><em>Omiyage</em> — the deeply embedded Japanese tradition of bringing back regional food gifts from travels. Nestlé created 12 region-specific flavours — matcha for Kyoto, wasabi for Shizuoka, purple sweet potato for Okinawa — sold primarily in their home regions to make KitKat the ideal packaged souvenir.<sup><a href="#ref-1">[1]</a></sup></li>
<li><em>Valentine's Day</em> — in Japan, Valentine's is not just romantic; it covers adult friendships and professional relationships, making the market more complex and premium. Nestlé builds high-value seasonal products specifically for this occasion.</li>
</ul>

<h3>2. Distribution Innovation</h3>
<p>KitKat's partnership with Japan Post to sell bars in 20,000 post offices won an industry award in 2010.<sup><a href="#ref-1">[1]</a></sup> This was not a confectionery distribution decision — it was a cultural insight executed through logistics. Post offices are trusted, ubiquitous, and associated with correspondence and gifts. Putting KitKat there reinforced its positioning as a gift product, not a snack.</p>

<h3>3. Scarcity as a Feature</h3>
<p>Limited-edition seasonal and regional flavours are sold for defined periods and then retired. Nestlé believes this "scarcity and rarity of value" creates a collectible dynamic that sustains consumer engagement across the year.<sup><a href="#ref-1">[1]</a></sup> In a convenience store culture where product lineups rotate every few weeks, a permanent product is invisible. A limited product that you may not be able to buy next month is a reason to purchase today.</p>

<h3>4. Premiumisation Through the Chocolatory</h3>
<p>The KitKat Chocolatory — a boutique concept developed in Japan first — repositioned the product upmarket, pairing high-end product collaborations with renowned patissiers alongside the mass-market range. This created brand altitude that benefited the entire product family, making KitKat simultaneously accessible as a ¥100 snack and desirable as a ¥500 premium gift.</p>

<h2>Key Lessons</h2>
<ul>
<li><strong>Localisation at the business model level, not just the product level, is what creates durable advantage.</strong> KitKat's success came from rethinking distribution, occasion, and positioning — not just adding local flavours.</li>
<li><strong>Cultural frameworks are infrastructure for product strategy.</strong> Shun, omiyage, and Japan's gift-giving calendar are not marketing insights — they are structural features of how Japanese consumers make purchase decisions. Build around them.</li>
<li><strong>Scarcity and seasonality are tools, not constraints.</strong> Japan's consumer culture rewards novelty and punishes permanence. Product strategy should be designed accordingly.</li>
<li><strong>The distribution channel is a strategic statement.</strong> Where you sell says something about who you are. Selling through Japan Post said KitKat was a gift — not a snack.</li>
</ul>

<hr />

<h2 id="sources">Sources</h2>
<ol class="references-list">
  <li id="ref-1">Wikipedia / Kit Kats in Japan, <a href="https://wikipedia.blackbriarcomputing.com/content/wikipedia_en_all_maxi_2024-01/A/Kit_Kats_in_Japan" target="_blank" rel="noopener noreferrer">"Kit Kats in Japan."</a> Documents the Meiji overtake (2012–2014), Japan Post partnership award (2010), and omiyage cultural driver.</li>
  <li id="ref-2">Tokyo Stash, <a href="https://www.tokyostash.com/blogs/culture-stories/kitkat-good-luck-japan-flavors" target="_blank" rel="noopener noreferrer">"Why KitKat Means 'Good Luck' in Japan (And Has 400+ Flavors)."</a> Analysis of the regional flavour map, seasonal scarcity model, and the Chocolatory premium line.</li>
  <li id="ref-3">Food Navigator Asia, <a href="https://www.foodnavigator-asia.com/Article/2026/05/19/surely-win-nestle-kitkats-secret-to-chocolate-success-in-japan/" target="_blank" rel="noopener noreferrer">"'Surely win': Nestlé KitKat's secret to chocolate success in Japan,"</a> May 2026. Direct quotes from Nestlé Japan BEO Olivier Jakubowicz on the three-pillar cultural localisation strategy (Shun, Omiyage, Valentine's).</li>
</ol>
    `.trim(),
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
