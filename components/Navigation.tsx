"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Phone,
  Mail,
  Building2,
  Briefcase,
  Facebook,
  Instagram,
  Linkedin,
  ChevronDown,
} from "lucide-react";

const serviceLinks = [
  { label: "فلاتر المطابخ", href: "/services/kitchen-filter" },
  { label: "فلتر الغسيل العكسي المركزي", href: "/services/central-backwash-filter" },
  { label: "فلاتر متعددة المراحل", href: "/services/multi-stage-filters" },
  { label: "فلتر جامبو", href: "/services/jumbo-filter" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const handleServicesEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Blue Top Bar */}
      <div
        className={`bg-[#2563eb] text-white transition-all duration-300 overflow-hidden ${
          isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-2 sm:gap-4">
          {/* Right: Contact + Services (Arabic aligns right normally, but we keep flex order) */}
          <div className="flex items-center gap-3 sm:gap-5 text-xs font-medium tracking-wide min-w-0">
            {/* Phone */}
            <a
              href="tel:+97455899831"
              className="flex items-center gap-1.5 hover:text-blue-100 transition-colors shrink-0 dir-ltr"
            >
              <Phone size={13} className="shrink-0" />
              <span className="whitespace-nowrap" dir="ltr">+974 55899831</span>
            </a>

            {/* Divider */}
            <span className="text-blue-300 hidden sm:block">|</span>

            {/* Email - hidden on small mobile */}
            <a
              href="mailto:info@jannahpure.com"
              className="flex items-center gap-1.5 hover:text-blue-100 transition-colors max-w-[150px] sm:max-w-none"
            >
              <Mail size={13} className="shrink-0" />
              <span className="truncate">info@jannahpure.com</span>
            </a>

            {/* Divider */}
            <span className="text-blue-300 hidden lg:block">|</span>

            {/* Kitchen Filter */}
            <span className="hidden lg:flex items-center gap-1.5">
              <Building2 size={13} />
              <span>فلاتر المطابخ</span>
            </span>

            {/* Divider */}
            <span className="text-blue-300 hidden lg:block">|</span>

            {/* Central Backwash Filter */}
            <span className="hidden lg:flex items-center gap-1.5">
              <Briefcase size={13} />
              <span>فلتر الغسيل العكسي المركزي</span>
            </span>
          </div>

          {/* Left: Social Icons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-600 transition-colors"
            >
              <Facebook size={15} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-blue-600 transition-colors"
            >
              <Instagram size={15} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-600 transition-colors"
            >
              <Linkedin size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white dark:bg-background border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" onClick={handleClick} className="flex-shrink-0">
            <Image
              src="/logo.jpeg"
              alt="شعار جنة بيور"
              width={220}
              height={64}
              className="h-14 md:h-16 w-auto object-contain dark:bg-white/90 dark:p-1 dark:rounded-md"
              priority
              sizes="(max-width: 768px) 160px, 220px"
            />
          </Link>

          {/* Left Side Group (in RTL this visually aligns to left side of screen) */}
          <div className="hidden md:flex items-center space-x-12 space-x-reverse">
            {/* Desktop Menu */}
            <div className="flex items-center space-x-12 space-x-reverse">
              <Link href="/about" onClick={handleClick}>
                من نحن
              </Link>

              {/* Services with Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <Link
                  href="/services"
                  onClick={handleClick}
                  className="flex items-center gap-1 group"
                >
                  خدماتنا
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {/* Dropdown */}
                <div
                  className={`absolute top-full right-1/2 translate-x-1/2 pt-3 transition-all duration-300 ${
                    isServicesOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl overflow-hidden min-w-[240px]">
                    {/* Decorative top accent */}
                    <div className="h-0.5 bg-gradient-to-l from-[#2563eb] via-[#60a5fa] to-[#2563eb]" />

                    <div className="py-2">
                      {serviceLinks.map((item, index) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={handleClick}
                          className="flex items-center gap-3 px-5 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-[#2563eb]/8 transition-all duration-200 group/item"
                        >
                          <span className="text-[10px] font-semibold text-[#2563eb]/60 group-hover/item:text-[#2563eb] transition-colors">
                            0{index + 1}
                          </span>
                          <span className="font-medium tracking-wide">
                            {item.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/gallery" onClick={handleClick}>
                معرض الصور
              </Link>
              <Link href="/contact" onClick={handleClick}>
                اتصل بنا
              </Link>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center mr-6">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-b border-border">
            <div className="container mx-auto px-6 py-6 space-y-4 flex flex-col">
              <Link href="/about" onClick={handleClick}>
                من نحن
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() =>
                    setIsMobileServicesOpen(!isMobileServicesOpen)
                  }
                  className="flex items-center justify-between w-full text-right"
                >
                  <span>خدماتنا</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isMobileServicesOpen
                      ? "max-h-60 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pr-4 border-r-2 border-[#2563eb]/30 space-y-3">
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleClick}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/gallery" onClick={handleClick}>
                معرض الصور
              </Link>
              <Link href="/contact" onClick={handleClick}>
                اتصل بنا
              </Link>

              {/* Theme Toggle */}
              <div className="pt-4 border-t border-border">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
