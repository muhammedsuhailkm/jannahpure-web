import Image from "next/image";
import Link from "next/link";
import { playfair } from "@/lib/fonts";
import ServicePointsSection from "@/components/ServicePointsSection";

export default function CompanyFormationPage() {
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
              Seamless Incorporation
            </p>
            <div className="flex items-center gap-2 text-sm text-black/50 dark:text-white/50 tracking-wide">
              <span>Pages</span>
              <span>/</span>
              <span>Services</span>
              <span>/</span>
              <span className="text-black dark:text-white font-medium">
                Company Formation
              </span>
            </div>
          </div>

          {/* Right: Large Heading */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] text-black dark:text-white max-w-2xl ${playfair.className}`}
          >
            Expert Company
            <br />
            Formation Services
          </h1>
        </div>
      </section>

      {/* Section 1: Company Formation in Dubai */}
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
              Company Formation
              <br />
              in Dubai With Complete
              <br />
              Professional Support
            </h2>

            {/* Right: Bullet Points Grid */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-6 text-sm md:text-[15px] text-black/70 dark:text-white/70">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black/60 dark:bg-white/60 flex-shrink-0" />
                <span>Legal Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black/60 dark:bg-white/60 flex-shrink-0" />
                <span>Documentation Handling</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black/60 dark:bg-white/60 flex-shrink-0" />
                <span>Time Saving</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black/60 dark:bg-white/60 flex-shrink-0" />
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full h-px bg-black/10 dark:bg-white/10 my-12" />

          {/* Description */}
          <div className="max-w-5xl">
            <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-4">
              Navigate Dubai&apos;s Legal Landscape with Ease
            </h3>
            <p className="text-[15px] md:text-base leading-[1.9] text-black/60 dark:text-white/60">
              Starting a company in Dubai is an exciting step toward building
              your global presence — but navigating legal requirements,
              jurisdiction choices, and documentation can be complex. Betons
              simplifies this process by offering expert company formation
              services designed to help you start quickly and correctly.
            </p>
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
