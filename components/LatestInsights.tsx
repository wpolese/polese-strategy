import Link from "next/link";
import { posts } from "@/lib/posts";

export default function LatestInsights() {
  const featured = posts[0];
  if (!featured) return null;

  return (
    <section id="insights" className="bg-[#EDE9E0] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[#C9943A] text-sm font-semibold tracking-widest uppercase">
              PSI Insights
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0B1F3A] mt-2">
              Latest Thinking
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-[#C9943A] text-sm font-semibold hover:text-[#A87728] transition-colors"
          >
            All articles
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Featured post card */}
        <Link href={`/blog/${featured.slug}`} className="block group">
          <div className="bg-[#0B1F3A] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="p-10 md:p-14">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#C9943A]/20 text-[#C9943A] text-xs font-semibold px-3 py-1 rounded-full">
                  {featured.category}
                </span>
                <span className="text-white/40 text-xs">{featured.date}</span>
                <span className="text-white/40 text-xs">·</span>
                <span className="text-white/40 text-xs">{featured.readTime}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight mb-4 group-hover:text-[#C9943A] transition-colors duration-200 max-w-3xl">
                {featured.title}
              </h3>
              <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-8">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-[#C9943A] text-sm font-semibold">
                Read article
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        </Link>

        <div className="mt-6 md:hidden text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#C9943A] text-sm font-semibold hover:text-[#A87728] transition-colors"
          >
            All articles
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
