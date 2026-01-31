import Link from "next/link";
import { getImagePath } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[100vh] min-h-[700px]">
        <img
          src={getImagePath("/images/hero-ocean.jpg")}
          alt="Ocean waves meeting shore"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/20 to-charcoal/40" />
        {/* Hero content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-sm text-cream/80 tracking-[0.3em] uppercase mb-6 animate-fade-in-down">
              Coaching & Facilitation
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-white mb-8 leading-tight animate-fade-in">
              Anchor Sail
            </h1>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-cream/60 to-transparent mx-auto mb-8 animate-fade-in" />
            <p className="text-xl sm:text-2xl text-cream/90 font-light leading-relaxed animate-fade-in-up">
              Move forward from a place of alignment
            </p>
            <div className="mt-12 animate-fade-in-up delay-300">
              <Link
                href="/contact"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-sm tracking-wide border border-white/30 transition-all duration-300 hover:scale-105"
              >
                Begin Your Journey
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* Introduction */}
      <section className="py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-sage-pale/50 text-sage-dark text-xs tracking-widest uppercase mb-8">
            Welcome
          </div>
          <p className="text-xl sm:text-2xl text-charcoal font-light leading-relaxed mb-6">
            You already have the answers you need.
          </p>
          <p className="text-lg text-charcoal-light leading-relaxed mb-12">
            Sometimes we just get stuck in patterns that no longer serve us.
            Through reflection, action, and accountability, I help you reconnect
            with who you really are.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-sage hover:bg-sage-dark text-white px-8 py-3.5 rounded-full text-sm tracking-wide transition-all duration-300 hover:shadow-soft-lg"
          >
            Connect with Me
          </Link>
        </div>
      </section>

      {/* Portrait + Philosophy Section */}
      <section className="py-24 bg-gradient-to-br from-teal-pale/30 via-cream to-sage-pale/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-sage-pale/50 to-teal-pale/50 rounded-3xl blur-2xl" />
              <div className="relative aspect-[4/5] max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-soft-lg">
                <img
                  src={getImagePath("/images/portrait-outdoor.jpg")}
                  alt="Sara Morency"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-teal-pale text-teal-dark text-xs tracking-widest uppercase mb-6">
                My Approach
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-charcoal mb-6 leading-snug">
                Warm, grounded, and deeply collaborative
              </h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  I believe people have all the answers they need inside themselves.
                  My role is to help you find them—through honest conversation,
                  thoughtful questions, and a space where you can be fully yourself.
                </p>
                <p>
                  Whether we work one-on-one or in a group, I bring authenticity,
                  creativity, and a practical spirituality to every session.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Authentic", "Organic", "Grounded"].map((word) => (
                  <span
                    key={word}
                    className="px-4 py-2 rounded-full text-sm text-sage-dark bg-sage-pale/50 border border-sage-light/30"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="py-28 bg-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gray-dark to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blush-pale/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-teal-pale/30 blur-3xl" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blush-pale text-blush text-xs tracking-widest uppercase mb-6">
              Who I Work With
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-charcoal leading-snug">
              People seeking meaningful growth
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-pale/60 to-white border border-teal-light/40 shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1">
              <div className="w-4 h-4 rounded-full bg-teal mb-4" />
              <p className="text-charcoal leading-relaxed font-medium">
                Healing professionals seeking their own growth
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-sage-pale/60 to-white border border-sage-light/40 shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1">
              <div className="w-4 h-4 rounded-full bg-sage mb-4" />
              <p className="text-charcoal leading-relaxed font-medium">
                Activists and social change makers
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-ochre-pale/60 to-white border border-ochre-light/40 shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1">
              <div className="w-4 h-4 rounded-full bg-ochre mb-4" />
              <p className="text-charcoal leading-relaxed font-medium">
                People-oriented managers and leaders
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-rust-pale/60 to-white border border-rust-light/40 shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1">
              <div className="w-4 h-4 rounded-full bg-rust mb-4" />
              <p className="text-charcoal leading-relaxed font-medium">
                Tech professionals with a human focus
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gray-dark to-transparent" />
      </section>

      {/* Services */}
      <section className="py-28 bg-gradient-to-b from-sage-pale/20 to-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-sage-pale text-sage-dark text-xs tracking-widest uppercase mb-6">
              Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-charcoal">
              Ways to Work Together
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 p-8 rounded-2xl border border-sage-light/30 shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-full bg-sage-pale flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-4 h-4 rounded-full bg-sage" />
              </div>
              <h3 className="text-xl text-charcoal mb-4 font-medium">One-on-One Coaching</h3>
              <p className="text-charcoal-light text-sm leading-relaxed mb-6">
                Private sessions for individuals ready for personal transformation.
                Navigate transitions, find clarity, and move past what keeps you stuck.
              </p>
              <Link href="/offerings" className="text-sage text-sm hover:text-sage-dark transition-colors inline-flex items-center gap-2 group-hover:gap-3">
                Learn more <span className="transition-all">→</span>
              </Link>
            </div>

            <div className="bg-white/80 p-8 rounded-2xl border border-teal-light/30 shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-full bg-teal-pale flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-4 h-4 rounded-full bg-teal" />
              </div>
              <h3 className="text-xl text-charcoal mb-4 font-medium">Group Coaching</h3>
              <p className="text-charcoal-light text-sm leading-relaxed mb-6">
                Shared journeys for healing professionals, managers, and leaders.
                Grow alongside others who share your commitments.
              </p>
              <Link href="/offerings" className="text-teal text-sm hover:text-teal-dark transition-colors inline-flex items-center gap-2 group-hover:gap-3">
                Learn more <span className="transition-all">→</span>
              </Link>
            </div>

            <div className="bg-white/80 p-8 rounded-2xl border border-tan-light/30 shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-full bg-tan-pale flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-4 h-4 rounded-full bg-tan" />
              </div>
              <h3 className="text-xl text-charcoal mb-4 font-medium">Team Facilitation</h3>
              <p className="text-charcoal-light text-sm leading-relaxed mb-6">
                Collaborative sessions for organizations and community groups.
                Build trust and navigate change together.
              </p>
              <Link href="/offerings" className="text-tan-dark text-sm hover:text-tan transition-colors inline-flex items-center gap-2 group-hover:gap-3">
                Learn more <span className="transition-all">→</span>
              </Link>
            </div>
          </div>

          <div className="text-center mt-14">
            <Link
              href="/offerings"
              className="inline-block border-2 border-sage text-sage hover:bg-sage hover:text-white px-8 py-3.5 rounded-full text-sm tracking-wide transition-all duration-300"
            >
              View All Offerings
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5 animate-float" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/10" />
        </div>
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <p className="text-cream/50 text-sm tracking-[0.3em] uppercase mb-6">Ready to Begin?</p>
          <h2 className="text-3xl sm:text-4xl font-light text-cream mb-8 leading-snug">
            Let&apos;s explore what&apos;s possible
          </h2>
          <p className="text-cream/70 mb-10 leading-relaxed">
            Take the first step toward clarity and alignment.
            I&apos;d love to hear what brings you here.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-sage hover:bg-sage-light text-white px-10 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:scale-105 shadow-soft-lg"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </div>
  );
}
