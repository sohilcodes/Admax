"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Account Types", href: "#accounts" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/60 shadow-lg shadow-black/30"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white font-black text-sm">S</span>
            </div>
            <span className="text-white font-extrabold text-xl tracking-tight">
              Sohil
              <span className="gradient-text">Hub</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-200 hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918511882726"
              className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors"
            >
              <Phone size={14} className="text-blue-400" />
              <span>+91 85118 82726</span>
            </a>
            <a
              href="#contact"
              className="btn-primary flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white"
            >
              Contact Us
              <ChevronRight size={14} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-zinc-400 hover:text-white p-2 rounded-md"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "lg:hidden overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-zinc-900/98 backdrop-blur-md border-b border-zinc-800 px-4 pb-4 pt-2 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-800 mt-2 flex flex-col gap-2">
            <a
              href="tel:+918511882726"
              className="flex items-center gap-2 px-3 py-2 text-zinc-400 text-sm"
            >
              <Phone size={14} className="text-blue-400" />
              +91 85118 82726
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
