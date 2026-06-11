import Image from "next/image";

const photos = ["/seven.jpeg", "/eight.jpeg", "/nine.jpeg"];

const AdditionalPhotosGrid = () => {
  return (
    <section className="w-full bg-white dark:bg-background py-20 px-6 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-sm"
            >
              <Image
                src={src}
                alt={`خدمة ${index + 7}`}
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

export default AdditionalPhotosGrid;
