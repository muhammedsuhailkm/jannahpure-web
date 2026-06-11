// app/not-found.tsx
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/new.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Large 404 */}
        <h1 className="text-[120px] md:text-[180px] lg:text-[220px] font-extralight text-white/15 leading-none select-none">
          404
        </h1>

        {/* Message */}
        <div className="-mt-8 md:-mt-12">
          <p className="text-2xl md:text-3xl font-light text-white mb-4">
            الصفحة غير موجودة
          </p>
          <p className="text-white/50 text-base mb-10 max-w-md mx-auto">
            عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها
          </p>
        </div>

        {/* Return Home Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl"
        >
          <svg
            width="18"
            height="18"
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
          العودة للرئيسية
        </Link>
      </div>
    </main>
  );
}
