// app/page.tsx
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import SupportSection from "@/components/SupportSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Betons Business Services | Company Formation & Business Setup in Dubai, UAE",
  },
  description:
    "Betons Business Services offers expert company formation, business setup, document clearing, and free zone services in Dubai, UAE. Your trusted business partner.",
  alternates: {
    canonical: "https://www.betons.ae",
  },
  openGraph: {
    title:
      "Betons Business Services | Company Formation & Business Setup in Dubai",
    description:
      "Expert business setup, company formation, document clearing & free zone services in Dubai, UAE. Start your business journey with Betons.",
    url: "https://www.betons.ae",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Betons Business Services – Company Formation & Business Setup in Dubai, UAE",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Betons Business Services",
  url: "https://www.betons.ae",
  logo: "https://www.betons.ae/logo-org.png",
  description:
    "Betons Business Services is a Dubai-based consultancy delivering professional solutions for company formation, business setup, document clearing, and free zone services across the UAE.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Business Bay, Dubai",
    addressCountry: "AE",
  },
  telephone: "+971586695350",
  email: "ops.betons@gmail.com",
  sameAs: [],
  priceRange: "$$",
  openingHours: "Mo-Sa 09:00-18:00",
  areaServed: {
    "@type": "Country",
    name: "United Arab Emirates",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Business Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Company Formation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Setup",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Document Clearing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free Zone Services",
        },
      },
    ],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AboutSection />
      <ServicesOverview />
      <WhyChooseUs />
      <SupportSection />
    </main>
  );
}
