import Link from "next/link";
import { getImagePath } from "@/lib/utils";

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-teal-pale/20 to-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-pale/40 to-sage-pale/40 rounded-3xl blur-2xl" />
              <div className="relative aspect-[3/4] max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-soft-lg">
                <img
                  src={getImagePath("/images/portrait.jpg")}
                  alt="Sara Morency"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-teal-pale text-teal-dark text-xs tracking-widest uppercase mb-6">
                About Me
              </div>
              <h1 className="text-3xl sm:text-4xl font-light text-charcoal mb-6 leading-snug">
                I help people find their own answers
              </h1>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  I&apos;m a coach and facilitator who believes you already have the answers
                  you need. My role is to help you find them.
                </p>
                <p>
                  Through our work together, we&apos;ll move past the patterns and beliefs
                  that keep you stuck, so you can act from a place of alignment with
                  who you really are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-sage-pale text-sage-dark text-xs tracking-widest uppercase mb-6">
              My Approach
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-charcoal leading-snug">
              Creating space for what matters
            </h2>
          </div>
          <div className="bg-white/60 rounded-3xl p-8 md:p-12 border border-warm-gray shadow-soft">
            <div className="space-y-6 text-charcoal-light leading-relaxed text-center">
              <p className="text-lg">
                Coaching isn&apos;t about giving advice. It&apos;s about creating space for
                reflection, supporting meaningful action, and providing accountability
                that helps you stay true to your path.
              </p>
              <div className="w-12 h-px bg-sage/30 mx-auto" />
              <p>
                I bring warmth, groundedness, and creative engagement to every session.
                Whether we&apos;re working one-on-one or in a group, I meet you where you
                are with authenticity and depth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Style Words */}
      <section className="py-24 bg-gradient-to-b from-cream to-blush-pale/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blush-pale text-blush text-xs tracking-widest uppercase mb-6">
              What to Expect
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-charcoal">
              How I show up
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { word: "Authentic", color: "sage" },
              { word: "Collaborative", color: "teal" },
              { word: "Warm", color: "blush" },
              { word: "Grounded", color: "tan" },
              { word: "Practical", color: "sage" },
              { word: "Creative", color: "teal" },
            ].map(({ word, color }) => (
              <span
                key={word}
                className={`px-6 py-3 rounded-full text-sm bg-${color}-pale/50 text-${color}-dark border border-${color}-light/30 transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-sage-pale/30 to-teal-pale/30 rounded-3xl p-12 border border-sage-light/20">
            <p className="text-charcoal-light mb-4">
              Interested in working together?
            </p>
            <h3 className="text-2xl font-light text-charcoal mb-8">
              Let&apos;s start a conversation
            </h3>
            <Link
              href="/contact"
              className="inline-block bg-sage hover:bg-sage-dark text-white px-8 py-3.5 rounded-full text-sm tracking-wide transition-all duration-300 hover:shadow-soft-lg"
            >
              Connect with Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
