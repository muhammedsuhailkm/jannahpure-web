"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { playfair } from "@/lib/fonts";

const features = [
  {
    title: ["أوسع", "تشكيلة"],
    description:
      "أوسع تشكيلة من فلاتر المياه والعلامات التجارية العالمية في قطر، مصممة لتلبية الاحتياجات السكنية والتجارية.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <path
          d="M28 2 C32 20, 36 24, 54 28 C36 32, 32 36, 28 54 C24 36, 20 32, 2 28 C20 24, 24 20, 28 2Z"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: ["فريق", "محترف"],
    description:
      "فريق فني مدرب تدريباً عالياً ومحترف مكرس لتقديم أعلى مستويات الصيانة والتركيب.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="25" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
        <line x1="28" y1="3" x2="28" y2="53" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
        <line x1="6" y1="40" x2="28" y2="40" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
        <line x1="6" y1="28" x2="28" y2="28" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
        <line x1="12" y1="16" x2="28" y2="16" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: ["خدمة ما بعد", "البيع"],
    description:
      "دعم شامل بعد البيع وضمان على جميع المنتجات لضمان أداء طويل الأمد وراحة البال.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        {[0, 1, 2, 3].map((r) =>
          [0, 1, 2, 3].map((c) => (
            <rect
              key={`${r}-${c}`}
              x={10 + c * 11}
              y={10 + r * 11}
              width="7"
              height="7"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="1.2"
              fill="none"
            />
          ))
        )}
      </svg>
    ),
  },
  {
    title: ["خدمة", "سريعة"],
    description:
      "خدمة سريعة وسريعة الاستجابة تغطي جميع المناطق في قطر لضمان أفضل الحلول المائية لك دائماً.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 28 + 10 * Math.cos(rad);
          const y1 = 28 + 10 * Math.sin(rad);
          const x2 = 28 + 24 * Math.cos(rad);
          const y2 = 28 + 24 * Math.sin(rad);
          return (
            <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
          );
        })}
      </svg>
    ),
  },
  {
    title: ["شركاء", "عالميون"],
    description:
      "نتعاون مع علامات تجارية دولية موثوقة ومشهورة بجودتها وابتكارها في أنظمة التنقية.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="25" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
        <circle cx="28" cy="28" r="16" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
        <circle cx="28" cy="28" r="7" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: ["حلول", "مخصصة"],
    description:
      "حلول مياه كاملة مخصصة لكل حاجة، من فلاتر المطابخ إلى أنظمة جامبو عالية السعة.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <rect x="8" y="4" width="40" height="48" rx="4" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
        <line x1="16" y1="16" x2="40" y2="16" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
        <line x1="16" y1="24" x2="40" y2="24" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
        <line x1="16" y1="32" x2="32" y2="32" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
        <polyline points="18,40 24,46 38,34" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
];

const GAP = 20; // px gap between cards

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const trackRef = useRef<HTMLDivElement>(null);

  // Responsive: 1 card on mobile, 2 on tablet, 3 on desktop
  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, features.length - visibleCount);

  // Reset activeIndex when visibleCount changes so we don't overshoot
  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Auto-slide every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(advance, 3500);
    return () => clearInterval(timer);
  }, [advance]);

  // Calculate translateX based on card width
  const getTranslateX = () => {
    if (!trackRef.current) return 0;
    const containerWidth = trackRef.current.offsetWidth;
    const cardWidth = (containerWidth - GAP * (visibleCount - 1)) / visibleCount;
    // In RTL, moving to the next item means translating to the RIGHT (positive X)
    return (activeIndex * (cardWidth + GAP));
  };

  return (
    <section className="bg-[#141414] py-16 px-6 overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left side (In RTL, this is on the right) */}
        <div className="flex-shrink-0 lg:w-[280px]">
          <span className="inline-block bg-[#1e3a8a] text-white text-sm font-semibold px-5 py-2 rounded-full mb-6">
            لماذا تختارنا
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold text-white leading-tight mb-8 ${playfair.className}`}
          >
            شريكك الموثوق
            <br />
            في حلول
            <br />
            المياه
          </h2>
          {/* Dots */}
          <div className="flex gap-2.5 mt-4">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(Math.min(i, maxIndex))}
                className={`rounded-full transition-all duration-300 ${
                  i >= activeIndex && i < activeIndex + visibleCount
                    ? "w-3 h-3 bg-white"
                    : "w-2.5 h-2.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right side: Sliding carousel (In RTL, this is on the left) */}
        <div className="w-full lg:flex-1 min-w-0 overflow-hidden" ref={trackRef}>
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${getTranslateX()}px)`,
            }}
          >
            {features.map((feature) => (
              <div
                key={feature.title.join(" ")}
                className="flex-shrink-0 bg-[#1e1e1e] rounded-2xl p-6 flex flex-col justify-between min-h-[280px] border border-white/5 hover:border-white/15 transition-colors"
                style={{
                  width: `calc((100% - ${GAP * (visibleCount - 1)}px) / ${visibleCount})`,
                }}
              >
                <div>
                  <h3
                    className={`text-xl font-bold text-white mb-5 leading-tight ${playfair.className}`}
                  >
                    {feature.title[0]}
                    <br />
                    {feature.title[1]}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-6">{feature.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
