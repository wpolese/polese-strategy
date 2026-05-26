import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#060F1C] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#C9943A] rounded flex items-center justify-center">
              <span className="font-serif text-white font-bold text-xs">PSI</span>
            </div>
            <div>
              <div className="font-serif text-white font-semibold text-sm">
                Polese Strategic Insights, LLC
              </div>
              <div className="text-white/40 text-xs">APAC Market Entry &amp; Expansion</div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-6 justify-center">
            {["Services", "Why PSI", "Process", "About", "Contact"].map((label) => (
              <Link
                key={label}
                href={`/#${label.toLowerCase().replace(" ", "-")}`}
                className="text-white/40 hover:text-[#C9943A] text-xs transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/case-studies"
              className="text-white/40 hover:text-[#C9943A] text-xs transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className="text-white/40 hover:text-[#C9943A] text-xs transition-colors"
            >
              Insights
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Polese Strategic Insights, LLC. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            polesestrategy.com
          </p>
        </div>
      </div>
    </footer>
  );
}
