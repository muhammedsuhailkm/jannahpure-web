import Image from "next/image";
import Link from "next/link";
import { playfair } from "@/lib/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "فلاتر متعددة المراحل – جنة بيور",
  description: "حلول مرنة لتلبية الاحتياجات المتنوعة، وإزالة الرواسب والكلور والمعادن الثقيلة بفعالية.",
};

export default function MultiStageFiltersPage() {
  return (
    <main className="min-h-screen text-right">
      {/* Hero Section with Background Image */}
      <section className="relative h-[55vh] min-h-[400px] md:h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/heroo.webp"
            alt="فلاتر متعددة المراحل"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={60}
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-12 md:pb-16">
          <div className="flex flex-col gap-6">
            <p className={`text-base md:text-lg italic text-white/80 ${playfair.className}`}>
              خدمات جنة بيور
            </p>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] text-white max-w-2xl font-bold drop-shadow-lg ${playfair.className}`}>
              فلاتر <br /> متعددة المراحل
            </h1>
            <div className="flex items-center gap-2 text-sm text-white/60 tracking-wide" dir="rtl">
              <span>الصفحات</span>
              <span>/</span>
              <span>الخدمات</span>
              <span>/</span>
              <span className="text-white font-bold">فلاتر متعددة المراحل</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section with Image */}
      <section className="w-full bg-white dark:bg-background py-20 md:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className={`text-3xl md:text-4xl leading-[1.2] text-black dark:text-white mb-6 font-bold ${playfair.className}`}>
              حلول مرنة لتلبية الاحتياجات المتنوعة
            </h2>
            <p className="text-[15px] md:text-base leading-[1.9] text-black/60 dark:text-white/60 mb-8">
              تم تصميم فلاترنا متعددة المراحل لإزالة الرواسب والكلور والمعادن الثقيلة والملوثات الأخرى بفعالية، وتوفير حلول مخصصة لأي مشكلة تتعلق بجودة المياه. نوفر تقنيات متطورة تضمن لك الحصول على مياه نظيفة وآمنة لجميع استخداماتك.
            </p>
          </div>

          {/* Product Image */}
          <div className="relative h-[350px] md:h-[420px] rounded-3xl overflow-hidden group">
            <Image
              src="/three.jpeg"
              alt="فلاتر متعددة المراحل"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Features Cards with Images */}
      <section className="w-full bg-[#f5f3ef] dark:bg-neutral-950 py-20 md:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="group bg-white dark:bg-neutral-900 rounded-[28px] overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-[220px] overflow-hidden">
              <Image
                src="/two.jpeg"
                alt="تنقية شاملة"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white">تنقية شاملة</h3>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                تستهدف كل مرحلة شوائب محددة، من الجزيئات الكبيرة مثل الرمل والصدأ إلى المواد الكيميائية والروائح الدقيقة، مما يضمن مياهًا نقية تمامًا في كل مرة.
              </p>
            </div>
          </div>
          <div className="group bg-white dark:bg-neutral-900 rounded-[28px] overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-[220px] overflow-hidden">
              <Image
                src="/nine.jpeg"
                alt="تطبيقات متعددة"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white">تطبيقات متعددة</h3>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                مثالية للاستخدام السكني والتجاري، ويمكن تخصيص هذه الفلاتر بمجموعات مختلفة من الشمعات (الكارتريدج) اعتمادًا على حالة المياه الخاصة بك واحتياجاتك الفردية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner with Background Image */}
      <section className="relative w-full overflow-hidden text-center">
        <div className="absolute inset-0">
          <Image
            src="/about-specialized-support.webp"
            alt="احجز موعداً"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
            quality={60}
          />
        </div>
        <div className="absolute inset-0 bg-[#0c1a3d]/75" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 md:py-24">
          <h2 className={`text-2xl leading-[1.35] text-white md:text-3xl lg:text-[2.5rem] font-bold ${playfair.className}`}>
            هل تحتاج إلى فلتر متعدد المراحل مخصص؟ <br className="hidden md:block" /> احجز موعداً اليوم!
          </h2>
          <Link href="/contact" className="mt-10 inline-block rounded-full bg-white text-[#0c1a3d] px-10 py-3.5 text-[0.95rem] font-semibold tracking-wide transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 border-none">
            اطلب الخدمة
          </Link>
        </div>
      </section>
    </main>
  );
}
