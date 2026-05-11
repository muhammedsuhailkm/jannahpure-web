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
    src: "/heroo.png",
    label: "Advanced Water Purification",
    height: "h-[320px] md:h-[380px]",
  },
  {
    src: "/filter1.jpeg",
    label: "Central Filtration System",
    height: "h-[320px] md:h-[380px]",
  },
  {
    src: "/aboutfit.png",
    label: "Jannah Pure Service Team",
    height: "h-[320px] md:h-[380px]",
  },
  {
    src: "/about-innovative-solutions.png",
    label: "Innovative Water Solutions",
    height: "h-[320px] md:h-[380px]",
  },
  {
    src: "/about-specialized-support.png",
    label: "Specialized Customer Support",
    height: "h-[320px] md:h-[380px]",
  },
  {
    src: "/about-cost-efficiency.png",
    label: "Efficient Water Treatment",
    height: "h-[320px] md:h-[380px]",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] dark:bg-background">
      <section className="w-full pt-40 md:pt-48 pb-12 md:pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-px bg-black/40 dark:bg-white/40" />
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl tracking-[0.15em] uppercase text-black dark:text-white ${playfair.className}`}
            >
              Gallery
            </h1>
          </div>
        </div>
      </section>

      <section className="w-full px-6 lg:px-12 pb-24 md:pb-32">
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
    </main>
  );
}
