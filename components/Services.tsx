const services = [
  {
    icon: "🔍",
    title: "Market & Industry Research",
    description:
      "In-depth secondary research on APAC markets, customer segments, market sizing (TAM/SAM), and demand trends — organized into decision-ready formats.",
  },
  {
    icon: "⚔️",
    title: "Competitive Analysis",
    description:
      "Comprehensive competitor profiling including products, pricing, positioning, and go-to-market approach. Landscape summaries that reveal real white space.",
  },
  {
    icon: "🗺️",
    title: "Go-To-Market Strategy",
    description:
      "Research-backed GTM option evaluation covering sales models, channel structures, local distributors, and country-specific entry considerations.",
  },
  {
    icon: "🤝",
    title: "Partner Identification",
    description:
      "Identification and background assessment of strategic and commercial partners — shortlisting materials built for executive diligence conversations.",
  },
  {
    icon: "⚠️",
    title: "Risk & Market Context",
    description:
      "Regulatory, cultural, and operational risk research across APAC markets, with concise context briefs that surface the barriers before you hit them.",
  },
  {
    icon: "💡",
    title: "Strategic Synthesis",
    description:
      "CEO-level synthesis that turns research into clear recommendations — the final layer of analysis that makes your strategy actionable and defensible.",
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
              className="bg-white rounded-2xl p-8 border border-[#EDE9E0] hover:border-[#C9943A]/40 hover:shadow-lg transition-all duration-300 group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl mb-5">{s.icon}</div>
              <h3 className="font-serif text-xl text-[#0B1F3A] font-semibold mb-3 group-hover:text-[#C9943A] transition-colors duration-200">
                {s.title}
              </h3>
              <p className="text-[#0B1F3A]/60 text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
