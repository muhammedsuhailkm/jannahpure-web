import Image from "next/image";
import { playfair } from "@/lib/fonts";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدماتنا – جنة بيور",
  description:
    "اكتشف خدمات جنة بيور المتكاملة لتنقية المياه في قطر — فلاتر مطابخ، أنظمة مركزية، تنظيف خزانات، وصيانة دورية.",
  alternates: {
    canonical: "https://www.jannahpure.com/services",
  },
  openGraph: {
    title: "خدماتنا – جنة بيور لتنقية المياه",
    description:
      "حلول تنقية مياه شاملة للمنازل والشركات في قطر.",
    url: "https://www.jannahpure.com/services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "خدمات جنة بيور",
      },
    ],
  },
};

const serviceCards = [
  {
    title: "فلاتر المطابخ",
    description:
      "تنقية موثوقة من 5 و 7 مراحل مع إثراء بالمعادن لمياه شرب نقية وآمنة وصحية.",
    image: "/one.jpeg",
  },
  {
    title: "فلتر الغسيل العكسي المركزي",
    description:
      "أنظمة تنظيف ذاتي بتقنية الغسيل العكسي لعمر أطول وصيانة أقل.",
    image: "/two.jpeg",
  },
  {
    title: "فلاتر متعددة المراحل",
    description:
      "حلول مرنة لإزالة الرواسب والكلور والمعادن الثقيلة بفعالية عالية.",
    image: "/three.jpeg",
  },
  {
    title: "فلتر جامبو",
    description:
      "فلتر عالي السعة مصمم للمنازل والمطاعم والمرافق التي تحتاج تنقية مياه عالية الأداء.",
    image: "/four.jpeg",
  },
  {
    title: "تعقيم المياه",
    description:
      "تقنيات متطورة مثل الأشعة فوق البنفسجية للقضاء على البكتيريا والفيروسات.",
    image: "/five.jpeg",
  },
  {
    title: "تنظيف الخزانات",
    description:
      "خدمات تنظيف وتعقيم احترافية للخزانات لضمان بيئة تخزين صحية وآمنة.",
    image: "/six.jpeg",
  },
];

const additionalServices = [
  {
    title: "قطع الغيار",
    description:
      "توفير فلاتر وقطع غيار أصلية ومضمونة لجميع أنظمة المياه.",
    image: "/seven.jpeg",
  },
  {
    title: "الصيانة الدورية",
    description:
      "عقود صيانة مرنة لضمان جودة المياه واستمرارية عمل الأنظمة بكفاءة عالية.",
    image: "/eight.jpeg",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen text-right">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[450px] md:h-[550px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/heroo.webp"
            alt="خدمات جنة بيور"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={60}
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12 mt-16 md:mt-24">
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-md ${playfair.className}`}
          >
            خدماتنا
          </h1>
          <p className="max-w-lg text-white/85 text-base md:text-lg leading-relaxed drop-shadow-sm">
            حلول متكاملة لتنقية المياه تلبي جميع احتياجاتك — من التركيب إلى
            الصيانة
          </p>
          <div className="flex items-center gap-2 text-white/70 text-sm md:text-base tracking-wide mt-6 drop-shadow-sm">
            <span>الصفحات</span>
            <span>/</span>
            <span>خدماتنا</span>
          </div>
        </div>
      </section>

      {/* Intro Section with Side Image */}
      <section className="w-full bg-white dark:bg-background py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-6 mb-8">
              <span className="h-[1px] w-12 bg-black/30 dark:bg-white/30" />
              <p
                className={`text-sm tracking-[0.15em] uppercase text-black/80 dark:text-white/80 ${playfair.className}`}
              >
                ما نقدمه
              </p>
            </div>
            <h2
              className={`text-3xl md:text-4xl lg:text-[42px] leading-[1.45] text-black dark:text-white mb-6 ${playfair.className}`}
            >
              نوفر لك أحدث تقنيات تنقية المياه لضمان صحة عائلتك وسلامتها
            </h2>
            <p className="text-[16px] leading-[1.9] text-black/60 dark:text-white/60 max-w-xl">
              نقدم مجموعة شاملة من خدمات تنقية المياه، بدءًا من فلاتر المطابخ
              المنزلية وصولًا إلى الأنظمة المركزية للمباني التجارية، مع دعم فني
              متواصل وقطع غيار أصلية.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[400px] md:h-[480px] rounded-3xl overflow-hidden group">
            <Image
              src="/new.webp"
              alt="تقنيات تنقية المياه"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 640px"
              loading="lazy"
              quality={65}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="w-full bg-[#f5f3ef] dark:bg-neutral-950 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 ${playfair.className}`}
            >
              خدماتنا الرئيسية
            </h2>
            <p className="text-black/50 dark:text-white/50 text-base max-w-md mx-auto">
              اختر الحل الأنسب لاحتياجاتك من بين خدماتنا المتنوعة
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white dark:bg-neutral-900 rounded-[28px] overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-[240px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Service Number Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 dark:bg-black/70 flex items-center justify-center text-sm font-bold text-black dark:text-white shadow-lg">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-7">
                  <h3
                    className={`text-xl lg:text-2xl font-bold text-black dark:text-white mb-3 ${playfair.className}`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[15px] leading-[1.8] text-black/55 dark:text-white/55">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services - Side by Side */}
      <section className="w-full bg-white dark:bg-background py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 ${playfair.className}`}
            >
              خدمات إضافية
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="group relative h-[380px] md:h-[420px] rounded-3xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 640px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <h3
                    className={`text-2xl md:text-3xl font-bold text-white mb-3 ${playfair.className}`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-white/75 text-[15px] leading-[1.8] max-w-md">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width CTA Banner with Image */}
      <section className="relative w-full h-[50vh] min-h-[350px] flex items-center overflow-hidden group">
        <Image
          src="/aboutfit.webp"
          alt="تواصل معنا"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes="100vw"
          loading="lazy"
          quality={60}
        />
        <div className="absolute inset-0 bg-[#0c1a3d]/75" />
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <h2
            className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${playfair.className}`}
          >
            هل تحتاج إلى استشارة مجانية؟
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            خبراؤنا مستعدون لمساعدتك في اختيار نظام تنقية المياه المناسب
            لاحتياجاتك
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-[#0c1a3d] px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            تواصل معنا الآن
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="rotate-180"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
