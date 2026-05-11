import Image from "next/image";
import { playfair } from "@/lib/fonts";
import RotatingText from "./RotatingText";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32">
      {/* Background Image */}
      <Image
        src="/heroo.png"
        alt="أنظمة تنقية المياه"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Little white shade overlay */}
      <div className="absolute inset-0 bg-white/30" />
      <div className="absolute inset-0 bg-gradient-to-l from-white/40 via-white/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-right w-full max-w-7xl mx-auto px-6 lg:px-12">
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold text-[#0c1a3d] mb-8 reveal drop-shadow-sm ${playfair.className}`}
        >
          تنقية متطورة.
          <br />
          نقاء لا مثيل له.
          <br />
          احجز اليوم
        </h1>

        <p className="text-lg md:text-xl text-[#0c1a3d]/90 font-medium max-w-2xl mb-12 reveal delay-100 leading-relaxed mr-auto">
          المزود الرائد لأنظمة تنقية المياه المركزية وحلول الصيانة في قطر.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 reveal-delayed">
        <div className="w-px h-16 bg-black/30 mx-auto" />
        <div className="text-minimal text-black/60 mt-4 rotate-90 origin-center font-medium">
          تمرير
        </div>
      </div>
      {/* Rotating Text - Desktop */}
      <div className="hidden md:block absolute bottom-8 left-8 z-40">
        <RotatingText
          containerClassName="w-[200px] h-[200px]"
          textClassName="text-[40px]"
        />
      </div>

      {/* Rotating Text - Mobile (Positioned higher and smaller to avoid text overlap) */}
      <div className="block md:hidden absolute top-40 left-4 z-40">
        <RotatingText
          containerClassName="w-[100px] h-[100px]"
          textClassName="text-[20px]"
        />
      </div>
    </section>
  );
};

export default Hero;
