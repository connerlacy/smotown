import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-sage-pale/20 to-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-sage-pale text-sage-dark text-xs tracking-widest uppercase mb-6">
            Get in Touch
          </div>
          <h1 className="text-3xl sm:text-4xl font-light text-charcoal mb-6">
            Let&apos;s Connect
          </h1>
          <p className="text-charcoal-light leading-relaxed max-w-xl mx-auto">
            Whether you&apos;re ready to begin or just want to explore possibilities,
            I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Schedule Intro */}
            <div className="bg-white/60 p-8 rounded-2xl border border-teal-light/30 shadow-soft transition-all duration-300 hover:shadow-soft-lg group">
              <div className="w-12 h-12 rounded-full bg-teal-pale flex items-center justify-center mb-6">
                <div className="w-4 h-4 rounded-full bg-teal" />
              </div>
              <h2 className="text-xl text-charcoal mb-4">
                Schedule an Intro Session
              </h2>
              <p className="text-charcoal-light text-sm leading-relaxed mb-6">
                A free 30-minute conversation to explore whether we&apos;re a good fit.
                No pressure, just an honest conversation about what you&apos;re looking
                for and how I might help.
              </p>
              <a
                href="#"
                className="inline-block bg-teal hover:bg-teal-dark text-white px-6 py-3 rounded-full text-sm tracking-wide transition-all duration-300"
              >
                Book Intro Session
              </a>
              <p className="text-charcoal-lighter text-xs mt-4">
                Online scheduling coming soon
              </p>
            </div>

            {/* Book Full Session */}
            <div className="bg-white/60 p-8 rounded-2xl border border-sage-light/30 shadow-soft transition-all duration-300 hover:shadow-soft-lg group">
              <div className="w-12 h-12 rounded-full bg-sage-pale flex items-center justify-center mb-6">
                <div className="w-4 h-4 rounded-full bg-sage" />
              </div>
              <h2 className="text-xl text-charcoal mb-4">
                Book a Session
              </h2>
              <p className="text-charcoal-light text-sm leading-relaxed mb-6">
                For returning clients ready to book their next session. Choose a
                time that works for you and we&apos;ll continue the work.
              </p>
              <a
                href="#"
                className="inline-block border-2 border-sage text-sage hover:bg-sage hover:text-white px-6 py-3 rounded-full text-sm tracking-wide transition-all duration-300"
              >
                Book Full Session
              </a>
              <p className="text-charcoal-lighter text-xs mt-4">
                Online scheduling coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-cream to-tan-pale/20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-tan-pale text-tan-dark text-xs tracking-widest uppercase mb-6">
              Send a Message
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-charcoal mb-4">
              Or reach out directly
            </h2>
            <p className="text-charcoal-light max-w-lg mx-auto">
              Have questions? Want to discuss a group or organizational engagement?
              Drop me a note and I&apos;ll get back to you soon.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-white/60 rounded-2xl p-8 border border-warm-gray shadow-soft">
              <ContactForm />
            </div>
          </div>

          {/* Email fallback */}
          <div className="mt-12 text-center">
            <p className="text-charcoal-light text-sm mb-2">
              Prefer email?
            </p>
            <a
              href="mailto:hello@anchorsail.com"
              className="text-sage hover:text-sage-dark transition-colors"
            >
              hello@anchorsail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
