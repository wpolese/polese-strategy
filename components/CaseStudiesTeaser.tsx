import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

const FEATURED_SLUGS = [
  "linkedin-china",
  "vodafone-japan",
  "kelloggs-india",
  "mcdonalds-india",
];

export default function CaseStudiesTeaser() {
  const featured = caseStudies.filter((c) => FEATURED_SLUGS.includes(c.slug));

  return (
    <section id="case-studies" className="bg-[#0B1F3A] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[#C9943A] text-sm font-semibold tracking-widest uppercase">
              Case Studies
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mt-2">
              What Gets Companies Into Trouble in APAC
            </h2>
            <p className="text-white/50 text-base mt-3 max-w-xl">
              Six companies that entered with capital and brand recognition. Four markets. One pattern.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="hidden md:inline-flex items-center gap-2 text-[#C9943A] text-sm font-semibold hover:text-[#E0B060] transition-colors flex-shrink-0 ml-8"
          >
            All case studies
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((c) => (
            <Link key={c.slug} href={`/case-studies/${c.slug}`} className="block group">
              <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C9943A]/40 rounded-xl p-6 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      c.outcome === "failure"
                        ? "bg-red-500/20 text-red-300"
                        : "bg-emerald-500/20 text-emerald-300"
                    }`}
                  >
                    {c.outcome === "failure" ? "Failure" : "Success"}
                  </span>
                  <span className="text-white/30 text-xs">{c.market}</span>
                </div>
                <div className="text-white/30 text-xs mb-2">{c.company} · {c.period}</div>
                <h3 className="font-serif text-sm text-white font-semibold leading-snug mb-3 group-hover:text-[#C9943A] transition-colors duration-200 flex-1">
                  {c.headline}
                </h3>
                <span className="inline-flex items-center gap-1 text-[#C9943A] text-xs font-semibold mt-3">
                  Read
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 md:hidden text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[#C9943A] text-sm font-semibold hover:text-[#E0B060] transition-colors"
          >
            All case studies
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
