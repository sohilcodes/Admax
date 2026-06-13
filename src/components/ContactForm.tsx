"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
  User,
  Briefcase,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  vertical: string;
  message: string;
};

const verticals = [
  "DTC / E-Commerce",
  "Health & Nutra",
  "SaaS / Software",
  "Education",
  "Digital Marketing Agency",
  "Gambling / Gaming",
  "Crypto / FX",
  "Dating",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("Enquiry submitted:", data);
    await new Promise((r) => setTimeout(r, 800)); // Simulate async
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20">
      <hr className="section-divider mb-16" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold text-blue-400 uppercase tracking-widest mb-3 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Get Started Today
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Ready to <span className="gradient-text">Scale?</span>
          </h2>
          <p className="text-zinc-400 mt-3 text-base max-w-lg mx-auto">
            Tell us about your business and we'll recommend the right account
            type for your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            {[
              {
                icon: Mail,
                label: "Email Us",
                value: "pathansohilkhan2005@gmail.com",
                href: "mailto:pathansohilkhan2005@gmail.com",
                color: "text-blue-400",
                bg: "bg-blue-500/10",
              },
              {
                icon: Phone,
                label: "Call / WhatsApp",
                value: "+91 85118 82726",
                href: "https://wa.me/918511882726",
                color: "text-green-400",
                bg: "bg-green-500/10",
              },
              {
                icon: MessageSquare,
                label: "Response Time",
                value: "Usually within 2–4 hours",
                href: null,
                color: "text-yellow-400",
                bg: "bg-yellow-500/10",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 neon-border"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}
                >
                  <item.icon size={18} className={item.color} />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs font-medium">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`text-sm font-semibold ${item.color} hover:underline`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-semibold">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Assurance Box */}
            <div className="rounded-xl bg-gradient-to-br from-blue-950/50 to-zinc-900/50 border border-blue-900/30 p-5">
              <p className="text-blue-400 font-bold text-sm mb-3">
                Why choose us?
              </p>
              <ul className="space-y-2 text-sm text-zinc-400">
                {[
                  "Transparent pricing, no hidden fees",
                  "Accounts delivered as described",
                  "24/7 dedicated support",
                  "5+ years of Meta expertise",
                  "311+ satisfied brands",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle size={13} className="text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-10 text-center">
                <CheckCircle
                  size={48}
                  className="text-emerald-400 mx-auto mb-4"
                />
                <h3 className="text-white text-xl font-bold mb-2">
                  Enquiry Received!
                </h3>
                <p className="text-zinc-400 text-sm">
                  We'll get back to you within 2–4 hours via email or WhatsApp.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8"
              >
                <h3 className="text-white font-bold text-lg mb-2">
                  Send an Enquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User
                        size={14}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                      />
                      <input
                        {...register("name", { required: "Name is required" })}
                        placeholder="Your name"
                        className="w-full bg-zinc-800/60 border border-zinc-700 rounded-xl px-4 py-3 pl-9 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail
                        size={14}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                      />
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email",
                          },
                        })}
                        type="email"
                        placeholder="you@example.com"
                        className="w-full bg-zinc-800/60 border border-zinc-700 rounded-xl px-4 py-3 pl-9 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">
                      Phone / WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone
                        size={14}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                      />
                      <input
                        {...register("phone", {
                          required: "Phone is required",
                        })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-zinc-800/60 border border-zinc-700 rounded-xl px-4 py-3 pl-9 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Vertical */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">
                      Business Vertical *
                    </label>
                    <div className="relative">
                      <Briefcase
                        size={14}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                      />
                      <select
                        {...register("vertical", {
                          required: "Please select a vertical",
                        })}
                        className="w-full bg-zinc-800/60 border border-zinc-700 rounded-xl px-4 py-3 pl-9 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                      >
                        <option value="" className="bg-zinc-900">
                          Select vertical…
                        </option>
                        {verticals.map((v) => (
                          <option key={v} value={v} className="bg-zinc-900">
                            {v}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.vertical && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.vertical.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">
                    Message / Requirements *
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Please describe your requirements",
                    })}
                    rows={4}
                    placeholder="Tell us about your ad budget, goals, and any specific requirements…"
                    className="w-full bg-zinc-800/60 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Enquiry
                    </>
                  )}
                </button>

                <p className="text-zinc-600 text-xs text-center">
                  By submitting, you agree to be contacted via email or
                  WhatsApp. We never spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
