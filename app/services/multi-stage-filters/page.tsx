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
              <span className="text-black dark:text-white font-bold">فلاتر متعددة المراحل</span>
            </div>
          </div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] text-black dark:text-white max-w-2xl font-bold ${playfair.className}`}>
            فلاتر <br /> متعددة المراحل
          </h1>
        </div>
      </section>

      <section className="relative w-full py-20 md:py-28 px-6 lg:px-12 border-t border-black/10 dark:border-white/10 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-5xl mb-12">
            <h2 className={`text-3xl md:text-4xl leading-[1.2] text-black dark:text-white mb-6 font-bold ${playfair.className}`}>
              حلول مرنة لتلبية الاحتياجات المتنوعة
            </h2>
            <p className="text-[15px] md:text-base leading-[1.9] text-black/60 dark:text-white/60">
              تم تصميم فلاترنا متعددة المراحل لإزالة الرواسب والكلور والمعادن الثقيلة والملوثات الأخرى بفعالية، وتوفير حلول مخصصة لأي مشكلة تتعلق بجودة المياه. نوفر تقنيات متطورة تضمن لك الحصول على مياه نظيفة وآمنة لجميع استخداماتك.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-black/5 dark:border-white/5">
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white">تنقية شاملة</h3>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                تستهدف كل مرحلة شوائب محددة، من الجزيئات الكبيرة مثل الرمل والصدأ إلى المواد الكيميائية والروائح الدقيقة، مما يضمن مياهًا نقية تمامًا في كل مرة.
              </p>
            </div>
            <div className="p-8 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-black/5 dark:border-white/5">
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white">تطبيقات متعددة</h3>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                مثالية للاستخدام السكني والتجاري، ويمكن تخصيص هذه الفلاتر بمجموعات مختلفة من الشمعات (الكارتريدج) اعتمادًا على حالة المياه الخاصة بك واحتياجاتك الفردية.
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
            هل تحتاج إلى فلتر متعدد المراحل مخصص؟ <br className="hidden md:block" /> احجز موعداً اليوم!
          </h2>
          <Link href="/contact" className="mt-10 inline-block rounded-full bg-[#2563eb] px-10 py-3.5 text-[0.95rem] font-semibold tracking-wide text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 border-none">
            اطلب الخدمة
          </Link>
        </div>
      </section>
    </main>
  );
}
