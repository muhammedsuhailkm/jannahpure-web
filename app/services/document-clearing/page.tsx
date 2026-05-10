import Image from "next/image";
import Link from "next/link";
import { playfair } from "@/lib/fonts";
import ServicePointsSection from "@/components/ServicePointsSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Document Clearing & PRO Services in Dubai",
  description:
    "Professional document clearing and PRO services in Dubai. Betons handles visa processing, document attestation, trade license renewals, and government liaison across the UAE.",
  alternates: {
    canonical: "https://www.betons.ae/services/document-clearing",
  },
  openGraph: {
    title: "Document Clearing & PRO Services – Betons Dubai",
    description:
      "Hassle-free document clearing, visa processing, attestation, and PRO services in Dubai. Let Betons handle your government paperwork.",
    url: "https://www.betons.ae/services/document-clearing",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Document Clearing & PRO Services in Dubai – Betons",
      },
    ],
  },
};

export default function DocumentClearingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-white dark:bg-background pt-40 md:pt-48 pb-20 md:pb-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          {/* Left: Label + Breadcrumb */}
          <div className="flex flex-col gap-6">
            <p
              className={`text-base md:text-lg italic text-black/70 dark:text-white/70 ${playfair.className}`}
            >
              Hassle-Free Processing
            </p>
            <div className="flex items-center gap-2 text-sm text-black/50 dark:text-white/50 tracking-wide">
              <span>Pages</span>
              <span>/</span>
              <span>Services</span>
              <span>/</span>
              <span className="text-black dark:text-white font-medium">
                Document Clearing
              </span>
            </div>
          </div>

          {/* Right: Large Heading */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] text-black dark:text-white max-w-2xl ${playfair.className}`}
          >
            Professional Document
            <br />
            Clearing Services
          </h1>
        </div>
      </section>

      {/* Section 1: PRO & Document Clearing Services */}
      <section className="relative w-full py-20 md:py-28 px-6 lg:px-12 border-t border-black/10 dark:border-white/10 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/services1.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Light tint overlay */}
        <div className="absolute inset-0 bg-white/90 dark:bg-black/85" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Top row: Heading + Bullet Grid */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-16">
            {/* Left: Heading */}
            <h2
              className={`text-3xl md:text-4xl lg:text-[42px] leading-[1.2] text-black dark:text-white max-w-md flex-shrink-0 ${playfair.className}`}
            >
              PRO &amp; Document
              <br />
              Clearing With
              <br />
              Complete Support
            </h2>

            {/* Right: Bullet Points Grid */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-6 text-sm md:text-[15px] text-black/70 dark:text-white/70">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black/60 dark:bg-white/60 flex-shrink-0" />
                <span>Visa Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black/60 dark:bg-white/60 flex-shrink-0" />
                <span>Document Attestation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black/60 dark:bg-white/60 flex-shrink-0" />
                <span>Government Liaison</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black/60 dark:bg-white/60 flex-shrink-0" />
                <span>License Renewals</span>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full h-px bg-black/10 dark:bg-white/10 my-12" />

          {/* Description */}
          <div className="max-w-5xl">
            <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-4">
              Streamline Your Government Paperwork
            </h3>
            <p className="text-[15px] md:text-base leading-[1.9] text-black/60 dark:text-white/60">
              Navigating the UAE&apos;s government processes — from visa
              applications to document attestation — can be time-consuming and
              complex. Betons&apos; dedicated PRO (Public Relations Officer)
              services act as your liaison with every major government authority,
              ensuring your paperwork is handled accurately, compliantly, and on
              schedule. Whether you&apos;re setting up a new business or managing
              ongoing administrative requirements, we take the bureaucratic
              burden off your shoulders.
            </p>
          </div>

          {/* Separator */}
          <div className="w-full h-px bg-black/10 dark:bg-white/10 my-12" />

          {/* We Offer Section */}
          <div className="max-w-5xl">
            <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-8">
              Our Services
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                  01. Employment &amp; Residence Visa Processing
                </h4>
                <p className="text-[15px] leading-[1.9] text-black/60 dark:text-white/60">
                  Complete management of work permits, residency visas, family
                  and dependent visas, investor visas, and visa renewals or
                  cancellations. We coordinate with the Ministry of Human
                  Resources (MOHRE), General Directorate of Residency and
                  Foreigners Affairs (GDRFA), and immigration authorities to
                  ensure smooth processing.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                  02. Document Attestation &amp; Legalization
                </h4>
                <p className="text-[15px] leading-[1.9] text-black/60 dark:text-white/60">
                  We prepare and submit your documents for attestation by the
                  Ministry of Foreign Affairs (MOFA), embassies, and relevant
                  local departments — including educational certificates,
                  marriage certificates, commercial documents, and powers of
                  attorney.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                  03. Trade License Applications &amp; Renewals
                </h4>
                <p className="text-[15px] leading-[1.9] text-black/60 dark:text-white/60">
                  From initial license applications with the Department of
                  Economic Development (DED) to annual renewals and activity
                  amendments, we handle every step — ensuring your business
                  remains fully licensed and compliant at all times.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                  04. Emirates ID &amp; Medical Typing
                </h4>
                <p className="text-[15px] leading-[1.9] text-black/60 dark:text-white/60">
                  We manage Emirates ID applications, renewals, and medical
                  fitness test coordination for employees and dependents —
                  ensuring all documentation is submitted correctly and
                  processed promptly.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                  05. Legal Translation &amp; Notarization
                </h4>
                <p className="text-[15px] leading-[1.9] text-black/60 dark:text-white/60">
                  Certified Arabic–English legal translations, contract
                  notarization, and official document preparation for court
                  submissions, government filings, and corporate use across all
                  UAE jurisdictions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Choose Dubai - Interactive Service Points */}
      <ServicePointsSection />

      {/* CTA Banner */}
      <section className="relative w-full overflow-hidden">
        {/* Background image */}
        <Image
          src="/cta.avif"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
          <h2
            className={`text-2xl leading-[1.35] text-white md:text-3xl lg:text-[2.5rem] ${playfair.className}`}
          >
            Betons offers assistance in commercial
            <br className="hidden md:block" /> licence application and related
            services in
            <br className="hidden md:block" /> Dubai, UAE
          </h2>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-black px-10 py-3.5 text-[0.95rem] font-semibold tracking-wide text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-neutral-800 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Request A Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
