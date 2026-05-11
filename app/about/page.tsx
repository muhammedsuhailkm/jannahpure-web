import Image from "next/image";
import { playfair } from "@/lib/fonts";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن – جنة بيور",
  description:
    "جنة بيور هي شركة قطرية رائدة متخصصة في أنظمة تنقية المياه المركزية وحلول معالجتها.",
  alternates: {
    canonical: "https://www.jannahpure.com/about",
  },
  openGraph: {
    title: "عن جنة بيور – قصتنا وقيمنا",
    description:
      "جنة بيور هي شركة قطرية رائدة متخصصة في أنظمة تنقية المياه المركزية وحلول معالجتها.",
    url: "https://www.jannahpure.com/about",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "عن جنة بيور – قطر",
      },
    ],
  },
};

const stickyContent = [
  {
    title: "مهمتنا",
    description:
      "تقديم حلول متكاملة وموثوقة تعزز من جودة حياة عملائنا.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white bg-muted/20">
        <Image
          src="/ourmission.jpg"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="مهمتنا"
        />
      </div>
    ),
  },
  {
    title: "رؤيتنا",
    description:
      "أن نكون الخيار الأول في قطر لحلول المياه الآمنة والصحية.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white bg-muted/20">
        <Image
          src="/ourvision.jpg"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="رؤيتنا"
        />
      </div>
    ),
  },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen text-right">
      {/* About Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] md:h-[500px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/aboutfit.png"
            alt="من نحن"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
        </div>

        {/* Full Image Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 mt-16 md:mt-24">
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-md ${playfair.className}`}
          >
            قصتنا
          </h1>
          <div className="flex items-center gap-2 text-white/90 text-sm md:text-base tracking-wide drop-shadow-sm">
            <span>الصفحات</span>
            <span>/</span>
            <span>من نحن</span>
          </div>
        </div>
      </section>
      {/* New 'Who Are We' Section */}
      <div className="w-full bg-white dark:bg-background pt-32 pb-8 px-6 flex flex-col items-center text-center border-t border-border/40">
        {/* Top Label */}
        <div className="flex items-center gap-6 mb-12">
          <span className="h-[1px] w-12 bg-black/30 dark:bg-white/30"></span>
          <p
            className={`text-sm tracking-[0.15em] uppercase text-black/80 dark:text-white/80 ${playfair.className}`}
          >
            من نحن
          </p>
          <span className="h-[1px] w-12 bg-black/30 dark:bg-white/30"></span>
        </div>

        {/* Main Text */}
        <h2
          className={`max-w-[950px] mx-auto text-3xl md:text-5xl lg:text-[46px] leading-[1.45] text-black dark:text-white ${playfair.className}`}
        >
          جنة بيور هي شركة قطرية رائدة متخصصة في أنظمة تنقية المياه المركزية وحلول معالجتها، تخدم الأفراد والشركات في جميع أنحاء قطر بتقديم خدمات احترافية في تنظيف الخزانات وصيانة الفلاتر.
        </h2>

        {/* Decorative Star Icon */}
        <div className="mt-16 flex items-center justify-center">
          <svg
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black dark:text-white"
          >
            <path
              d="M12 2C12 7.52285 16.4772 12 22 12C16.4772 12 12 16.4772 12 22C12 16.4772 7.52285 12 2 12C7.52285 12 12 7.52285 12 2Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div className="w-full bg-white dark:bg-background pt-4 pb-24 px-6 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-7xl w-full">
          {/* Card 1 */}
          <div className="bg-[#f8f8f8] dark:bg-neutral-900 rounded-[40px] p-6 lg:p-8 transition-transform hover:-translate-y-2 duration-300">
            <div className="relative w-full h-[220px] mb-8">
              <Image
                src="/1st.png"
                alt="حلول مبتكرة"
                fill
                className="object-cover rounded-t-[30px] rounded-b-[30px]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <h3
              className={`text-[28px] lg:text-[32px] leading-tight text-black dark:text-white mb-4 font-bold ${playfair.className}`}
            >
              حلول مبتكرة
            </h3>

            <p className="text-[16px] leading-[1.8] text-black/60 dark:text-white/60">
              احصل على مجموعة كاملة من الخدمات المبتكرة لحلول تنقية المياه، كلها تحت سقف واحد.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f8f8f8] dark:bg-neutral-900 rounded-[40px] p-6 lg:p-8 transition-transform hover:-translate-y-2 duration-300">
            <div className="relative w-full h-[220px] mb-8">
              <Image
                src="/2nd.png"
                alt="دعم مخصص"
                fill
                className="object-cover rounded-t-[30px] rounded-b-[30px]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <h3
              className={`text-[28px] lg:text-[32px] leading-tight text-black dark:text-white mb-4 font-bold ${playfair.className}`}
            >
              دعم مخصص
            </h3>

            <p className="text-[16px] leading-[1.8] text-black/60 dark:text-white/60">
              احصل على دعم عملي ومخصص من خبرائنا لتلبية احتياجاتك المائية بكل احترافية.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f8f8f8] dark:bg-neutral-900 rounded-[40px] p-6 lg:p-8 transition-transform hover:-translate-y-2 duration-300">
            <div className="relative w-full h-[220px] mb-8">
              <Image
                src="/third.png"
                alt="فعالية التكلفة"
                fill
                className="object-cover rounded-t-[30px] rounded-b-[30px]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <h3
              className={`text-[28px] lg:text-[32px] leading-tight text-black dark:text-white mb-4 font-bold ${playfair.className}`}
            >
              فعالية التكلفة
            </h3>

            <p className="text-[16px] leading-[1.8] text-black/60 dark:text-white/60">
              وفر وقتك ومواردك مع عملياتنا المبسطة وإرشادات خبرائنا لضمان أفضل قيمة.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Scroll Section: Mission & Vision */}
      <div className="w-full bg-white dark:bg-background py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <StickyScroll content={stickyContent} />
        </div>
      </div>

      <div className="relative w-full h-[90vh] flex items-center group overflow-hidden">
        {/* Background Image */}
        <Image
          src="/new-hero.jpg"
          alt="Hero"
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          sizes="100vw"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 transition-colors duration-1000 group-hover:bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 items-center gap-10 text-right">
          {/* Right Content in RTL (Left Content visually) */}
          <div className="text-white transition-transform duration-700 ease-out group-hover:-translate-y-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] drop-shadow-md">
              نقدم دائمًا خدمات <br />
              تختلف عن <br />
              الآخرين
            </h1>
          </div>

          {/* Left Content in RTL (Right Content visually) */}
          <div className="hidden md:flex flex-col items-start text-white text-left transition-transform duration-700 ease-out group-hover:-translate-y-2 delay-100">
            <h2 className="text-6xl lg:text-7xl font-light drop-shadow-md">20+</h2>
            <p className="mt-4 max-w-sm text-lg text-white/80 leading-relaxed drop-shadow-sm text-right">
              نقدم حلول مياه شاملة تضمن الجودة والأمان وراحة البال لكل عميل.
            </p>
          </div>
        </div>
      </div>

      {/* Our Core Values Section */}
      <div className="w-full bg-[#f4f7f8] dark:bg-neutral-950 py-24 px-6 flex justify-center">
        <div className="max-w-4xl w-full">
          <h2
            className={`text-4xl md:text-5xl font-bold text-black dark:text-white mb-12 text-center ${playfair.className}`}
          >
            قيمنا الأساسية
          </h2>
          <ul className="space-y-4 text-[17px] font-medium text-gray-800 dark:text-gray-300 list-disc pr-6 pl-0 leading-[1.8] marker:text-black dark:marker:text-white">
            <li>الجودة</li>
            <li>النزاهة</li>
            <li>خدمة ما بعد البيع</li>
            <li>الابتكار</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
