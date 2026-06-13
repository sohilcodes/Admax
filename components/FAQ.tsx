"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";

const faqs = [
  {
    q: "Do you work with all types of businesses and verticals?",
    a: "We work with a wide range of verticals — from compliant DTC and SaaS brands on our Clean Tier, to health, nutra, and dating on Gray Hat, and high-risk categories on our specialty tiers. We assess each enquiry to recommend the right account type. Contact us to discuss your specific vertical.",
  },
  {
    q: "How do I get started and place an order?",
    a: "Simply fill out the contact form below or reach us via WhatsApp/email. Share your business vertical, monthly ad spend, and the account type you're interested in. Our team will respond within a few hours with a tailored recommendation and onboarding instructions.",
  },
  {
    q: "What is the delivery time for accounts?",
    a: "Most Clean and Gray Hat tier accounts are delivered within 2–12 hours of payment confirmation. Specialty BM accounts (US, VND) may take up to 24–48 hours depending on availability. We always confirm delivery timelines before you pay.",
  },
  {
    q: "What is the spend limit on these accounts?",
    a: "Spend limits vary by tier and account type. Clean Tier accounts typically start at $50–$500/day and scale with account age. US BM and VND BM accounts come pre-warmed with higher initial limits. Exact limits are shared during onboarding based on your specific account.",
  },
  {
    q: "What happens if an account gets disabled?",
    a: "For tiers with Replacement Available, we provide a free replacement account within 24–48 hours, subject to our replacement policy. For No Replacement tiers (High-Risk / HK accounts), no replacement is provided — this is clearly stated before purchase. We always operate with full transparency.",
  },
  {
    q: "Is there a minimum deposit or fund requirement?",
    a: "Yes. Minimum fund requirements vary by tier. For our Summer Special High-Risk accounts, the minimum fund is $100. Clean and Gray Hat tiers have their own minimums shared during onboarding. Deposit fees are variable and depend on the payment method used.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept USDT (TRC20/ERC20), bank transfers (INR for domestic clients), and select other crypto methods. Payment details are shared privately after initial contact. We never accept chargebacks or reversible payment methods.",
  },
  {
    q: "Do you offer ongoing support after account delivery?",
    a: "Absolutely. 24/7 support is included for all clients via WhatsApp and email. Our team is experienced in Meta ad policy and can help you navigate account setup, campaign structuring, and policy compliance within your chosen tier.",
  },
  {
    q: "Can I purchase multiple accounts?",
    a: "Yes. Bulk account packages are available at discounted rates for agencies and media buyers managing multiple campaigns. Contact us to discuss volume pricing and SLA arrangements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20">
      <hr className="section-divider mb-16" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold text-blue-400 uppercase tracking-widest mb-3 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Got <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-zinc-400 mt-3 text-base">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={clsx(
                "rounded-xl border transition-all duration-300 overflow-hidden",
                openIndex === i
                  ? "border-blue-500/40 bg-zinc-900/80"
                  : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-700"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span
                  className={clsx(
                    "text-sm font-semibold leading-snug transition-colors",
                    openIndex === i ? "text-white" : "text-zinc-300"
                  )}
                >
                  {faq.q}
                </span>
                {openIndex === i ? (
                  <ChevronUp
                    size={16}
                    className="text-blue-400 flex-shrink-0"
                  />
                ) : (
                  <ChevronDown
                    size={16}
                    className="text-zinc-500 flex-shrink-0"
                  />
                )}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4">
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
                                            }
