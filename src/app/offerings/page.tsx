import Link from "next/link";

export default function Offerings() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl font-light text-charcoal mb-4 text-center">
          Offerings
        </h1>
        <p className="text-charcoal-light text-center mb-16 max-w-2xl mx-auto">
          Different paths for different journeys. Each offering is designed to
          meet you where you are and support meaningful growth.
        </p>

        {/* Individual Coaching */}
        <section className="mb-16 pb-16 border-b border-warm-gray">
          <h2 className="text-2xl font-light text-charcoal mb-4">
            One-on-One Coaching
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-6">
            Private coaching sessions for individuals ready to do deep work.
            Whether you&apos;re navigating a career transition, seeking personal
            clarity, or working through patterns that keep you stuck, we&apos;ll
            create a space for honest reflection and purposeful action.
          </p>
          <div className="bg-warm-gray/30 p-6 mb-6">
            <h3 className="text-lg text-charcoal mb-3">What to expect</h3>
            <ul className="text-charcoal-light text-sm space-y-2">
              <li>Regular sessions tailored to your schedule and needs</li>
              <li>A collaborative partnership built on trust and honesty</li>
              <li>Practical tools alongside deeper exploration</li>
              <li>Accountability that keeps you moving forward</li>
            </ul>
          </div>
          <p className="text-charcoal-light text-sm">
            <span className="text-charcoal">Ideal for:</span> Individuals seeking personal or professional transformation,
            healing professionals wanting their own support, leaders navigating complexity.
          </p>
        </section>

        {/* Group Coaching */}
        <section className="mb-16 pb-16 border-b border-warm-gray">
          <h2 className="text-2xl font-light text-charcoal mb-4">
            Group Coaching
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-6">
            Small group experiences that combine the depth of coaching with the
            wisdom of community. There&apos;s something powerful about growing
            alongside others who share your commitments and challenges.
          </p>
          <div className="bg-warm-gray/30 p-6 mb-6">
            <h3 className="text-lg text-charcoal mb-3">Current groups</h3>
            <ul className="text-charcoal-light text-sm space-y-2">
              <li><span className="text-charcoal">For Healing Professionals:</span> Therapists, yoga teachers, bodyworkers, and others in caring professions</li>
              <li><span className="text-charcoal">For Managers & Leaders:</span> People-oriented leaders navigating the human side of their work</li>
            </ul>
          </div>
          <p className="text-charcoal-light text-sm">
            <span className="text-charcoal">Format:</span> Cohort-based programs with regular group sessions
            and opportunities for peer connection.
          </p>
        </section>

        {/* Team Coaching & Facilitation */}
        <section className="mb-16 pb-16 border-b border-warm-gray">
          <h2 className="text-2xl font-light text-charcoal mb-4">
            Team Coaching & Facilitation
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-6">
            Working with teams and organizations to build trust, improve
            communication, and navigate change together. I bring a collaborative,
            grounded presence to help groups do their best thinking.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="bg-warm-gray/30 p-6">
              <h3 className="text-lg text-charcoal mb-3">Team Coaching</h3>
              <p className="text-charcoal-light text-sm">
                Ongoing support for leadership teams and workgroups
                developing their capacity to collaborate effectively.
              </p>
            </div>
            <div className="bg-warm-gray/30 p-6">
              <h3 className="text-lg text-charcoal mb-3">Group Facilitation</h3>
              <p className="text-charcoal-light text-sm">
                Design and facilitation for retreats, strategic planning,
                and community gatherings.
              </p>
            </div>
          </div>
          <p className="text-charcoal-light text-sm">
            <span className="text-charcoal">Ideal for:</span> Corporate teams, nonprofits, community organizations,
            and any group seeking to work better together.
          </p>
        </section>

        {/* Learning Design */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-charcoal mb-4">
            Learning Design Consultation
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-6">
            For practitioners who convene groups and want to design more
            impactful learning experiences. I offer consultation on curriculum
            design, facilitation approaches, and creating containers for
            meaningful group work.
          </p>
          <p className="text-charcoal-light text-sm">
            <span className="text-charcoal">Ideal for:</span> Coaches, facilitators, educators, and community
            leaders designing their own offerings.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center py-12 bg-sage/10 -mx-6 px-6 lg:-mx-8 lg:px-8">
          <p className="text-charcoal mb-2">Not sure which offering is right for you?</p>
          <p className="text-charcoal-light mb-8">
            Let&apos;s talk. I&apos;m happy to explore what might be the best fit.
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
