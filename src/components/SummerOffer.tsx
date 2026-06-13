import { Flame, Clock, DollarSign, AlertTriangle } from "lucide-react";

export default function SummerOffer() {
  return (
    <section className="relative py-16 overflow-hidden">
      <hr className="section-divider mb-16" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 mb-4">
            <Flame size={14} className="text-orange-400" />
            <span className="text-sm font-semibold text-orange-300 uppercase tracking-widest">
              Limited Time Allocation
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            2026{" "}
            <span className="gradient-text">Summer Offer</span>
          </h2>
          <p className="text-zinc-400 mt-2 text-sm">
            Spots are filling fast — secure your allocation now
          </p>
        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Main Offer Card */}
          <div className="relative card-hover neon-border rounded-2xl bg-zinc-900/60 p-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl" />
            <div className="flex items-center gap-2 mb-4">
              <Flame size={18} className="text-orange-400" />
              <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">
                High-Risk Special
              </span>
            </div>
            <div className="flex items-end gap-2 mb-1">
              <span className="text-5xl font-black text-white">$50</span>
              <span className="text-zinc-400 mb-2 text-sm">/ Account</span>
            </div>
            <p className="text-zinc-500 text-xs mb-5 flex items-center gap-1">
              <AlertTriangle size={12} className="text-yellow-500" />
              No Replacement on this tier
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400 flex items-center gap-2">
                  <DollarSign size={13} className="text-green-400" />
                  Minimum Fund
                </span>
                <span className="text-white font-semibold">$100</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400 flex items-center gap-2">
                  <DollarSign size={13} className="text-blue-400" />
                  Deposit Fee
                </span>
                <span className="text-yellow-300 font-semibold">Variable</span>
              </div>
            </div>
            <a
              href="#contact"
              className="mt-6 block w-full text-center bg-orange-600/80 hover:bg-orange-500 transition-colors rounded-xl py-2.5 text-sm font-bold text-white"
            >
              Claim Summer Deal
            </a>
          </div>

          {/* Timer / Urgency Card */}
          <div className="card-hover rounded-2xl bg-gradient-to-br from-blue-950/60 to-zinc-900/60 border border-blue-900/40 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} className="text-blue-400" />
                <span className="text-blue-400 font-bold text-sm uppercase tracking-wider">
                  Why Act Now?
                </span>
              </div>
              <ul className="space-y-3 text-sm text-zinc-300">
                {[
                  "Summer pricing valid for limited accounts only",
                  "Instant delivery on most tier types",
                  "Dedicated onboarding support included",
                  "All tiers come with full documentation",
                  "Priority queue for summer applicants",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#accounts"
              className="mt-6 block w-full text-center border border-blue-500/40 hover:border-blue-400 hover:bg-blue-500/10 transition-colors rounded-xl py-2.5 text-sm font-semibold text-blue-300"
            >
              Browse All Account Types
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
