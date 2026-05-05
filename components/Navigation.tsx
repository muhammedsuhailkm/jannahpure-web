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
  { label: "Company Formation", href: "/services/company-formation" },
  { label: "Business Setup", href: "/services/business-setup" },
  { label: "Document Clearing", href: "/services/document-clearing" },
  { label: "Free Zone Services", href: "/services/free-zone-services" },
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
      {/* Green Top Bar */}
      <div
        className={`bg-[#4a7c4e] text-white transition-all duration-300 overflow-hidden ${
          isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Contact + Services */}
          <div className="flex items-center gap-3 sm:gap-5 text-xs font-medium tracking-wide min-w-0">
            {/* Phone */}
            <a
              href="tel:+97158695350"
              className="flex items-center gap-1.5 hover:text-green-100 transition-colors shrink-0"
            >
              <Phone size={13} className="shrink-0" />
              <span className="whitespace-nowrap">+971 058695350</span>
            </a>

            {/* Divider */}
            <span className="text-green-400 hidden sm:block">|</span>

            {/* Email - hidden on small mobile */}
            <a
              href="mailto:ops.betons@gmail.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-green-100 transition-colors min-w-0"
            >
              <Mail size={13} className="shrink-0" />
              <span className="truncate">ops.betons@gmail.com</span>
            </a>

            {/* Divider */}
            <span className="text-green-400 hidden lg:block">|</span>

            {/* Company Formation */}
            <span className="hidden lg:flex items-center gap-1.5">
              <Building2 size={13} />
              <span>Company Formation</span>
            </span>

            {/* Divider */}
            <span className="text-green-400 hidden lg:block">|</span>

            {/* Business Setup */}
            <span className="hidden lg:flex items-center gap-1.5">
              <Briefcase size={13} />
              <span>Business Setup</span>
            </span>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-green-600 transition-colors"
            >
              <Facebook size={15} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-green-600 transition-colors"
            >
              <Instagram size={15} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-green-600 transition-colors"
            >
              <Linkedin size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" onClick={handleClick} className="flex-shrink-0">
            <Image
              src="/logo-org.png"
              alt="Logo"
              width={220}
              height={64}
              className="h-14 md:h-16 w-auto object-contain dark:bg-white/90 dark:p-1 dark:rounded-md"
              priority
              sizes="(max-width: 768px) 160px, 220px"
            />
          </Link>

          {/* Right Side Group */}
          <div className="hidden md:flex items-center space-x-12">
            {/* Desktop Menu */}
            <div className="flex items-center space-x-12">
              <Link href="/about" onClick={handleClick}>
                ABOUT
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
                  SERVICES
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {/* Dropdown */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${
                    isServicesOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl overflow-hidden min-w-[240px]">
                    {/* Decorative top accent */}
                    <div className="h-0.5 bg-gradient-to-r from-[#4a7c4e] via-[#5a9e5f] to-[#4a7c4e]" />

                    <div className="py-2">
                      {serviceLinks.map((item, index) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={handleClick}
                          className="flex items-center gap-3 px-5 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-[#4a7c4e]/8 transition-all duration-200 group/item"
                        >
                          <span className="text-[10px] font-semibold text-[#4a7c4e]/60 group-hover/item:text-[#4a7c4e] transition-colors">
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
                GALLERY
              </Link>
              <Link href="/contact" onClick={handleClick}>
                CONTACT US
              </Link>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center">
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
                ABOUT
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() =>
                    setIsMobileServicesOpen(!isMobileServicesOpen)
                  }
                  className="flex items-center gap-1 w-full text-left"
                >
                  SERVICES
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
                  <div className="pl-4 border-l-2 border-[#4a7c4e]/30 space-y-3">
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
                GALLERY
              </Link>
              <Link href="/contact" onClick={handleClick}>
                CONTACT US
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
