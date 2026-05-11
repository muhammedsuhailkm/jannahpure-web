import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative text-white pt-10 pb-5 overflow-hidden text-right">
      {/* CSS gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #172554 0%, #1e3a8a 30%, #2563eb 60%, #1e3a8a 100%)",
        }}
      />
      {/* Subtle radial glow accents */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 15% 30%, rgba(30, 58, 138, 0.22) 0%, transparent 52%), radial-gradient(ellipse at 85% 70%, rgba(37, 99, 235, 0.16) 0%, transparent 45%), radial-gradient(ellipse at 50% 0%, rgba(96, 165, 250, 0.12) 0%, transparent 40%)",
        }}
      />
      {/* Grid pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-grid)" />
      </svg>
      {/* Decorative diagonal accent */}
      <div
        className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8 grid gap-7 md:grid-cols-3">
          {/* Column 1: Logo + Description + Socials */}
          <div className="md:col-span-1">
            <Link className="mb-4 inline-flex items-center gap-2" href="/">
              <span className="inline-flex rounded-xl bg-white px-3 py-2 shadow-[0_8px_22px_-12px_rgba(255,255,255,0.5)]">
                <Image
                  src="/logo.jpeg"
                  alt="شعار جنة بيور"
                  width={190}
                  height={48}
                  className="h-12 w-auto"
                  sizes="190px"
                />
              </span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-white mt-2">
              تعتبر جنة بيور شريكك الموثوق لتنقية المياه، تنظيف الخزانات، وصيانة الفلاتر في جميع أنحاء قطر. نحن نقدم حلولاً موثوقة ومتكاملة تعزز من جودة حياة عملائنا.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h4 className="mb-3 text-lg font-semibold text-white">اتصل بنا</h4>
            <ul className="space-y-3 text-white">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#60a5fa] shrink-0" />
                <a
                  href="mailto:info@jannahpure.com"
                  className="hover:text-white transition-colors"
                >
                  info@jannahpure.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#60a5fa] shrink-0" />
                <a
                  href="tel:+97455899831"
                  className="hover:text-white transition-colors dir-ltr"
                  dir="ltr"
                >
                  +974 55899831
                </a>
              </li>
            </ul>

            <h4 className="mt-6 mb-3 text-lg font-semibold text-white">
              روابط سريعة
            </h4>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  الخدمات
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-white transition-colors"
                >
                  معرض الصور
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Address */}
          <div>
            <h4 className="mb-3 text-lg font-semibold text-white">العنوان</h4>
            <div className="flex items-start gap-3 text-white">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#60a5fa]" />
              <span className="leading-relaxed">
                الدوحة الجديدة، مبنى رقم: 71،
                <br />
                الطابق الخامس، مكتب رقم: 10
                <br />
                الدوحة، قطر
              </span>
            </div>

            <h4 className="mt-6 mb-3 text-lg font-semibold text-white">
              خدماتنا
            </h4>
            <ul className="space-y-2 text-white text-sm">
              <li>فلاتر المطابخ</li>
              <li>فلتر الغسيل العكسي المركزي</li>
              <li>فلاتر متعددة المراحل</li>
              <li>فلتر جامبو</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-4 text-center md:flex-row md:text-right">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} جنة بيور. جميع الحقوق محفوظة.
          </p>
          <p className="text-sm text-white">
            الدوحة الجديدة، مبنى رقم: 71، الطابق الخامس، مكتب رقم: 10، الدوحة، قطر
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
