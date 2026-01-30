"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Only the home page has a dark hero image
  const hasDarkHero = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/offerings", label: "Offerings" },
    { href: "/contact", label: "Contact" },
  ];

  // Determine text color based on scroll state and page
  const showLightText = hasDarkHero && !scrolled && !mobileMenuOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-cream/95 backdrop-blur-md shadow-soft py-3"
            : hasDarkHero
              ? "bg-transparent py-5"
              : "bg-cream/80 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className={`text-lg font-light tracking-wide transition-colors duration-300 ${
                showLightText ? "text-white" : "text-charcoal"
              }`}
            >
              AnchorSail
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-all duration-300 hover:opacity-70 ${
                    showLightText
                      ? pathname === link.href
                        ? "text-white"
                        : "text-white/80"
                      : pathname === link.href
                        ? "text-sage"
                        : "text-charcoal-light"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className={`px-5 py-2 text-sm tracking-wide rounded-full transition-all duration-300 ${
                  showLightText
                    ? "bg-white/20 hover:bg-white/30 text-white border border-white/30"
                    : "bg-sage hover:bg-sage-dark text-white"
                }`}
              >
                Book a Call
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 transition-colors duration-300 ${
                showLightText ? "text-white" : "text-charcoal"
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream/98 backdrop-blur-lg transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-light tracking-wide transition-all duration-300 ${
                pathname === link.href
                  ? "text-sage"
                  : "text-charcoal hover:text-sage"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 bg-sage hover:bg-sage-dark text-white px-8 py-3 rounded-full text-sm tracking-wide transition-all duration-300"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </>
  );
}
