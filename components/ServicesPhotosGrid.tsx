import Image from "next/image";
import { playfair } from "@/lib/fonts";

const photos = [
  "/one.jpeg",
  "/two.jpeg",
  "/three.jpeg",
  "/four.jpeg",
  "/five.jpeg",
  "/six.jpeg",
];

const ServicesPhotosGrid = () => {
  return (
    <section className="w-full bg-white dark:bg-background py-20 px-6 lg:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-14 text-foreground ${playfair.className}`}
        >
          خدماتنا
        </h2>

        {/* Photos Grid - 3 columns, 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-sm"
            >
              <Image
                src={src}
                alt={`خدمة ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPhotosGrid;
