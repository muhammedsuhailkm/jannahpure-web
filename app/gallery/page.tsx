import Image from "next/image";
import { playfair } from "@/lib/fonts";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Jannah Pure Water Solutions",
  description:
    "Explore Jannah Pure water purification systems, filtration solutions, and service highlights in Qatar.",
  alternates: {
    canonical: "https://www.jannahpure.com/gallery",
  },
  openGraph: {
    title: "Gallery - Jannah Pure Water Solutions",
    description:
      "View Jannah Pure water filtration systems, purification services, and customer-focused solutions in Qatar.",
    url: "https://www.jannahpure.com/gallery",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jannah Pure Water Solutions Gallery",
      },
    ],
  },
};

const galleryItems = [
  {
    src: "/heroo.webp",
    label: "Advanced Water Purification",
    height: "h-[320px] md:h-[380px]",
  },
  {
    src: "/filter1.jpeg",
    label: "Central Filtration System",
    height: "h-[320px] md:h-[380px]",
  },
  {
    src: "/aboutfit.webp",
    label: "Jannah Pure Service Team",
    height: "h-[320px] md:h-[380px]",
  },
  {
    src: "/about-innovative-solutions.webp",
    label: "Innovative Water Solutions",
    height: "h-[320px] md:h-[380px]",
  },
  {
    src: "/about-specialized-support.webp",
    label: "Specialized Customer Support",
    height: "h-[320px] md:h-[380px]",
  },
  {
    src: "/about-cost-efficiency.webp",
    label: "Efficient Water Treatment",
    height: "h-[320px] md:h-[380px]",
  },
];

const productPhotos = [
  { src: "/one.jpeg", label: "فلاتر المطابخ" },
  { src: "/two.jpeg", label: "فلتر الغسيل العكسي" },
  { src: "/three.jpeg", label: "فلاتر متعددة المراحل" },
  { src: "/four.jpeg", label: "فلتر جامبو" },
  { src: "/five.jpeg", label: "أنظمة تنقية متقدمة" },
  { src: "/six.jpeg", label: "تعقيم المياه" },
  { src: "/seven.jpeg", label: "قطع الغيار" },
  { src: "/eight.jpeg", label: "الصيانة الدورية" },
  { src: "/nine.jpeg", label: "خدمات التركيب" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] dark:bg-background">
      {/* Hero Section with Image */}
      <section className="relative h-[55vh] min-h-[380px] md:h-[480px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about-specialized-support.webp"
            alt="Gallery - Jannah Pure"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={60}
          />
        </div>
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f5f3ef] dark:from-background via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-12 md:pb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-px bg-white/60" />
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] uppercase text-white drop-shadow-lg ${playfair.className}`}
            >
              Gallery
            </h1>
          </div>
          <p className="text-white/75 text-base md:text-lg max-w-lg drop-shadow-sm">
            A glimpse into our world of water purification excellence
          </p>
        </div>
      </section>

      {/* Main Gallery Grid */}
      <section className="w-full px-6 lg:px-12 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1.6fr_1.2fr] gap-4 mb-4">
            {galleryItems.slice(0, 3).map((item) => (
              <div
                key={item.src}
                className={`group relative overflow-hidden rounded-lg cursor-pointer ${item.height}`}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <p className="text-white text-[15px] md:text-base font-medium tracking-wide">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1.2fr_1fr] gap-4">
            {galleryItems.slice(3, 6).map((item) => (
              <div
                key={item.src}
                className={`group relative overflow-hidden rounded-lg cursor-pointer ${item.height}`}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <p className="text-white text-[15px] md:text-base font-medium tracking-wide">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Photos Section */}
      <section className="w-full bg-white dark:bg-neutral-950 py-20 md:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-6 mb-6">
              <span className="h-[1px] w-12 bg-black/20 dark:bg-white/20" />
              <p
                className={`text-sm tracking-[0.15em] uppercase text-black/70 dark:text-white/70 ${playfair.className}`}
              >
                منتجاتنا
              </p>
              <span className="h-[1px] w-12 bg-black/20 dark:bg-white/20" />
            </div>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white ${playfair.className}`}
            >
              أنظمة وحلول تنقية المياه
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {productPhotos.map((photo) => (
              <div
                key={photo.src}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-[15px] font-medium text-right">
                    {photo.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
