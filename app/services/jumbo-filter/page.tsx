import Image from "next/image";
import Link from "next/link";
import { playfair } from "@/lib/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "فلتر جامبو – جنة بيور",
  description: "فلتر عالي السعة مصمم للمنازل والمطاعم والمرافق التي تتطلب تنقية مياه عالية الأداء.",
};

export default function JumboFilterPage() {
  return (
    <main className="min-h-screen text-right">
      <section className="w-full bg-white dark:bg-background pt-40 md:pt-48 pb-20 md:pb-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse md:items-end md:justify-between gap-10">
          <div className="flex flex-col gap-6">
            <p className={`text-base md:text-lg italic text-black/70 dark:text-white/70 ${playfair.className}`}>
              خدمات جنة بيور
            </p>
            <div className="flex items-center gap-2 text-sm text-black/50 dark:text-white/50 tracking-wide dir-rtl justify-start" dir="rtl">
              <span>الصفحات</span>
              <span>/</span>
              <span>الخدمات</span>
              <span>/</span>
              <span className="text-black dark:text-white font-bold">فلتر جامبو</span>
            </div>
          </div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] text-black dark:text-white max-w-2xl font-bold ${playfair.className}`}>
            فلتر <br /> جامبو
          </h1>
        </div>
      </section>

      <section className="relative w-full py-20 md:py-28 px-6 lg:px-12 border-t border-black/10 dark:border-white/10 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-5xl mb-12">
            <h2 className={`text-3xl md:text-4xl leading-[1.2] text-black dark:text-white mb-6 font-bold ${playfair.className}`}>
              تنقية مياه عالية السعة للبيئات ذات الاستهلاك الكبير
            </h2>
            <p className="text-[15px] md:text-base leading-[1.9] text-black/60 dark:text-white/60">
              في جنة بيور، نوفر فلاتر جامبو ذات سعة كبيرة مصممة للمنازل والمطاعم والمرافق التي تتطلب تنقية مياه عالية الأداء. تضمن هذه الأنظمة القوية معالجة كميات كبيرة من المياه بكفاءة دون انخفاض في الضغط.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-black/5 dark:border-white/5">
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white">تنقية للخدمة الشاقة</h3>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                صُممت فلاتر جامبو الخاصة بنا للتعامل مع التطبيقات التجارية والسكنية الكبيرة والمتطلبة، مما يوفر إمدادًا غير منقطع من المياه النظيفة ويحمي نظام السباكة بأكمله.
              </p>
            </div>
            <div className="p-8 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-black/5 dark:border-white/5">
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white">عمر أطول للفلتر</h3>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                يعني الحجم الكبير لشمعات الفلتر قدرتها على احتجاز كميات أكبر بكثير من الأوساخ والرواسب مقارنة بالفلاتر القياسية، مما يقلل من تكرار الاستبدال ويوفر لك المال.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative w-full overflow-hidden bg-zinc-950 text-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 md:py-24">
          <h2 className={`text-2xl leading-[1.35] text-white md:text-3xl lg:text-[2.5rem] font-bold ${playfair.className}`}>
            هل تحتاج إلى فلتر جامبو عالي السعة؟ <br className="hidden md:block" /> احجز موعداً اليوم!
          </h2>
          <Link href="/contact" className="mt-10 inline-block rounded-full bg-[#2563eb] px-10 py-3.5 text-[0.95rem] font-semibold tracking-wide text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 border-none">
            اطلب الخدمة
          </Link>
        </div>
      </section>
    </main>
  );
}
