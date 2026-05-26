import { notFound } from "next/navigation";
import Link from "next/link";
import { getCaseStudy, caseStudies } from "@/lib/case-studies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.headline} | Polese Strategic Insights`,
    description: cs.excerpt,
  };
}

const OUTCOME_STYLES: Record<string, { badge: string; accent: string; heroBg: string }> = {
  failure: {
    badge: "bg-red-500/20 text-red-300",
    accent: "#ef4444",
    heroBg: "bg-[#0B1F3A]",
  },
  success: {
    badge: "bg-emerald-500/20 text-emerald-300",
    accent: "#10b981",
    heroBg: "bg-[#0B1F3A]",
  },
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const styles = OUTCOME_STYLES[cs.outcome];

  return (
    <>
      <Navbar />
      <main className="bg-[#F8F6F1] min-h-screen">
        {/* Hero */}
        <div className={`${styles.heroBg} pt-28 pb-16 px-6`}>
          <div className="max-w-3xl mx-auto">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-white/50 hover:text-[#C9943A] text-sm mb-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              All Case Studies
            </Link>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${styles.badge}`}>
                {cs.outcome === "failure" ? "Failure" : "Success"}
              </span>
              <span className="text-white/40 text-xs">{cs.market}</span>
              <span className="text-white/40 text-xs">·</span>
              <span className="text-white/40 text-xs">{cs.industry}</span>
              <span className="text-white/40 text-xs">·</span>
              <span className="text-white/40 text-xs">{cs.period}</span>
              <span className="text-white/40 text-xs">·</span>
              <span className="text-white/40 text-xs">{cs.readTime}</span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-5">
              {cs.headline}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">{cs.summary}</p>
          </div>
        </div>

        {/* Body */}
        <article className="max-w-3xl mx-auto px-6 py-16">
          <div
            className="prose-psi"
            dangerouslySetInnerHTML={{ __html: cs.content }}
          />

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-[#EDE9E0]">
            <div className="bg-[#0B1F3A] rounded-2xl p-8 text-center">
              <h3 className="font-serif text-2xl text-white mb-3">
                Planning your own APAC entry?
              </h3>
              <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                PSI builds the research that protects your investment before you commit capital to a new market.
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
        </article>
      </main>
      <Footer />
    </>
  );
}
