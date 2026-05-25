import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#EDE9E0] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-72 h-80 rounded-3xl overflow-hidden">
                <Image
                  src="/will-polese.png"
                  alt="Will Polese, CEO & Founder of Polese Strategic Insights"
                  width={288}
                  height={320}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#C9943A] text-white rounded-xl px-4 py-3 shadow-lg">
                <div className="font-serif text-sm font-bold">CEO &amp; Founder</div>
                <div className="text-xs text-white/80">Polese Strategic Insights</div>
              </div>
            </div>
          </div>

          {/* Right: bio */}
          <div>
            <span className="text-[#C9943A] text-sm font-semibold tracking-widest uppercase">
              About
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0B1F3A] mt-3 mb-6">
              Will Polese
            </h2>
            <div className="space-y-4 text-[#0B1F3A]/70 leading-relaxed">
              <p>
                Will Polese is the founder and CEO of Polese Strategic Insights,
                a boutique consultancy built around one focus: helping companies
                navigate APAC markets with confidence and clarity.
              </p>
              <p>
                With deep experience in strategy, competitive intelligence, and
                international market analysis, Will works directly with executive
                teams to deliver the research foundations that enable high-impact
                decisions — from initial market assessment through to partner
                selection and GTM execution.
              </p>
              <p>
                PSI was built on the belief that great strategy starts with great
                research — and that executives deserve a partner who can deliver
                both.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {["APAC Market Entry", "Competitive Intelligence", "GTM Strategy", "Partner Development"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-[#0B1F3A]/10 text-[#0B1F3A] text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-[#C9943A] font-semibold hover:text-[#A87728] transition-colors"
            >
              Work with Will
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
