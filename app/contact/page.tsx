"use client";

import { useState } from "react";
import { playfair } from "@/lib/fonts";

const countryCodes = [
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+966", flag: "🇸🇦", name: "KSA" },
  { code: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "+973", flag: "🇧🇭", name: "Bahrain" },
  { code: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+1", flag: "🇺🇸", name: "US" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+92", flag: "🇵🇰", name: "Pakistan" },
  { code: "+63", flag: "🇵🇭", name: "Philippines" },
  { code: "+20", flag: "🇪🇬", name: "Egypt" },
  { code: "+27", flag: "🇿🇦", name: "South Africa" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+971",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = [
      `*New Enquiry from Website*`,
      ``,
      `*Name:* ${form.firstName} ${form.lastName}`,
      `*Email:* ${form.email}`,
      `*Phone:* ${form.countryCode} ${form.phone}`,
      `*Message:* ${form.message}`,
    ].join("%0a");

    const whatsappNumber = "971586695350";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${text}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-white dark:bg-background">
      <section className="w-full pt-40 md:pt-48 pb-20 md:pb-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20 xl:gap-28">

          {/* ── Left: Connect With Us ── */}
          <div className="flex flex-col justify-center">
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-black dark:text-white mb-14 ${playfair.className}`}
            >
              Connect With Us
            </h1>

            <div className="space-y-10">
              {/* Address */}
              <div className="flex items-start gap-5 pb-10 border-b border-black/10 dark:border-white/10">
                <div className="flex-shrink-0 mt-1 text-black/50 dark:text-white/50">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-1">
                    Address
                  </h3>
                  <p className="text-[15px] leading-relaxed text-black/60 dark:text-white/60">
                    Business Bay, Dubai
                    <br />
                    United Arab Emirates
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5 pb-10 border-b border-black/10 dark:border-white/10">
                <div className="flex-shrink-0 mt-1 text-black/50 dark:text-white/50">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-1">
                    Get In Touch
                  </h3>
                  <a
                    href="tel:+971586695350"
                    className="text-[15px] text-black/60 dark:text-white/60 hover:text-[#2d8a4e] transition-colors"
                  >
                    +971 586695350
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5 pb-10 border-b border-black/10 dark:border-white/10">
                <div className="flex-shrink-0 mt-1 text-black/50 dark:text-white/50">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 7l-10 7L2 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-1">
                    Email Us
                  </h3>
                  <a
                    href="mailto:ops.betons@gmail.com"
                    className="text-[15px] text-black/60 dark:text-white/60 hover:text-[#2d8a4e] transition-colors"
                  >
                    ops.betons@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-2">
                {/* Facebook */}
                <a
                  href="#"
                  className="flex items-center justify-center w-11 h-11 rounded-full border border-black/15 dark:border-white/15 text-black/50 dark:text-white/50 hover:border-[#2d8a4e] hover:text-[#2d8a4e] transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a
                  href="#"
                  className="flex items-center justify-center w-11 h-11 rounded-full border border-black/15 dark:border-white/15 text-black/50 dark:text-white/50 hover:border-[#2d8a4e] hover:text-[#2d8a4e] transition-all duration-300"
                  aria-label="X"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  className="flex items-center justify-center w-11 h-11 rounded-full border border-black/15 dark:border-white/15 text-black/50 dark:text-white/50 hover:border-[#2d8a4e] hover:text-[#2d8a4e] transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="#"
                  className="flex items-center justify-center w-11 h-11 rounded-full border border-black/15 dark:border-white/15 text-black/50 dark:text-white/50 hover:border-[#2d8a4e] hover:text-[#2d8a4e] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </a>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/971586695350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-full border border-black/15 dark:border-white/15 text-black/50 dark:text-white/50 hover:border-[#25d366] hover:text-[#25d366] transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: Contact Form Card ── */}
          <div className="bg-white dark:bg-[#111] rounded-3xl border border-black/8 dark:border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-10 lg:p-12">
            <h2
              className={`text-2xl md:text-3xl lg:text-[2.2rem] leading-tight text-black dark:text-white mb-3 ${playfair.className}`}
            >
              Let&apos;s Get In Touch.
            </h2>
            <p className="text-[15px] text-black/50 dark:text-white/50 mb-10">
              Or just reach out manually to{" "}
              <a
                href="mailto:ops.betons@gmail.com"
                className="text-[#2d8a4e] hover:underline"
              >
                ops.betons@gmail.com
              </a>
              .
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First / Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-black/30 dark:text-white/30">
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name..."
                      required
                      className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent py-3 pl-11 pr-4 text-sm text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 outline-none transition-all focus:border-[#2d8a4e] focus:ring-2 focus:ring-[#2d8a4e]/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-black/30 dark:text-white/30">
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name..."
                      required
                      className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent py-3 pl-11 pr-4 text-sm text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 outline-none transition-all focus:border-[#2d8a4e] focus:ring-2 focus:ring-[#2d8a4e]/20"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-black/30 dark:text-white/30">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-10 7L2 7" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email address..."
                    required
                    className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent py-3 pl-11 pr-4 text-sm text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 outline-none transition-all focus:border-[#2d8a4e] focus:ring-2 focus:ring-[#2d8a4e]/20"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    className="w-[130px] flex-shrink-0 rounded-xl border border-black/10 dark:border-white/10 bg-transparent py-3 px-3 text-sm text-black dark:text-white outline-none transition-all focus:border-[#2d8a4e] focus:ring-2 focus:ring-[#2d8a4e]/20 appearance-none cursor-pointer"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23999\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(000) 000-0000"
                    className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent py-3 px-4 text-sm text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 outline-none transition-all focus:border-[#2d8a4e] focus:ring-2 focus:ring-[#2d8a4e]/20"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Enter your main text here..."
                    maxLength={300}
                    rows={5}
                    required
                    className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent py-3 px-4 text-sm text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 outline-none transition-all focus:border-[#2d8a4e] focus:ring-2 focus:ring-[#2d8a4e]/20 resize-none"
                  />
                  <span className="absolute bottom-3 right-4 text-xs text-black/30 dark:text-white/30">
                    {form.message.length}/300
                  </span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#0f3d22] py-4 text-[0.95rem] font-semibold text-white shadow-[0_8px_30px_rgba(15,61,34,0.3)] transition-all duration-300 hover:bg-[#145a32] hover:shadow-[0_12px_40px_rgba(15,61,34,0.4)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Submit Form
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
