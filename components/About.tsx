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

            <div className="mt-8 flex items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[#C9943A] font-semibold hover:text-[#A87728] transition-colors"
              >
                Work with Will
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/willpolese/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#0B1F3A]/50 hover:text-[#0B1F3A] transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
