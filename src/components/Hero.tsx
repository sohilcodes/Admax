import {
  ShieldCheck,
  TrendingUp,
  BadgeCheck,
  ArrowRight,
  Zap,
  Star,
} from "lucide-react";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "311+", label: "Brands Served" },
  { value: "20+ Cr", label: "Ad Spend Managed" },
];

const trustBadges = [
  { icon: BadgeCheck, label: "Meta Verified Business Partner" },
  { icon: ShieldCheck, label: "Secure Handover Protocol" },
  { icon: Zap, label: "Instant Replacement" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Summer Offer Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-8">
          <Star size={12} className="text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium text-blue-300">
            Summer Offer 2026 — Special Offers Live Now
          </span>
          <Star size={12} className="text-yellow-400 fill-yellow-400" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-4">
          <span className="text-white">Sohil Account Hub</span>
          <br />
          <span className="gradient-text">Premium Meta Ad Solutions</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-zinc-400 font-light mt-4 mb-8 tracking-wide">
          Scale with Precision.{" "}
          <span className="text-zinc-300 font-medium">
            Meta Ad Infrastructure.
          </span>
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-zinc-400 text-base sm:text-lg leading-relaxed mb-10">
          Premium Clean, Gray Hat, and High-Risk solutions engineered for
          stability. Transparent rules, 24/7 support, and instant replacement
          protocols for serious advertisers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
          <a
            href="#contact"
            className="btn-primary flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white shadow-2xl"
          >
            <ShieldCheck size={18} />
            Secure Your Account
            <ArrowRight size={16} />
          </a>
          <a
            href="#accounts"
            className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-zinc-300 border border-zinc-700 hover:border-blue-500/50 hover:text-white hover:bg-zinc-800/50 transition-all duration-300"
          >
            <TrendingUp size={18} />
            View Account Types
          </a>
        </div>

        {/* Stats Row */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center items-center mb-14">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-3xl sm:text-4xl font-black gradient-text">
                {stat.value}
              </span>
              <span className="text-zinc-500 text-sm font-medium uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center flex-wrap">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 rounded-full px-4 py-2 neon-border"
            >
              <badge.icon size={14} className="text-blue-400" />
              <span className="text-zinc-300 text-xs font-medium">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
              }
