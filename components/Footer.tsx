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
    <footer className="relative text-white pt-10 pb-5 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/footerorg.jpg')" }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8 grid gap-7 md:grid-cols-3">
          {/* Column 1: Logo + Description + Socials */}
          <div className="md:col-span-1">
            <Link className="mb-4 inline-flex items-center gap-2" href="/">
              <span className="inline-flex rounded-xl bg-white px-3 py-2 shadow-[0_8px_22px_-12px_rgba(255,255,255,0.5)]">
                <img
                  src="/logo-org.png"
                  alt="Betons Logo"
                  className="h-12 w-auto"
                  loading="lazy"
                />
              </span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-white/80">
              Betons Business Services is your trusted partner for company
              formation, business setup, and document clearing across the UAE.
              We deliver reliable, compliant, and efficient solutions tailored
              to your goals.
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
            <h4 className="mb-3 text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#4a7c4e]" />
                <a
                  href="mailto:ops.betons@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  ops.betons@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#4a7c4e]" />
                <a
                  href="tel:+97158695350"
                  className="hover:text-white transition-colors"
                >
                  +971 058 695 350
                </a>
              </li>
            </ul>

            <h4 className="mt-6 mb-3 text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Address */}
          <div>
            <h4 className="mb-3 text-lg font-semibold text-white">Address</h4>
            <div className="flex items-start gap-3 text-white/80">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#4a7c4e]" />
              <span className="leading-relaxed">
                Business Bay, Dubai,
                <br />
                United Arab Emirates
              </span>
            </div>

            <h4 className="mt-6 mb-3 text-lg font-semibold text-white">
              Services
            </h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Company Formation</li>
              <li>Business Setup</li>
              <li>Document Clearing</li>
              <li>Free Zone Services</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Betons Business Services. All rights
            reserved.
          </p>
          <p className="text-sm text-white/60">Dubai, United Arab Emirates</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
