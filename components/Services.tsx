const services = [
  {
    icon: "🔍",
    title: "Market & Industry Research",
    description:
      "In-depth secondary research on APAC markets, customer segments, market sizing, and demand trends — organized into decision-ready formats that executives can act on immediately.",
    includes: [
      "TAM / SAM sizing by country and segment",
      "Customer profile and buyer behavior analysis",
      "Industry trend mapping and growth drivers",
      "Regulatory environment overview per market",
      "Key distribution and channel landscape",
    ],
    deliverable: "Market Entry Research Report",
    deliverableDetail: "40–60 page structured report with executive summary, country scorecards, segment sizing tables, and sourced findings — formatted for board or investor review.",
  },
  {
    icon: "⚔️",
    title: "Competitive Analysis",
    description:
      "Comprehensive competitor profiling across APAC — products, pricing, positioning, go-to-market approach, and partnership ecosystems. Landscape summaries that reveal where real white space exists.",
    includes: [
      "Competitor identification and prioritization",
      "Product and pricing benchmarking",
      "GTM and channel strategy comparison",
      "Strengths, weaknesses, and strategic positioning",
      "White space and differentiation opportunity map",
    ],
    deliverable: "Competitive Landscape Report",
    deliverableDetail: "Structured competitor profiles with side-by-side comparison matrix, positioning map, and a 1-page executive brief identifying your clearest points of differentiation.",
  },
  {
    icon: "🗺️",
    title: "Go-To-Market Strategy",
    description:
      "Research-backed GTM option evaluation covering sales models, channel structures, local distributors, and country-specific entry considerations — so you enter with a plan, not a hypothesis.",
    includes: [
      "Entry mode evaluation (direct, partner, distributor, JV)",
      "Country prioritization and sequencing logic",
      "Channel and sales model options with trade-offs",
      "Local regulatory and compliance considerations",
      "Resource and investment requirement estimates",
    ],
    deliverable: "GTM Strategy Options Brief",
    deliverableDetail: "10–15 page options brief presenting 2–3 viable GTM paths with recommended approach, rationale, sequencing plan, and key risks — built for executive alignment sessions.",
  },
  {
    icon: "🤝",
    title: "Partner Identification",
    description:
      "Identification and background assessment of strategic and commercial partners across APAC — shortlisting materials built for executive diligence conversations and board updates.",
    includes: [
      "Longlist development by partner type and market",
      "Background and capability assessment",
      "Partnership model and incentive structure research",
      "Reputation and market standing review",
      "Shortlist with outreach-ready profiles",
    ],
    deliverable: "Partner Shortlist & Profiles",
    deliverableDetail: "Curated shortlist of 5–10 vetted partner candidates with one-page profiles covering company background, capabilities, market presence, and recommended engagement approach.",
  },
  {
    icon: "⚠️",
    title: "Risk & Market Context",
    description:
      "Regulatory, cultural, and operational risk research across APAC markets — concise context briefs that surface the barriers, sensitivities, and market realities before you commit capital.",
    includes: [
      "Regulatory and compliance risk by market",
      "Political and economic stability assessment",
      "Cultural and business practice considerations",
      "Market access barriers and tariff structures",
      "Operational risk factors (IP, data, labor)",
    ],
    deliverable: "Market Risk & Context Brief",
    deliverableDetail: "Country-by-country risk summary with a heat map of key risk dimensions, supporting research notes, and a plain-language brief designed for executive and legal team review.",
  },
  {
    icon: "💡",
    title: "Strategic Synthesis",
    description:
      "CEO-level synthesis that turns research into clear recommendations — the final analytical layer that makes your APAC strategy actionable, defensible, and ready for stakeholder buy-in.",
    includes: [
      "Cross-market findings integration",
      "Strategic options evaluation and scoring",
      "Recommended path with supporting rationale",
      "Key assumptions and sensitivity considerations",
      "Stakeholder-ready narrative and framing",
    ],
    deliverable: "Strategic Recommendation Deck",
    deliverableDetail: "15–20 slide exec deck synthesizing all research streams into a clear strategic recommendation — with decision framework, prioritized actions, and next-step roadmap.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F8F6F1] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C9943A] text-sm font-semibold tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0B1F3A] mt-3 mb-5">
            Services
          </h2>
          <p className="text-[#0B1F3A]/60 text-lg max-w-2xl mx-auto">
            From initial market discovery to strategic recommendations —
            everything your leadership team needs to move with confidence in APAC.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-8 border border-[#EDE9E0] hover:border-[#C9943A]/40 hover:shadow-lg transition-all duration-300 group flex flex-col"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl mb-5">{s.icon}</div>
              <h3 className="font-serif text-xl text-[#0B1F3A] font-semibold mb-3 group-hover:text-[#C9943A] transition-colors duration-200">
                {s.title}
              </h3>
              <p className="text-[#0B1F3A]/60 text-sm leading-relaxed mb-6">
                {s.description}
              </p>

              {/* What's included */}
              <div className="mb-6">
                <div className="text-[#0B1F3A] text-xs font-semibold uppercase tracking-wider mb-3">
                  What&apos;s included
                </div>
                <ul className="space-y-2">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#0B1F3A]/70">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#C9943A] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sample deliverable */}
              <div className="mt-auto pt-6 border-t border-[#EDE9E0]">
                <div className="text-[#0B1F3A] text-xs font-semibold uppercase tracking-wider mb-2">
                  Sample Deliverable
                </div>
                <div className="inline-flex items-center gap-1.5 bg-[#C9943A]/10 text-[#C9943A] text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {s.deliverable}
                </div>
                <p className="text-[#0B1F3A]/50 text-xs leading-relaxed">
                  {s.deliverableDetail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
