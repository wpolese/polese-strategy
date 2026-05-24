"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-[#0B1F3A] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: copy */}
          <div>
            <span className="text-[#C9943A] text-sm font-semibold tracking-widest uppercase">
              Get in Touch
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mt-3 mb-6">
              Start the<br />
              <span className="text-[#C9943A] italic">Conversation</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Whether you&apos;re evaluating a new APAC market, stress-testing your
              current strategy, or looking for a research partner — let&apos;s talk
              about what you need and whether PSI is the right fit.
            </p>

            <div className="space-y-5">
              {[
                { icon: "📍", label: "Based in", value: "Seoul, South Korea" },
                { icon: "🌏", label: "Coverage", value: "Asia-Pacific Markets" },
                { icon: "✉️", label: "Email", value: "will@polesestrategy.com" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <div className="text-white/40 text-xs font-medium uppercase tracking-wide">
                      {item.label}
                    </div>
                    <div className="text-white font-medium mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            {status === "sent" ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-serif text-2xl text-white mb-3">Message received</h3>
                <p className="text-white/60">
                  Thanks for reaching out. Will personally reviews every inquiry
                  and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/60 text-xs font-medium uppercase tracking-wide mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C9943A]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-medium uppercase tracking-wide mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C9943A]/60 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-medium uppercase tracking-wide mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Your company name"
                    className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C9943A]/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-medium uppercase tracking-wide mb-2">
                    How can we help? *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your APAC challenge or opportunity..."
                    className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C9943A]/60 transition-colors resize-none"
                  />
                </div>
                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please email us directly at will@polesestrategy.com
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#C9943A] hover:bg-[#E0B060] disabled:opacity-60 text-white font-semibold py-4 rounded-lg transition-colors duration-200 text-base"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                <p className="text-white/30 text-xs text-center">
                  No sales calls. No spam. Will responds personally.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
