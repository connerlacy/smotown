import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl font-light text-charcoal mb-4 text-center">
          Connect
        </h1>
        <p className="text-charcoal-light text-center mb-16 max-w-xl mx-auto">
          Whether you&apos;re ready to begin or just want to explore possibilities,
          I&apos;d love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Schedule Intro */}
          <div className="bg-warm-gray/30 p-8">
            <h2 className="text-xl font-light text-charcoal mb-4">
              Schedule an Intro Session
            </h2>
            <p className="text-charcoal-light text-sm leading-relaxed mb-6">
              A free 30-minute conversation to explore whether we&apos;re a good fit.
              No pressure, just an honest conversation about what you&apos;re looking
              for and how I might help.
            </p>
            <a
              href="#"
              className="inline-block bg-sage hover:bg-sage-light text-white px-6 py-3 text-sm tracking-wide transition-colors"
            >
              Book Intro Session
            </a>
            <p className="text-charcoal-light text-xs mt-4">
              Online scheduling coming soon
            </p>
          </div>

          {/* Book Full Session */}
          <div className="bg-warm-gray/30 p-8">
            <h2 className="text-xl font-light text-charcoal mb-4">
              Book a Session
            </h2>
            <p className="text-charcoal-light text-sm leading-relaxed mb-6">
              For returning clients ready to book their next session. Choose a
              time that works for you and we&apos;ll continue the work.
            </p>
            <a
              href="#"
              className="inline-block border border-sage text-sage hover:bg-sage hover:text-white px-6 py-3 text-sm tracking-wide transition-colors"
            >
              Book Full Session
            </a>
            <p className="text-charcoal-light text-xs mt-4">
              Online scheduling coming soon
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border-t border-warm-gray pt-16">
          <h2 className="text-2xl font-light text-charcoal mb-4 text-center">
            Or Send a Message
          </h2>
          <p className="text-charcoal-light text-center mb-12 max-w-lg mx-auto">
            Have questions? Want to discuss a group or organizational engagement?
            Drop me a note and I&apos;ll get back to you soon.
          </p>
          <div className="max-w-md mx-auto">
            <ContactForm />
          </div>
        </div>

        {/* Email fallback */}
        <div className="mt-16 text-center">
          <p className="text-charcoal-light text-sm mb-2">
            Prefer email?
          </p>
          <a
            href="mailto:hello@anchorsail.com"
            className="text-sage hover:text-sage-light transition-colors"
          >
            hello@anchorsail.com
          </a>
        </div>
      </div>
    </div>
  );
}
