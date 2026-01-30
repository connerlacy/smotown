import Link from "next/link";
import { getImagePath } from "@/lib/utils";

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Portrait and Intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative aspect-[3/4] max-w-sm mx-auto md:mx-0">
            <img
              src={getImagePath("/images/portrait.jpg")}
              alt="Sara Morency"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-light text-charcoal mb-6">
              About Me
            </h1>
            <p className="text-charcoal-light leading-relaxed mb-4">
              I&apos;m a coach and facilitator who believes you already have the answers
              you need. My role is to help you find them.
            </p>
            <p className="text-charcoal-light leading-relaxed">
              Through our work together, we&apos;ll move past the patterns and beliefs
              that keep you stuck, so you can act from a place of alignment with
              who you really are.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-charcoal mb-6 text-center">
            My Approach
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-charcoal-light leading-relaxed mb-4">
              Coaching isn&apos;t about giving advice. It&apos;s about creating space for
              reflection, supporting meaningful action, and providing accountability
              that helps you stay true to your path.
            </p>
            <p className="text-charcoal-light leading-relaxed">
              I bring warmth, groundedness, and creative engagement to every session.
              Whether we&apos;re working one-on-one or in a group, I meet you where you
              are with authenticity and depth.
            </p>
          </div>
        </section>

        {/* Style Words */}
        <section className="bg-warm-gray/30 -mx-6 px-6 py-16 lg:-mx-8 lg:px-8 mb-20">
          <h2 className="text-2xl font-light text-charcoal mb-12 text-center">
            What to Expect
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {["Authentic", "Collaborative", "Warm", "Grounded", "Practical", "Creative"].map((word) => (
              <span
                key={word}
                className="px-4 py-2 text-sm text-charcoal-light border border-warm-gray"
              >
                {word}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <p className="text-charcoal-light mb-6">
            Interested in working together?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-sage hover:bg-sage-light text-white px-8 py-3 text-sm tracking-wide transition-colors"
          >
            Connect with Me
          </Link>
        </section>
      </div>
    </div>
  );
}
