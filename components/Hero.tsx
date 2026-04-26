import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import RotatingText from "./RotatingText";

const playfair = Playfair_Display({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/home.jpg" // 👈 place image in /public
        alt="Architecture"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      {/* Subtle maroon glow to match the image aesthetics */}
      <div className="absolute -left-40 bottom-0 w-[600px] h-[600px] rounded-full bg-red-950/40 blur-3xl mix-blend-multiply pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-left w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 md:pt-32">
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-normal text-white mb-8 reveal ${playfair.className}`}
        >
          Your Future-
          <br />
          Ready Business
          <br />
          Ally
        </h1>

        <p
          className={`text-xl md:text-2xl text-white/90 font-normal tracking-wide max-w-2xl reveal-delayed ${playfair.className}`}
        >
          Elevate Your Business to the next level !
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 reveal-delayed">
        <div className="w-px h-16 bg-white/40" />
        <div className="text-minimal text-white/60 mt-4 rotate-90 origin-center">
          SCROLL
        </div>
      </div>
      {/* Rotating Text - Desktop */}
      <div className="hidden md:block absolute bottom-8 right-8 z-40">
        <RotatingText containerClassName="w-[200px] h-[200px]" textClassName="text-[40px]" />
      </div>

      {/* Rotating Text - Mobile (Positioned higher and smaller to avoid text overlap) */}
      <div className="block md:hidden absolute top-40 right-4 z-40">
        <RotatingText containerClassName="w-[100px] h-[100px]" textClassName="text-[20px]" />
      </div>
    </section>
  );
};

export default Hero;
