export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0B1F3A] flex items-center overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C9943A 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9943A] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="animate-fade-up inline-flex items-center gap-2 bg-[#C9943A]/15 border border-[#C9943A]/30 rounded-full px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 bg-[#C9943A] rounded-full" />
            <span className="text-[#C9943A] text-sm font-medium tracking-wide">
              APAC Market Entry & Expansion
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-100 font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Strategic Clarity<br />
            for{" "}
            <span className="text-[#C9943A] italic">APAC Growth</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up delay-200 text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            Polese Strategic Insights is a CEO-led boutique consultancy helping
            companies confidently enter and expand across Asia-Pacific markets —
            with rigorous research and actionable strategy.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C9943A] hover:bg-[#E0B060] text-white font-semibold px-8 py-4 rounded transition-colors duration-200 text-base"
            >
              Start a Conversation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-[#C9943A]/60 text-white/80 hover:text-white font-semibold px-8 py-4 rounded transition-colors duration-200 text-base"
            >
              View Services
            </a>
          </div>

          {/* Trust bar */}
          <div className="animate-fade-up delay-400 mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-8">
            {[
              { stat: "APAC-Focused", label: "Specialized in Asia-Pacific" },
              { stat: "CEO-Led", label: "Direct executive involvement" },
              { stat: "End-to-End", label: "Research to strategy" },
            ].map((item) => (
              <div key={item.stat}>
                <div className="font-serif text-[#C9943A] text-xl font-bold">{item.stat}</div>
                <div className="text-white/50 text-sm mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8F6F1] to-transparent" />
    </section>
  );
}
