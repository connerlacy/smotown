import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 bg-cream border-t border-warm-gray">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="text-lg font-light text-charcoal">
              AnchorSail
            </Link>
            <p className="text-charcoal-lighter text-sm mt-1">
              Coaching & Facilitation
            </p>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/about" className="text-sm text-charcoal-light hover:text-sage transition-colors">
              About
            </Link>
            <Link href="/offerings" className="text-sm text-charcoal-light hover:text-sage transition-colors">
              Offerings
            </Link>
            <Link href="/contact" className="text-sm text-charcoal-light hover:text-sage transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-warm-gray/50 text-center">
          <p className="text-charcoal-lighter text-sm">
            &copy; {new Date().getFullYear()} AnchorSail. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
