import Image from "next/image";
import { playfair } from "@/lib/fonts";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Our Story, Mission & Vision",
  description:
    "Learn about Betons Business Services – a trusted Dubai-based consultancy empowering startups and businesses with strategic guidance, company formation, and tailored solutions in the UAE.",
  alternates: {
    canonical: "https://www.betons.ae/about",
  },
  openGraph: {
    title: "About Betons Business Services – Our Story & Values",
    description:
      "Discover how Betons empowers startups and enterprises with strategic guidance, company formation, and business solutions in Dubai, UAE.",
    url: "https://www.betons.ae/about",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Betons Business Services – Dubai, UAE",
      },
    ],
  },
};

const stickyContent = [
  {
    title: "Our Mission",
    description:
      "To empower startups and established businesses with strategic guidance, seamless company formation, and tailored business solutions. We are committed to simplifying the complexities of the UAE market, ensuring our clients achieve sustainable growth and long-term success.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white bg-muted/20">
        <Image
          src="/ourmission.jpg"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="Our Mission"
        />
      </div>
    ),
  },
  {
    title: "Our Vision",
    description:
      "To be the premier business consultancy in the UAE, recognized for our unwavering integrity, innovative strategies, and deep local expertise. We envision a future where every entrepreneur and organization we partner with realizes their full potential in a thriving global economy.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white bg-muted/20">
        <Image
          src="/ourvision.jpg"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="Our Vision"
        />
      </div>
    ),
  },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      {/* About Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] md:h-[500px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/home1-hero.jpg"
            alt="About Us"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
        </div>

        {/* Full Image Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 mt-16 md:mt-24">
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-md ${playfair.className}`}
          >
            Our Story
          </h1>
          <div className="flex items-center gap-2 text-white/90 text-sm md:text-base tracking-wide drop-shadow-sm">
            <span>Pages</span>
            <span>/</span>
            <span>About Us</span>
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
            Who Are We
          </p>
          <span className="h-[1px] w-12 bg-black/30 dark:bg-white/30"></span>
        </div>

        {/* Main Text */}
        <h2
          className={`max-w-[950px] mx-auto text-3xl md:text-5xl lg:text-[46px] leading-[1.45] text-black dark:text-white ${playfair.className}`}
        >
          A trusted advisor delivering end-to-end support for startups and
          established businesses. Specializes in market analysis, strategic
          planning, and financial modeling to drive innovation and client
          success.
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
                alt="Innovative Solutions"
                fill
                className="object-cover rounded-t-[30px] rounded-b-[30px]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <h3
              className={`text-[28px] lg:text-[32px] leading-tight text-black dark:text-white mb-4 ${playfair.className}`}
            >
              Innovative Solutions
            </h3>

            <p className="text-[16px] leading-[1.8] text-black/60 dark:text-white/60">
              Access a full suite of services, from business consulting to
              company formation, all under one roof.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f8f8f8] dark:bg-neutral-900 rounded-[40px] p-6 lg:p-8 transition-transform hover:-translate-y-2 duration-300">
            <div className="relative w-full h-[220px] mb-8">
              <Image
                src="/2nd.png"
                alt="Personalized Support"
                fill
                className="object-cover rounded-t-[30px] rounded-b-[30px]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <h3
              className={`text-[28px] lg:text-[32px] leading-tight text-black dark:text-white mb-4 ${playfair.className}`}
            >
              Personalized Support
            </h3>

            <p className="text-[16px] leading-[1.8] text-black/60 dark:text-white/60">
              Receive hands-on support from experienced consultants dedicated to
              your business goals.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f8f8f8] dark:bg-neutral-900 rounded-[40px] p-6 lg:p-8 transition-transform hover:-translate-y-2 duration-300">
            <div className="relative w-full h-[220px] mb-8">
              <Image
                src="/third.png"
                alt="Cost Efficiency"
                fill
                className="object-cover rounded-t-[30px] rounded-b-[30px]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <h3
              className={`text-[28px] lg:text-[32px] leading-tight text-black dark:text-white mb-4 ${playfair.className}`}
            >
              Cost Efficiency
            </h3>

            <p className="text-[16px] leading-[1.8] text-black/60 dark:text-white/60">
              Save valuable time and resources with streamlined processes and
              expert guidance.
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
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div className="text-white transition-transform duration-700 ease-out group-hover:-translate-y-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] drop-shadow-md">
              Problem-Solvers <br />
              Who Understand <br />
              Your Needs
            </h1>
          </div>

          {/* Right Content */}
          <div className="hidden md:flex flex-col items-end text-white text-right transition-transform duration-700 ease-out group-hover:-translate-y-2 delay-100">
            <h2 className="text-6xl lg:text-7xl font-light drop-shadow-md">20+</h2>
            <p className="mt-4 max-w-sm text-lg text-white/80 leading-relaxed drop-shadow-sm">
              Proven track records, we're trusted by startups for client-centric
              strategy, and flawless execution.
            </p>
          </div>
        </div>
      </div>

      {/* Our Core Values Section */}
      <div className="w-full bg-[#f4f7f8] dark:bg-neutral-950 py-24 px-6 flex justify-center">
        <div className="max-w-4xl w-full">
          <h2
            className={`text-4xl md:text-5xl text-black dark:text-white mb-12 text-center ${playfair.className}`}
          >
            Our Core Values
          </h2>
          <ul className="space-y-4 text-[17px] text-gray-800 dark:text-gray-300 list-disc pl-6 leading-[1.8] marker:text-black dark:marker:text-white">
            <li>
              Showing a definite concern in the business issues and problems that
              are challenging our clients and working closely with them to solve
              these problems or any other business dilemma by developing and
              implementing inspired solutions.
            </li>
            <li>
              Developing long-term valuable business relationships with our
              clients is significant to our firm than short-term profit.
            </li>
            <li>
              Recruiting merely high caliber individuals to ensure effective
              quality assurance and helping them to develop all the necessary
              professional and ethical attributes required to make them all
              competent business advisors.
            </li>
            <li>
              Make a great effort to meet our integrity and objectivity in all
              professional and business decision making.
            </li>
            <li>
              Integrity is the cornerstone of our firm. Preserving our honor and
              the reputable name is predominant to us and is never compromised.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
