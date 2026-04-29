import Image from "next/image";
import { playfair } from "@/lib/fonts";

const primaryGalleryImage = "/project-1.jpg";

const galleryItems = [
  // Row 1
  { src: primaryGalleryImage, label: "Corporate Offices", span: "col-span-1", height: "h-[320px] md:h-[380px]" },
  { src: primaryGalleryImage, label: "Business Bay Hub", span: "col-span-1 md:col-span-1", height: "h-[320px] md:h-[380px]" },
  { src: primaryGalleryImage, label: "Dubai Skyline", span: "col-span-1", height: "h-[320px] md:h-[380px]" },
  // Row 2
  { src: primaryGalleryImage, label: "Consultation Rooms", span: "col-span-1 md:col-span-1", height: "h-[320px] md:h-[380px]" },
  { src: primaryGalleryImage, label: "Client Meetings", span: "col-span-1", height: "h-[320px] md:h-[380px]" },
  { src: primaryGalleryImage, label: "UAE Landmarks", span: "col-span-1", height: "h-[320px] md:h-[380px]" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] dark:bg-background">
      {/* Header */}
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

      {/* Gallery Grid */}
      <section className="w-full px-6 lg:px-12 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Row 1: 3 columns — small / large / medium */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1.6fr_1.2fr] gap-4 mb-4">
            {galleryItems.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-lg cursor-pointer ${item.height}`}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <p className="text-white text-[15px] md:text-base font-medium tracking-wide">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 3 columns — large / medium / medium */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1.2fr_1fr] gap-4">
            {galleryItems.slice(3, 6).map((item, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-lg cursor-pointer ${item.height}`}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Label */}
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
