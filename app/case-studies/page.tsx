import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "APAC Market Entry Case Studies | Polese Strategic Insights",
  description:
    "Real case studies of companies that got APAC market entry wrong — and one that got it right. LinkedIn China, Groupon China, Kellogg's India, Walmart South Korea, Vodafone Japan, Gojek Vietnam, and KitKat Japan.",
};

const OUTCOME_LABELS: Record<string, string> = {
  failure: "Failure",
  success: "Success",
};

const OUTCOME_STYLES: Record<string, string> = {
  failure: "bg-red-50 text-red-700 border border-red-200",
  success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
};

export default function CaseStudiesPage() {
  const failures = caseStudies.filter((c) => c.outcome === "failure");
  const successes = caseStudies.filter((c) => c.outcome === "success");

  return (
    <>
      <Navbar />
      <main className="bg-[#F8F6F1] min-h-screen pt-28 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 max-w-3xl">
            <span className="text-[#C9943A] text-sm font-semibold tracking-widest uppercase">
              PSI Case Studies
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-[#0B1F3A] mt-3 mb-5">
              What APAC Market Entry Actually Looks Like
            </h1>
            <p className="text-[#0B1F3A]/60 text-lg leading-relaxed">
              Six companies that entered APAC markets with capital, brand recognition, and local partners — and still failed. And one that built a model the right way. Each case is documented with sources so you can go deeper.
            </p>
          </div>

          {/* Pattern callout */}
          <div className="bg-[#0B1F3A] rounded-2xl p-8 mb-14">
            <h2 className="font-serif text-xl text-white mb-4">The Pattern Across These Cases</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Assumed transferability", detail: "Global playbook deployed without validating local conditions" },
                { label: "Wrong local intelligence", detail: "Consumer research skipped or misinterpreted" },
                { label: "Underestimated incumbents", detail: "Local competitors with deeper market knowledge" },
                { label: "Misaligned operating model", detail: "Pricing, format, or tech model built for a different market" },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 rounded-xl p-4">
                  <div className="text-[#C9943A] text-xs font-semibold uppercase tracking-wide mb-2">{item.label}</div>
                  <div className="text-white/70 text-sm leading-relaxed">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Failure cases */}
          <div className="mb-14">
            <h2 className="font-serif text-2xl text-[#0B1F3A] mb-6">Failure Cases</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {failures.map((c) => (
                <Link key={c.slug} href={`/case-studies/${c.slug}`} className="block group">
                  <article className="bg-white border border-[#EDE9E0] rounded-2xl p-7 hover:border-[#C9943A]/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${OUTCOME_STYLES[c.outcome]}`}>
                        {OUTCOME_LABELS[c.outcome]}
                      </span>
                      <span className="text-[#0B1F3A]/40 text-xs">{c.market}</span>
                      <span className="text-[#0B1F3A]/40 text-xs">·</span>
                      <span className="text-[#0B1F3A]/40 text-xs">{c.industry}</span>
                    </div>
                    <div className="text-xs text-[#0B1F3A]/40 font-medium mb-2">{c.company} &middot; {c.period}</div>
                    <h3 className="font-serif text-lg text-[#0B1F3A] font-semibold mb-3 group-hover:text-[#C9943A] transition-colors duration-200 leading-snug">
                      {c.headline}
                    </h3>
                    <p className="text-[#0B1F3A]/60 text-sm leading-relaxed mb-5 flex-1">
                      {c.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[#C9943A] text-sm font-semibold mt-auto">
                      Read case study
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          {/* Success cases */}
          <div>
            <h2 className="font-serif text-2xl text-[#0B1F3A] mb-6">Success Case</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {successes.map((c) => (
                <Link key={c.slug} href={`/case-studies/${c.slug}`} className="block group">
                  <article className="bg-white border border-[#EDE9E0] rounded-2xl p-7 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${OUTCOME_STYLES[c.outcome]}`}>
                        {OUTCOME_LABELS[c.outcome]}
                      </span>
                      <span className="text-[#0B1F3A]/40 text-xs">{c.market}</span>
                      <span className="text-[#0B1F3A]/40 text-xs">·</span>
                      <span className="text-[#0B1F3A]/40 text-xs">{c.industry}</span>
                    </div>
                    <div className="text-xs text-[#0B1F3A]/40 font-medium mb-2">{c.company} &middot; {c.period}</div>
                    <h3 className="font-serif text-lg text-[#0B1F3A] font-semibold mb-3 group-hover:text-emerald-700 transition-colors duration-200 leading-snug">
                      {c.headline}
                    </h3>
                    <p className="text-[#0B1F3A]/60 text-sm leading-relaxed mb-5 flex-1">
                      {c.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 text-sm font-semibold mt-auto">
                      Read case study
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-[#EDE9E0] rounded-2xl p-10 text-center">
            <h3 className="font-serif text-2xl text-[#0B1F3A] mb-3">Working on an APAC entry decision?</h3>
            <p className="text-[#0B1F3A]/60 text-sm mb-6 max-w-md mx-auto">
              PSI builds the research foundation that protects your investment before you commit capital to a new market.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#C9943A] hover:bg-[#E0B060] text-white font-semibold px-6 py-3 rounded transition-colors duration-200"
            >
              Start a Conversation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
