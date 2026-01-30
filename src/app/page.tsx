import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[80vh] min-h-[600px]">
        <Image
          src="/images/hero-ocean.jpg"
          alt="Ocean waves meeting shore"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/20" />
        {/* Hero content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-sm text-cream/90 tracking-widest uppercase mb-6">Coaching & Facilitation</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              AnchorSail
            </h1>
            <div className="w-16 h-px bg-cream/50 mx-auto mb-6" />
            <p className="text-xl text-cream/90 font-light">
              Move forward from a place of alignment
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* Introduction */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg text-charcoal-light leading-relaxed mb-10">
            You already have the answers you need. Sometimes we just get stuck in
            patterns that no longer serve us. Through reflection, action, and
            accountability, I help you reconnect with who you really are.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-sage hover:bg-sage-light text-white px-8 py-3 text-sm tracking-wide transition-colors"
          >
            Connect with Me
          </Link>
        </div>
      </section>

      {/* Portrait + Philosophy Section */}
      <section className="py-20 bg-warm-gray/40">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] max-w-md mx-auto md:mx-0">
              <Image
                src="/images/portrait-outdoor.jpg"
                alt="Sara Morency"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-sage tracking-widest uppercase mb-4">My Approach</p>
              <h2 className="text-2xl sm:text-3xl font-light text-charcoal mb-6 leading-relaxed">
                Warm, grounded, and deeply collaborative
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                I believe people have all the answers they need inside themselves.
                My role is to help you find them—through honest conversation,
                thoughtful questions, and a space where you can be fully yourself.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Whether we work one-on-one or in a group, I bring authenticity,
                creativity, and a practical spirituality to every session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="py-24 bg-cream relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gray to-transparent" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-sm text-sage tracking-widest uppercase text-center mb-4">Who I Work With</p>
          <h2 className="text-2xl sm:text-3xl font-light text-charcoal text-center mb-16 leading-relaxed">
            People seeking meaningful growth
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-10 max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0" />
              <p className="text-charcoal-light leading-relaxed">
                Healing professionals seeking their own growth
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0" />
              <p className="text-charcoal-light leading-relaxed">
                Activists and social change makers
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0" />
              <p className="text-charcoal-light leading-relaxed">
                People-oriented managers and leaders
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0" />
              <p className="text-charcoal-light leading-relaxed">
                Tech professionals with a human focus
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gray to-transparent" />
      </section>

      {/* Services */}
      <section className="py-24 bg-sage/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm text-sage tracking-widest uppercase text-center mb-4">Offerings</p>
          <h2 className="text-2xl sm:text-3xl font-light text-charcoal text-center mb-16">
            Ways to Work Together
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cream p-8 border-t-2 border-sage">
              <h3 className="text-lg text-charcoal mb-4">One-on-One Coaching</h3>
              <p className="text-charcoal-light text-sm leading-relaxed mb-6">
                Private sessions for individuals ready for personal transformation.
                Navigate transitions, find clarity, and move past what keeps you stuck.
              </p>
              <Link href="/offerings" className="text-sage text-sm hover:text-sage-light transition-colors">
                Learn more →
              </Link>
            </div>
            <div className="bg-cream p-8 border-t-2 border-teal">
              <h3 className="text-lg text-charcoal mb-4">Group Coaching</h3>
              <p className="text-charcoal-light text-sm leading-relaxed mb-6">
                Shared journeys for healing professionals, managers, and leaders.
                Grow alongside others who share your commitments.
              </p>
              <Link href="/offerings" className="text-sage text-sm hover:text-sage-light transition-colors">
                Learn more →
              </Link>
            </div>
            <div className="bg-cream p-8 border-t-2 border-tan">
              <h3 className="text-lg text-charcoal mb-4">Team Facilitation</h3>
              <p className="text-charcoal-light text-sm leading-relaxed mb-6">
                Collaborative sessions for organizations and community groups.
                Build trust and navigate change together.
              </p>
              <Link href="/offerings" className="text-sage text-sm hover:text-sage-light transition-colors">
                Learn more →
              </Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/offerings"
              className="inline-block border border-sage text-sage hover:bg-sage hover:text-white px-8 py-3 text-sm tracking-wide transition-colors"
            >
              View All Offerings
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white" />
        </div>
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <p className="text-cream/70 text-sm tracking-widest uppercase mb-4">Ready to Begin?</p>
          <h2 className="text-2xl sm:text-3xl font-light text-cream mb-8">
            Let&apos;s explore what&apos;s possible
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-sage hover:bg-sage-light text-white px-8 py-3 text-sm tracking-wide transition-colors"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </div>
  );
}
