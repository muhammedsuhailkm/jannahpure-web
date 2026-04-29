"use client";

import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Mainland Company Formation",
    description:
      "Operate across the UAE with full access to local and international markets.",
  },
  {
    id: 2,
    title: "Freezone Company Formation",
    description:
      "Enjoy 100% ownership, tax exemptions, and simplified trading processes.",
  },
  {
    id: 3,
    title: "Offshore Company Setup",
    description:
      "Perfect for international trade, privacy protection, and asset management.",
  },
  {
    id: 4,
    title: "Trade Name Registration",
    description:
      "Assistance in reserving and approving your desired company name.",
  },
  {
    id: 5,
    title: "Memorandum of Association",
    description: "Drafting and notarizing essential legal documents.",
  },
  {
    id: 6,
    title: "License Issuance & Renewal",
    description:
      "Handling all documentation and government coordination for trade licenses.",
  },
  {
    id: 7,
    title: "Corporate Bank Account",
    description: "Helping you open accounts with top UAE banks.",
  },
  {
    id: 8,
    title: "Investor & Partner Visa",
    description: "End-to-end visa assistance for smooth onboarding.",
  },
];

const desktopCardPositions = [
  { top: "8%", left: "8%", diamondTop: "20%", diamondLeft: "30%" },
  { top: "14%", left: "54%", diamondTop: "22%", diamondLeft: "68%" },
  { top: "38%", left: "6%", diamondTop: "47%", diamondLeft: "22%" },
  { top: "41%", left: "48%", diamondTop: "54%", diamondLeft: "63%" },
  { top: "68%", left: "16%", diamondTop: "73%", diamondLeft: "28%" },
  { top: "63%", left: "57%", diamondTop: "68%", diamondLeft: "73%" },
  { top: "82%", left: "11%", diamondTop: "88%", diamondLeft: "33%" },
  { top: "84%", left: "51%", diamondTop: "90%", diamondLeft: "67%" },
];

function ContactPanel() {
  return (
    <div className="rounded-[24px] bg-[#e2f0e6] p-4 text-center text-[#071d11] shadow-[0_24px_60px_rgba(0,0,0,0.18)] md:p-5 lg:h-[680px] lg:p-5 xl:h-[680px] xl:p-6">
      <div className="rounded-[20px] bg-[#0f3d22] px-5 py-4 text-white shadow-[0_18px_40px_rgba(15,61,34,0.35)]">
        <h3 className="text-[1.55rem] font-semibold leading-tight lg:text-[1.7rem] xl:text-[1.8rem]">
          Connect With Betons Today
        </h3>
      </div>

      <p className="mx-auto mt-6 max-w-[23rem] text-[0.92rem] leading-[1.75] text-[#1a3a24]/80 lg:text-[1.02rem] xl:text-[1.08rem]">
        If you are looking for dedicated and professional assistance in setting
        up a business in the UAE, get in touch with Betons. Our expert
        consultants can help register your business and support a smooth setup
        from start to finish.
      </p>

      <div className="mt-6 space-y-3">
        <div className="rounded-[20px] bg-white px-5 py-5 shadow-[0_16px_32px_rgba(15,61,34,0.08)]">
          <h4 className="text-[1.45rem] font-semibold text-[#2d8a4e]">
            Mail Us
          </h4>
          <div className="mx-auto mt-3 h-px w-full max-w-[420px] bg-[#0f3d22]/10" />
          <a
            href="mailto:ops.betons@gmail.com"
            className="mt-4 block text-[0.98rem] text-[#1a3a24] transition-colors hover:text-[#2d8a4e] lg:text-[1.02rem]"
          >
            ops.betons@gmail.com
          </a>
        </div>

        <div className="rounded-[20px] bg-white px-5 py-5 shadow-[0_16px_32px_rgba(15,61,34,0.08)]">
          <h4 className="text-[1.45rem] font-semibold text-[#2d8a4e]">
            Call Us
          </h4>
          <div className="mx-auto mt-3 h-px w-full max-w-[420px] bg-[#0f3d22]/10" />
          <a
            href="tel:+97158695350"
            className="mt-4 block text-[0.98rem] text-[#1a3a24] transition-colors hover:text-[#2d8a4e] lg:text-[1.02rem]"
          >
            +971 058 695 350
          </a>
          <p className="mt-5 text-xs uppercase tracking-[0.24em] text-[#0f3d22]/40">
            Business Bay, Dubai
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ServicePointsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section className="w-full overflow-hidden bg-gradient-to-br from-[#0a2e1a] via-[#0f3d22] to-[#0b2915] px-6 py-20 md:py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(360px,0.8fr)] lg:items-start lg:gap-5 xl:grid-cols-[minmax(0,1.5fr)_minmax(390px,0.82fr)]">
        <div className="lg:pr-2">
          <h2 className="max-w-3xl text-lg font-semibold text-white md:text-xl">
            Here&apos;s why thousands of entrepreneurs and corporations choose
            business setup in Dubai every year:
          </h2>
          <div className="mt-12 hidden rounded-[28px] border border-white/10 bg-[#071d11]/40 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)] lg:block">
            <div className="relative h-[680px] overflow-hidden rounded-[22px] border border-white/6 bg-[#08160f]/80">
              <svg
                className="absolute inset-0 h-full w-full opacity-[0.06]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="service-grid"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 60 0 L 0 0 0 60"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#service-grid)" />
              </svg>

              {desktopCardPositions.map((pos, i) => (
                <div
                  key={`diamond-${i}`}
                  className="absolute transition-all duration-700"
                  style={{
                    top: pos.diamondTop,
                    left: pos.diamondLeft,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className={`h-20 w-20 transition-all duration-500 md:h-28 md:w-28 ${
                      expandedId === services[i].id
                        ? "opacity-40"
                        : "opacity-15"
                    }`}
                    style={{
                      transform: "rotate(45deg) skewX(-10deg) skewY(-10deg)",
                      background:
                        expandedId === services[i].id
                          ? "linear-gradient(135deg, rgba(74,124,78,0.4), rgba(74,124,78,0.1))"
                          : "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                      border: `1px solid ${
                        expandedId === services[i].id
                          ? "rgba(74,124,78,0.4)"
                          : "rgba(255,255,255,0.08)"
                      }`,
                    }}
                  />
                  <div
                    className={`absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 ${
                      expandedId === services[i].id
                        ? "bg-[#4a7c4e] shadow-[0_0_12px_rgba(74,124,78,0.6)]"
                        : "bg-amber-500/60 shadow-[0_0_8px_rgba(245,158,11,0.3)]"
                    }`}
                  />
                </div>
              ))}

              {services.map((service, i) => {
                const pos = desktopCardPositions[i];
                const isExpanded = expandedId === service.id;

                return (
                  <button
                    key={service.id}
                    type="button"
                    className="absolute z-10 cursor-pointer text-left transition-all duration-500"
                    style={{
                      top: pos.top,
                      left: pos.left,
                    }}
                    onClick={() =>
                      setExpandedId(isExpanded ? null : service.id)
                    }
                  >
                    <div
                      className={`absolute -bottom-8 left-4 h-8 w-px transition-colors duration-300 ${
                        isExpanded ? "bg-[#4a7c4e]/40" : "bg-white/10"
                      }`}
                    />

                    {isExpanded ? (
                      <div className="w-[220px] rounded-xl border border-[#4a7c4e]/30 bg-[#1a2940]/90 p-4 shadow-2xl shadow-[#4a7c4e]/10 backdrop-blur-md xl:w-[250px]">
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#4a7c4e]/20">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="text-[#5a9e5f]"
                              >
                                <path
                                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <span className="text-sm font-semibold leading-snug text-white">
                              {service.title}
                            </span>
                          </div>
                          <span className="text-xs text-white/45">close</span>
                        </div>
                        <p className="text-[12px] leading-6 text-white/50">
                          {service.description}
                        </p>
                      </div>
                    ) : (
                      <div className="group flex max-w-[220px] rounded-lg border border-white/10 bg-[#1a2940]/80 px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-[#4a7c4e]/30 hover:bg-[#1a2940] xl:max-w-[250px]">
                        <div className="flex items-center gap-2">
                          <span className="text-[13px] font-medium leading-snug text-white/80 transition-colors group-hover:text-white">
                            {service.title}
                          </span>
                          <span className="mx-1 text-sm text-white/30">+</span>
                          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-white/5 transition-colors group-hover:bg-[#4a7c4e]/20">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="text-white/40 transition-colors group-hover:text-[#5a9e5f]"
                            >
                              <path
                                d="M13 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-7-6z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}

              <div className="pointer-events-none absolute left-1/2 top-1/3 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4a7c4e]/5 blur-[120px]" />
              <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[220px] w-[220px] rounded-full bg-blue-500/3 blur-[100px]" />
            </div>
          </div>

          <div className="mt-10 space-y-3 lg:hidden">
            {services.map((service) => {
              const isExpanded = expandedId === service.id;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : service.id)}
                  className={`w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
                    isExpanded
                      ? "border-[#4a7c4e]/40 bg-[#102617]"
                      : "border-white/10 bg-[#0c2014]/80"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-white">
                      {service.title}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                      {isExpanded ? "Hide" : "Open"}
                    </span>
                  </div>
                  {isExpanded ? (
                    <p className="mt-3 text-sm leading-7 text-white/60">
                      {service.description}
                    </p>
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="mt-8 lg:hidden">
            <ContactPanel />
          </div>
        </div>

        <div className="hidden lg:block lg:pl-0 lg:pt-[11rem] xl:pt-[11.3rem]">
          <ContactPanel />
        </div>
      </div>
    </section>
  );
}
