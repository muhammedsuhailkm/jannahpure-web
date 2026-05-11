import Image from "next/image";
import { playfair } from "@/lib/fonts";

const AboutSection = () => {
  return (
    <section className="w-full bg-white dark:bg-background py-20 px-6 lg:px-0">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 max-w-xl pr-8 lg:pr-12">
            {/* Heading */}
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-foreground ${playfair.className}`}
            >
              تنقية متطورة. <br />
              نقاء لا مثيل له. <br />
              من أجلك.
            </h2>

            {/* Description */}
            <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">جنة بيور</span>{" "}
                تعتبر المزود الرائد في قطر لأنظمة تنقية المياه المركزية، وخدمات الصيانة وحلول تنظيف الخزانات للقطاعين السكني والتجاري.
              </p>
              <p>
                يعتمد نهجنا على تقديم{" "}
                <span className="font-semibold text-foreground">
                  نقاء لا تشوبه شائبة وجودة فائقة
                </span>
                —مما يضمن منتجات وحلول عالمية المستوى لعملائنا في قطر. نحن نتعاون مع علامات تجارية دولية موثوقة ومشهورة بجودتها وابتكارها في أنظمة التنقية.
              </p>
            </div>

            {/* Accent line */}
            <div className="mt-10 w-16 h-1 bg-[#2563eb] rounded-full" />
          </div>

          {/* Image */}
          <div className="flex-1 w-full lg:max-w-lg">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-border">
              <Image
                src="/filter1.jpeg"
                alt="فلتر مياه جنة بيور"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#2563eb]/20 rounded-bl-full" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
