// app/page.tsx
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import SupportSection from "@/components/SupportSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default:
      "جنة بيور | أنظمة تنقية المياه المركزية الرائدة في قطر",
    template: "%s | جنة بيور",
  },
  description:
    "تقدم جنة بيور أنظمة تنقية مياه مركزية خبيرة، وخدمات صيانة، وحلول تنظيف الخزانات للقطاعات السكنية والتجارية في قطر.",
  alternates: {
    canonical: "https://www.jannahpure.com",
  },
  openGraph: {
    title:
      "جنة بيور | أنظمة تنقية المياه المركزية في قطر",
    description:
      "المزود الرائد في قطر لأنظمة تنقية المياه المركزية والصيانة وتنظيف الخزانات للقطاعات السكنية والتجارية.",
    url: "https://www.jannahpure.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "جنة بيور – أنظمة تنقية المياه المركزية في قطر",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "جنة بيور",
  url: "https://www.jannahpure.com",
  logo: "https://www.jannahpure.com/logo.jpeg",
  description:
    "المزود الرائد في قطر لأنظمة تنقية المياه المركزية والصيانة وتنظيف الخزانات للقطاعات السكنية والتجارية.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "الدوحة الجديدة، مبنى رقم: 71، الطابق الخامس، مكتب رقم: 10",
    addressLocality: "الدوحة",
    addressCountry: "QA",
  },
  telephone: "+97455899831",
  email: "info@jannahpure.com",
  sameAs: [],
  priceRange: "$$",
  openingHours: "Mo-Sa 09:00-18:00",
  areaServed: {
    "@type": "Country",
    name: "قطر",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "أنظمة تنقية المياه المركزية",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "فلاتر المطابخ",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "فلتر الغسيل العكسي المركزي",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "فلاتر متعددة المراحل",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "فلتر جامبو",
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
