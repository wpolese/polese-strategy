import Link from "next/link";
import { posts } from "@/lib/posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Insights | Polese Strategic Insights",
  description:
    "Strategic analysis and market insights on APAC market entry, competitive dynamics, and business model adaptation across Asia-Pacific.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F8F6F1] min-h-screen pt-28 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <span className="text-[#C9943A] text-sm font-semibold tracking-widest uppercase">
              PSI Insights
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-[#0B1F3A] mt-3 mb-5">
              Insights & Analysis
            </h1>
            <p className="text-[#0B1F3A]/60 text-lg max-w-2xl">
              Strategic thinking on APAC market entry, competitive dynamics, and
              what it actually takes to build a defensible position across
              Asia-Pacific markets.
            </p>
          </div>

          {/* Post list */}
          <div className="space-y-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <article className="bg-white border border-[#EDE9E0] rounded-2xl p-8 hover:border-[#C9943A]/40 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#C9943A]/10 text-[#C9943A] text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-[#0B1F3A]/40 text-xs">{post.date}</span>
                    <span className="text-[#0B1F3A]/40 text-xs">·</span>
                    <span className="text-[#0B1F3A]/40 text-xs">{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-xl md:text-2xl text-[#0B1F3A] font-semibold mb-3 group-hover:text-[#C9943A] transition-colors duration-200 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-[#0B1F3A]/60 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#C9943A] text-sm font-semibold">
                    Read article
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
