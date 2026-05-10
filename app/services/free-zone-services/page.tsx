import Image from "next/image";
import Link from "next/link";
import { playfair } from "@/lib/fonts";
import ServicePointsSection from "@/components/ServicePointsSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Zone Company Setup in UAE – DMCC, JAFZA & More",
  description:
    "Set up your free zone company in Dubai and the UAE with Betons. Expert guidance for DMCC, JAFZA, DAFZA, IFZA, and 40+ free zones with 100% foreign ownership and zero import duty.",
  alternates: {
    canonical: "https://www.betons.ae/services/free-zone-services",
  },
  openGraph: {
    title: "Free Zone Company Setup in UAE – Betons Business Services",
    description:
      "Launch your business in UAE free zones with 100% ownership. Expert setup for DMCC, JAFZA, DAFZA, and more.",
    url: "https://www.betons.ae/services/free-zone-services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Free Zone Company Setup in UAE – Betons",
      },
    ],
  },
};

export default function FreeZoneServicesPage() {
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
              Strategic Free Zone Setup
            </p>
            <div className="flex items-center gap-2 text-sm text-black/50 dark:text-white/50 tracking-wide">
              <span>Pages</span>
              <span>/</span>
              <span>Services</span>
              <span>/</span>
              <span className="text-black dark:text-white font-medium">
                Free Zone Services
              </span>
            </div>
          </div>

          {/* Right: Large Heading */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] text-black dark:text-white max-w-2xl ${playfair.className}`}
          >
            Comprehensive Free
            <br />
            Zone Services
          </h1>
        </div>
      </section>

      {/* Section 1: Free Zone Company Setup */}
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
              Free Zone Company
              <br />
              Formation With
              <br />
              Expert Guidance
            </h2>

            {/* Right: Bullet Points Grid */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-6 text-sm md:text-[15px] text-black/70 dark:text-white/70">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black/60 dark:bg-white/60 flex-shrink-0" />
                <span>100% Foreign Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black/60 dark:bg-white/60 flex-shrink-0" />
                <span>Zero Import/Export Duty</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black/60 dark:bg-white/60 flex-shrink-0" />
                <span>Full Profit Repatriation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black/60 dark:bg-white/60 flex-shrink-0" />
                <span>World-Class Infrastructure</span>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full h-px bg-black/10 dark:bg-white/10 my-12" />

          {/* Description */}
          <div className="max-w-5xl">
            <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-4">
              Launch Your Business in the UAE&apos;s Premier Free Zones
            </h3>
            <p className="text-[15px] md:text-base leading-[1.9] text-black/60 dark:text-white/60">
              The UAE is home to over 40 free zones, each designed to support
              specific industries with world-class infrastructure, streamlined
              regulations, and investor-friendly policies. Whether you&apos;re
              looking at DMCC for commodities trading, JAFZA for logistics and
              manufacturing, DAFZA for aviation and freight, or any of the other
              specialized zones across Dubai, Abu Dhabi, and Sharjah — Betons
              helps you identify the perfect free zone and guides you through
              every step of the setup process.
            </p>
          </div>

          {/* Separator */}
          <div className="w-full h-px bg-black/10 dark:bg-white/10 my-12" />

          {/* We Offer Section */}
          <div className="max-w-5xl">
            <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-8">
              Our Free Zone Services
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                  01. Free Zone Selection &amp; Feasibility
                </h4>
                <p className="text-[15px] leading-[1.9] text-black/60 dark:text-white/60">
                  We analyze your business activity, target market, and
                  operational requirements to recommend the most suitable free
                  zone — balancing cost efficiency, licensing flexibility, and
                  strategic location advantages across DMCC, JAFZA, DAFZA, IFZA,
                  Meydan, and more.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                  02. License Application &amp; Registration
                </h4>
                <p className="text-[15px] leading-[1.9] text-black/60 dark:text-white/60">
                  From company name reservation and initial approval to final
                  license issuance, we handle the complete registration process
                  with the free zone authority — including trade license,
                  e-channel setup, and share capital documentation where
                  applicable.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                  03. Office &amp; Facility Arrangements
                </h4>
                <p className="text-[15px] leading-[1.9] text-black/60 dark:text-white/60">
                  We assist you in securing the right workspace — whether it&apos;s
                  a flexi-desk, smart office, private office, or warehouse
                  facility — that meets both the free zone&apos;s leasing
                  requirements and your operational needs.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                  04. Visa &amp; Employee Onboarding
                </h4>
                <p className="text-[15px] leading-[1.9] text-black/60 dark:text-white/60">
                  Once your company is registered, we manage visa allocation,
                  employment permits, Emirates ID processing, and medical
                  fitness coordination for you and your team — ensuring a
                  seamless onboarding experience.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                  05. Corporate Banking &amp; Compliance
                </h4>
                <p className="text-[15px] leading-[1.9] text-black/60 dark:text-white/60">
                  We facilitate corporate bank account opening with leading UAE
                  banks and ensure your business remains compliant with free
                  zone regulations, annual audit requirements, and Economic
                  Substance Regulations (ESR).
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
