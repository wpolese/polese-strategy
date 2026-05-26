"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "/#services" },
    { label: "Why PSI", href: "/#why-psi" },
    { label: "Process", href: "/#process" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/blog" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B1F3A]/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-[#C9943A] rounded flex items-center justify-center">
            <span className="font-serif text-white font-bold text-sm">PSI</span>
          </div>
          <span className="font-serif text-white font-semibold text-lg leading-tight hidden sm:block">
            Polese Strategic<br />
            <span className="text-[#C9943A] text-sm font-normal">Insights</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-[#C9943A] text-sm font-medium transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="bg-[#C9943A] hover:bg-[#E0B060] text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-5 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

        {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B1F3A] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-[#C9943A] text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="bg-[#C9943A] text-white text-sm font-semibold px-5 py-2.5 rounded text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
