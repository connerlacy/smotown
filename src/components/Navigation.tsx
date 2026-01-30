"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/offerings", label: "Offerings" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-cream/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-lg font-light tracking-wide text-charcoal">
            AnchorSail
          </Link>
          <div className="flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors ${
                  pathname === link.href
                    ? "text-sage"
                    : "text-charcoal-light hover:text-sage"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-sage hover:bg-sage-light text-white px-5 py-2 text-sm tracking-wide transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
