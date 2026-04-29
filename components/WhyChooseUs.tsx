"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { playfair } from "@/lib/fonts";

const features = [
  {
    title: ["Consulting", "Expertise"],
    description:
      "Our consulting expertise entails in depth industry knowledge, and tailored solutions, essential for guiding businesses toward sustainable growth.",
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
    title: ["Rapid Value", "Creation"],
    description:
      "Our rapid value creation involves swiftly generating tangible benefits and sustainable growth through innovative strategies and efficient execution.",
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
    title: ["Industry", "Experience"],
    description:
      "Our experience is the cornerstone of our consulting excellence, giving our clients an advantage through effective, and innovative solutions.",
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
    title: ["Local", "Network"],
    description:
      "Our deep understanding of UAE's business environment and strong local insights help you navigate regulations, seize opportunities, and achieve success.",
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
    title: ["Strategic", "Planning"],
    description:
      "We craft comprehensive strategic plans that align with your business vision, ensuring every step forward is purposeful, measurable, and result-driven.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="25" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
        <circle cx="28" cy="28" r="16" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
        <circle cx="28" cy="28" r="7" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: ["Compliance", "& Legal"],
    description:
      "Our compliance experts ensure your business meets all UAE regulatory requirements, providing peace of mind and full legal protection at every stage.",
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

const VISIBLE = 3;
const GAP = 20; // px gap between cards

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = features.length - VISIBLE;
  const trackRef = useRef<HTMLDivElement>(null);

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
    const cardWidth = (containerWidth - GAP * (VISIBLE - 1)) / VISIBLE;
    return -(activeIndex * (cardWidth + GAP));
  };

  return (
    <section className="bg-[#141414] py-16 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left side */}
        <div className="flex-shrink-0 lg:w-[280px]">
          <span className="inline-block bg-[#2d5a3d] text-white text-sm font-semibold px-5 py-2 rounded-full mb-6">
            Why choose us
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold text-white leading-tight mb-8 ${playfair.className}`}
          >
            Your one stop
            <br />
            solution to
            <br />
            UAE business
          </h2>
          {/* Dots */}
          <div className="flex gap-2.5 mt-4">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(Math.min(i, maxIndex))}
                className={`rounded-full transition-all duration-300 ${
                  i >= activeIndex && i < activeIndex + VISIBLE
                    ? "w-3 h-3 bg-white"
                    : "w-2.5 h-2.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right side: Sliding carousel */}
        <div className="flex-1 overflow-hidden" ref={trackRef}>
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
                  width: `calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})`,
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
