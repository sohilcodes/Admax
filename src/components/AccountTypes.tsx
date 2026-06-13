import {
  ShieldCheck,
  AlertTriangle,
  Globe,
  TrendingUp,
  Zap,
  DollarSign,
  RefreshCw,
  XCircle,
} from "lucide-react";
import clsx from "clsx";

const accounts = [
  {
    name: "Clean Tier",
    tag: "Safest",
    tagColor: "text-emerald-400",
    accentBorder: "border-emerald-500/30",
    accentGlow: "hover:border-emerald-500/60 hover:shadow-emerald-500/10",
    icon: ShieldCheck,
    iconColor: "text-emerald-400",
    description: "Best for compliant verticals with stable long-term campaigns.",
    useCases: ["DTC", "Print-on-Demand", "Clean SaaS", "Education", "Non-Gambling"],
    price: null,
    replacement: true,
    badge: "Replacement Available",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    name: "Gray Hat (GH)",
    tag: "Moderate",
    tagColor: "text-yellow-400",
    accentBorder: "border-yellow-500/30",
    accentGlow: "hover:border-yellow-500/60 hover:shadow-yellow-500/10",
    icon: TrendingUp,
    iconColor: "text-yellow-400",
    description: "Suitable for semi-restricted verticals with careful campaign management.",
    useCases: ["Health & Wellness", "Nutra", "Dating", "Digital Marketing"],
    price: null,
    replacement: true,
    badge: "Replacement Available",
    badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  },
  {
    name: "HK Ad Account",
    tag: "High Risk",
    tagColor: "text-red-400",
    accentBorder: "border-red-500/30",
    accentGlow: "hover:border-red-500/60 hover:shadow-red-500/10",
    icon: AlertTriangle,
    iconColor: "text-red-400",
    description: "HongKong-based accounts for high-risk verticals. No replacement.",
    useCases: ["Gambling", "Crypto", "FX / Forex", "High-Risk Offers"],
    price: "$50",
    replacement: false,
    badge: "No Replacement",
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
  },
  {
    name: "US BM Ad Account",
    tag: "High Risk",
    tagColor: "text-blue-400",
    accentBorder: "border-blue-500/30",
    accentGlow: "hover:border-blue-500/60 hover:shadow-blue-500/10",
    icon: Globe,
    iconColor: "text-blue-400",
    description: "Pre-warmed US-based Business Manager accounts. Tier-1 geo, higher spend limits.",
    useCases: ["High Spend Campaigns", "Tier-1 Geo Targeting", "Pre-Warmed BM"],
    price: "$30",
    replacement: true,
    badge: "Replacement Available",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    name: "VND BM Ad Account",
    tag: "High Risk",
    tagColor: "text-purple-400",
    accentBorder: "border-purple-500/30",
    accentGlow: "hover:border-purple-500/60 hover:shadow-purple-500/10",
    icon: Zap,
    iconColor: "text-purple-400",
    description: "Vietnam BM accounts — maximum resilience, built for heavy traffic volume.",
    useCases: ["Heavy Traffic Campaigns", "Max Resilience", "Volume Scaling"],
    price: "$30",
    replacement: true,
    badge: "Replacement Available",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    name: "Google Ads Account",
    tag: "High Risk",
    tagColor: "text-red-400",
    accentBorder: "border-red-500/30",
    accentGlow: "hover:border-red-500/60 hover:shadow-red-500/10",
    icon: Globe,
    iconColor: "text-red-400",
    description: "Google Ads accounts for restricted verticals. Deposit details on enquiry.",
    useCases: ["Restricted Verticals", "Search & Display", "High-Risk Offers"],
    price: "$50",
    replacement: false,
    badge: "No Replacement",
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
  },
  {
    name: "TikTok Ads Account",
    tag: "High Risk",
    tagColor: "text-pink-400",
    accentBorder: "border-pink-500/30",
    accentGlow: "hover:border-pink-500/60 hover:shadow-pink-500/10",
    icon: TrendingUp,
    iconColor: "text-pink-400",
    description: "TikTok ad accounts for aggressive scaling. Deposit info available on request.",
    useCases: ["TikTok Native Ads", "Restricted Verticals", "Fast Scaling"],
    price: "$50",
    replacement: false,
    badge: "No Replacement",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  },
  {
    name: "Telegram Euro Cabinet",
    tag: "Premium",
    tagColor: "text-cyan-400",
    accentBorder: "border-cyan-500/30",
    accentGlow: "hover:border-cyan-500/60 hover:shadow-cyan-500/10",
    icon: DollarSign,
    iconColor: "text-cyan-400",
    description: "Euro-denominated cabinet via Telegram. Premium setup, high-trust environment.",
    useCases: ["Euro-Denominated Spend", "High-Trust Campaigns", "Premium Advertisers"],
    price: "300€",
    priceLabel: "Setup",
    replacement: null,
    badge: "Deposit Info on Request",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
];

export default function AccountTypes() {
  return (
    <section id="accounts" className="py-20">
      <hr className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold text-blue-400 uppercase tracking-widest mb-3 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Ad Account Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Choose Your{" "}
            <span className="gradient-text">Account Type</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-base">
            Every tier is engineered for stability. Pick the solution that
            matches your vertical, risk tolerance, and spend goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {accounts.map((account, i) => (
            <div
              key={i}
              className={clsx(
                "card-hover relative rounded-2xl bg-zinc-900/50 border p-5 flex flex-col gap-4 cursor-pointer",
                account.accentBorder,
                account.accentGlow,
                "transition-all duration-300 shadow-lg hover:shadow-2xl"
              )}
            >
              {/* Icon + Tag */}
              <div className="flex items-start justify-between">
                <div
                  className={clsx(
                    "w-10 h-10 rounded-xl flex items-center justify-center",
                    "bg-zinc-800"
                  )}
                >
                  <account.icon size={20} className={account.iconColor} />
                </div>
                <span
                  className={clsx(
                    "text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border",
                    account.badgeColor
                  )}
                >
                  {account.tag}
                </span>
              </div>

              {/* Name */}
              <div>
                <h3 className="text-white font-bold text-base leading-tight">
                  {account.name}
                </h3>
                <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
                  {account.description}
                </p>
              </div>

              {/* Use Cases */}
              <div className="flex flex-wrap gap-1.5">
                {account.useCases.map((uc, j) => (
                  <span
                    key={j}
                    className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-md border border-zinc-700/50"
                  >
                    {uc}
                  </span>
                ))}
              </div>

              {/* Price */}
              {account.price && (
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black text-white">
                    {account.price}
                  </span>
                  {account.priceLabel && (
                    <span className="text-zinc-500 text-xs">
                      {account.priceLabel}
                    </span>
                  )}
                </div>
              )}

              {/* Replacement Badge */}
              <div className="mt-auto">
                <span
                  className={clsx(
                    "inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg border",
                    account.badgeColor
                  )}
                >
                  {account.replacement === true ? (
                    <RefreshCw size={11} />
                  ) : account.replacement === false ? (
                    <XCircle size={11} />
                  ) : (
                    <DollarSign size={11} />
                  )}
                  {account.badge}
                </span>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={clsx(
                  "block text-center text-xs font-bold py-2 rounded-xl border transition-all duration-200",
                  "border-zinc-700 text-zinc-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/5"
                )}
              >
                Enquire Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
              }
