"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" onClick={handleClick} className="flex-shrink-0">
          <img
            src="/logo-org.png"
            alt="Logo"
            className="h-14 md:h-16 w-auto object-contain dark:bg-white/90 dark:p-1 dark:rounded-md"
          />
        </Link>

        {/* Right Side Group */}
        <div className="hidden md:flex items-center space-x-12">
          {/* Desktop Menu */}
          <div className="flex items-center space-x-12">
            <Link href="/about" onClick={handleClick}>
              ABOUT
            </Link>
            <Link href="/services" onClick={handleClick}>
              SERVICES
            </Link>
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
            <Link href="/services" onClick={handleClick}>
              SERVICES
            </Link>
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
  );
};

export default Navigation;
