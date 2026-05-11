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

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+974",
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

    const whatsappNumber = "97455899831";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${text}`,
      "_blank"
    );
  };

  return (
    <div className="bg-white dark:bg-[#111] rounded-3xl border border-black/8 dark:border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-10 lg:p-12 text-right">
      <h2
        className={`text-2xl md:text-3xl lg:text-[2.2rem] leading-tight text-black dark:text-white mb-3 ${playfair.className}`}
      >
        دعنا نتواصل.
      </h2>
      <p className="text-[15px] text-black/50 dark:text-white/50 mb-10">
        أو تواصل معنا مباشرة عبر{" "}
        <a
          href="mailto:info@jannahpure.com"
          className="text-[#3b82f6] hover:underline"
        >
          info@jannahpure.com
        </a>
        .
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First / Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-black dark:text-white mb-2">
              الاسم الأول
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-black/30 dark:text-white/30">
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
                placeholder="أدخل اسمك الأول..."
                required
                className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent py-3 pr-11 pl-4 text-sm text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 outline-none transition-all focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 text-right"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white mb-2">
              اسم العائلة
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-black/30 dark:text-white/30">
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
                placeholder="أدخل اسم العائلة..."
                required
                className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent py-3 pr-11 pl-4 text-sm text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 outline-none transition-all focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 text-right"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-black dark:text-white mb-2">
            البريد الإلكتروني
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-black/30 dark:text-white/30">
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
              placeholder="أدخل بريدك الإلكتروني..."
              required
              className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent py-3 pr-11 pl-4 text-sm text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 outline-none transition-all focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 text-right"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-black dark:text-white mb-2">
            رقم الهاتف
          </label>
          <div className="flex gap-2">
            <select
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
              className="w-[130px] flex-shrink-0 rounded-xl border border-black/10 dark:border-white/10 bg-transparent py-3 px-3 text-sm text-black dark:text-white outline-none transition-all focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 appearance-none cursor-pointer text-left dir-ltr"
              dir="ltr"
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
              className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent py-3 px-4 text-sm text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 outline-none transition-all focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 text-left dir-ltr"
              dir="ltr"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-black dark:text-white mb-2">
            الرسالة
          </label>
          <div className="relative">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="أدخل رسالتك هنا..."
              maxLength={300}
              rows={5}
              required
              className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent py-3 px-4 text-sm text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 outline-none transition-all focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 resize-none text-right"
            />
            <span className="absolute bottom-3 left-4 text-xs text-black/30 dark:text-white/30">
              {form.message.length}/300
            </span>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#1e3a8a] py-4 text-[0.95rem] font-semibold text-white shadow-[0_8px_30px_rgba(30,58,138,0.3)] transition-all duration-300 hover:bg-[#1d4ed8] hover:shadow-[0_12px_40px_rgba(30,58,138,0.4)] hover:-translate-y-0.5 active:translate-y-0"
        >
          إرسال النموذج
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="rotate-180">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </form>
    </div>
  );
}
