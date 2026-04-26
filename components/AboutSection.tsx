import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const AboutSection = () => {
  return (
    <section className="w-full bg-white dark:bg-background py-20 px-6 lg:px-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left: Text Content */}
        <div className="flex-1 max-w-xl">
          {/* Heading */}
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-foreground ${playfair.className}`}
          >
            Empowering <br />
            Businesses. <br />
            Simplifying <br />
            Solutions.
          </h2>

          {/* Description */}
          <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
            <p>
              <span className="font-semibold text-foreground">
                Betons Business Services
              </span>{" "}
              is a trusted partner for entrepreneurs and businesses looking to
              launch and grow in the UAE. We provide comprehensive business
              setup solutions, including{" "}
              <span className="font-semibold text-foreground">
                company formation, document clearing, and free zone services
              </span>{" "}
              across all emirates.
            </p>
            <p>
              Our approach is built on{" "}
              <span className="font-semibold text-foreground">
                professionalism, transparency, and speed
              </span>
              —ensuring a smooth and hassle-free experience from start to
              finish. Whether you&apos;re starting your first venture or
              expanding your operations, Betons delivers reliable, compliant,
              and efficient solutions tailored to your goals.
            </p>
          </div>

          {/* Accent line */}
          <div className="mt-10 w-16 h-1 bg-[#4a7c4e] rounded-full" />
        </div>

        {/* Right: Image */}
        <div className="flex-1 w-full lg:max-w-lg">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-border">
            <Image
              src="/home1.jpg"
              alt="Betons Business Services"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Decorative corner accent */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-[#4a7c4e]/20 rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#4a7c4e]/20 rounded-tl-full" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
