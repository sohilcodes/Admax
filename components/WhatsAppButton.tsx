import { Phone, Mail, Shield } from "lucide-react";

const footerLinks = {
  Navigation: [
    { label: "Home", href: "#home" },
    { label: "Account Types", href: "#accounts" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  "Account Tiers": [
    { label: "Clean Tier", href: "#accounts" },
    { label: "Gray Hat", href: "#accounts" },
    { label: "HK Accounts", href: "#accounts" },
    { label: "US BM Accounts", href: "#accounts" },
    { label: "VND BM Accounts", href: "#accounts" },
  ],
  Platforms: [
    { label: "Meta / Facebook Ads", href: "#accounts" },
    { label: "Google Ads", href: "#accounts" },
    { label: "TikTok Ads", href: "#accounts" },
    { label: "Telegram Cabinet", href: "#accounts" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 bg-zinc-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-white font-black text-sm">S</span>
              </div>
              <span className="text-white font-extrabold text-xl">
                Sohil<span className="gradient-text">Hub</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mb-5">
              Premium Meta ad account infrastructure for serious advertisers.
              5+ years of experience, 311+ brands served.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:pathansohilkhan2005@gmail.com"
                className="flex items-center gap-2 text-zinc-500 hover:text-blue-400 text-sm transition-colors"
              >
                <Mail size={13} />
                pathansohilkhan2005@gmail.com
              </a>
              <a
                href="tel:+918511882726"
                className="flex items-center gap-2 text-zinc-500 hover:text-blue-400 text-sm transition-colors"
              >
                <Phone size={13} />
                +91 85118 82726
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="rounded-xl bg-zinc-900/60 border border-zinc-800 p-4 mb-8">
          <div className="flex items-start gap-3">
            <Shield size={14} className="text-yellow-500 mt-0.5 flex-shrink-0" />
            <p className="text-zinc-600 text-xs leading-relaxed">
              <strong className="text-zinc-500">Disclaimer:</strong> Sohil Account Hub provides ad account infrastructure services. Clients are responsible for ensuring their campaigns comply with applicable platform policies and local laws. We do not guarantee campaign performance outcomes. Accounts are provided as-is; replacement policies apply only to eligible tiers as described. Use of specialty-tier accounts is at the client's own risk.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-zinc-900">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Sohil Account Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
