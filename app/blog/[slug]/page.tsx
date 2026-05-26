import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, posts } from "@/lib/posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Polese Strategic Insights`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-[#F8F6F1] min-h-screen">
        {/* Hero */}
        <div className="bg-[#0B1F3A] pt-28 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/50 hover:text-[#C9943A] text-sm mb-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              All Insights
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-[#C9943A]/20 text-[#C9943A] text-xs font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-white/40 text-xs">{post.date}</span>
              <span className="text-white/40 text-xs">·</span>
              <span className="text-white/40 text-xs">{post.readTime}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-5">
              {post.title}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              {post.subtitle}
            </p>
          </div>
        </div>

        {/* Body */}
        <article className="max-w-3xl mx-auto px-6 py-16">
          <div
            className="prose-psi"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-[#EDE9E0]">
            <div className="bg-[#0B1F3A] rounded-2xl p-8 text-center">
              <h3 className="font-serif text-2xl text-white mb-3">
                Working on an APAC entry decision?
              </h3>
              <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                PSI builds the research foundation that makes your strategy defensible — before you commit capital.
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
