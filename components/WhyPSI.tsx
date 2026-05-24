const differentiators = [
  {
    number: "01",
    title: "CEO in Every Engagement",
    description:
      "You work directly with Will Polese — not a junior analyst. Every research output and strategic recommendation reflects senior-level judgment from day one.",
  },
  {
    number: "02",
    title: "APAC Is the Only Focus",
    description:
      "We don't cover every market. We go deep on Asia-Pacific — the nuances, the regulatory landscape, the cultural dynamics that generic consultants miss.",
  },
  {
    number: "03",
    title: "Research Built for Decisions",
    description:
      "Every deliverable is structured to help executives make faster, better-informed decisions. No bloated decks. No findings that gather dust.",
  },
  {
    number: "04",
    title: "Honest About Scope",
    description:
      "We're clear about what PSI does and doesn't own. Research execution and strategic inputs are our strength — and we're rigorous about delivering them well.",
  },
];

export default function WhyPSI() {
  return (
    <section id="why-psi" className="bg-[#0B1F3A] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C9943A] text-sm font-semibold tracking-widest uppercase">
            Why Work With Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-3 mb-5">
            The PSI Difference
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            What makes Polese Strategic Insights the right partner for
            your APAC strategy work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {differentiators.map((d) => (
            <div
              key={d.number}
              className="bg-white/5 border border-white/10 hover:border-[#C9943A]/40 rounded-2xl p-8 transition-all duration-300 group"
            >
              <div className="font-serif text-[#C9943A]/40 text-5xl font-bold mb-4 group-hover:text-[#C9943A]/70 transition-colors">
                {d.number}
              </div>
              <h3 className="font-serif text-xl text-white font-semibold mb-3">
                {d.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
