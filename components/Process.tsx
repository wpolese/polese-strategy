const steps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We start with a focused conversation to understand your strategic question, the decisions at stake, and what good research output looks like for your team.",
  },
  {
    step: "02",
    title: "Scoped Research Plan",
    description:
      "PSI delivers a clear research scope and timeline — covering the exact markets, competitors, channels, and questions we'll address.",
  },
  {
    step: "03",
    title: "Research & Analysis",
    description:
      "We execute structured research across relevant APAC markets, synthesizing data into organized, traceable findings your team can act on.",
  },
  {
    step: "04",
    title: "Strategic Deliverable",
    description:
      "Final output is a concise, decision-ready brief or deck — built for executive review, with clear findings and actionable recommendations.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#F8F6F1] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C9943A] text-sm font-semibold tracking-widest uppercase">
            How It Works
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0B1F3A] mt-3 mb-5">
            Our Process
          </h2>
          <p className="text-[#0B1F3A]/60 text-lg max-w-2xl mx-auto">
            A clear, structured engagement — so you always know where
            the project stands and what comes next.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-[#C9943A]/20" style={{ left: "12.5%", right: "12.5%" }} />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="relative text-center lg:text-left">
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-[#0B1F3A] rounded-2xl mb-6 mx-auto lg:mx-0">
                  <span className="font-serif text-[#C9943A] text-2xl font-bold">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#0B1F3A] font-semibold mb-3">
                  {s.title}
                </h3>
                <p className="text-[#0B1F3A]/60 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
