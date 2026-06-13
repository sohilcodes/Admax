import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul M.",
    role: "DTC Brand Owner",
    company: "StyleDrop India",
    rating: 5,
    text: "Accounts were delivered within hours. Clean tier has been running for 3 months with zero issues. Best provider I've worked with.",
    spent: "₹45L spent",
  },
  {
    name: "Aakash T.",
    role: "Media Buyer",
    company: "Performance Labs",
    rating: 5,
    text: "The replacement protocol is real — got a replacement within 24 hours. Support is genuinely 24/7. Highly professional team.",
    spent: "₹1.2Cr spent",
  },
  {
    name: "Priya S.",
    role: "E-commerce Founder",
    company: "NutraPlus",
    rating: 5,
    text: "Gray Hat tier was perfect for our nutra campaigns. Stability, clear rules, fast onboarding. Will never go back to other providers.",
    spent: "₹80L spent",
  },
  {
    name: "Dev K.",
    role: "Agency Head",
    company: "ScaleX Media",
    rating: 5,
    text: "Managing 12+ accounts across three tiers. Consistent delivery, great documentation, and the support team actually knows Meta ads.",
    spent: "₹3Cr+ spent",
  },
  {
    name: "Sania R.",
    role: "Affiliate Marketer",
    company: "Independent",
    rating: 5,
    text: "The US BM accounts have insane spend limits. Pre-warmed properly, Tier-1 geo, everything as described. Transparent pricing.",
    spent: "₹60L spent",
  },
  {
    name: "Vikram P.",
    role: "SaaS Founder",
    company: "CloudBase",
    rating: 5,
    text: "Clean tier for SaaS is a game changer. No policy issues, high limits, and the account documentation is world-class.",
    spent: "₹25L spent",
  },
];

export default function Testimonials() {
  return (
    <section id="proofs" className="py-20">
      <hr className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold text-blue-400 uppercase tracking-widest mb-3 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Client Success &{" "}
            <span className="gradient-text">Proofs</span>
          </h2>
          <p className="text-zinc-400 mt-3 text-base">
            Real results from real advertisers scaling with our infrastructure.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-12">
          {[
            { v: "311+", l: "Brands" },
            { v: "99%", l: "Uptime" },
            { v: "24/7", l: "Support" },
          ].map((s, i) => (
            <div
              key={i}
              className="text-center bg-zinc-900/60 border border-zinc-800 rounded-xl py-3"
            >
              <div className="text-2xl font-black gradient-text">{s.v}</div>
              <div className="text-zinc-500 text-xs">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-hover neon-border rounded-2xl bg-zinc-900/50 p-5 flex flex-col gap-4"
            >
              {/* Quote icon */}
              <Quote size={20} className="text-blue-500/40" />

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={13}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-zinc-300 text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-zinc-500 text-xs">
                    {t.role} · {t.company}
                  </p>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  {t.spent}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
              }
