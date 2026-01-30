"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Offerings() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) sectionsRef.current[index] = el;
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-light text-charcoal mb-4">
          Offerings
        </h1>
        <p className="text-charcoal-light max-w-2xl mx-auto">
          Different paths for different journeys. Each offering is designed to
          meet you where you are and support meaningful growth.
        </p>
      </div>

      {/* Individual Coaching - Sage theme */}
      <section
        ref={(el) => addToRefs(el, 0)}
        className="scroll-fade-in py-16 bg-gradient-to-br from-sage-pale/40 via-cream to-sage-pale/20"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-sage" />
            </div>
            <h2 className="text-2xl font-light text-charcoal">
              One-on-One Coaching
            </h2>
          </div>
          <p className="text-charcoal-light leading-relaxed mb-8 max-w-3xl">
            Private coaching sessions for individuals ready to do deep work.
            Whether you&apos;re navigating a career transition, seeking personal
            clarity, or working through patterns that keep you stuck, we&apos;ll
            create a space for honest reflection and purposeful action.
          </p>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-soft border border-sage-pale/50">
            <h3 className="text-lg text-charcoal mb-4">What to expect</h3>
            <ul className="text-charcoal-light text-sm space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0" />
                Regular sessions tailored to your schedule and needs
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0" />
                A collaborative partnership built on trust and honesty
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0" />
                Practical tools alongside deeper exploration
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0" />
                Accountability that keeps you moving forward
              </li>
            </ul>
          </div>
          <p className="text-charcoal-light text-sm">
            <span className="text-sage-dark font-medium">Ideal for:</span> Individuals seeking personal or professional transformation,
            healing professionals wanting their own support, leaders navigating complexity.
          </p>
        </div>
      </section>

      {/* Group Coaching - Teal theme */}
      <section
        ref={(el) => addToRefs(el, 1)}
        className="scroll-fade-in py-16 bg-gradient-to-bl from-teal-pale/40 via-cream to-denim-pale/20"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-teal" />
            </div>
            <h2 className="text-2xl font-light text-charcoal">
              Group Coaching
            </h2>
          </div>
          <p className="text-charcoal-light leading-relaxed mb-8 max-w-3xl">
            Small group experiences that combine the depth of coaching with the
            wisdom of community. There&apos;s something powerful about growing
            alongside others who share your commitments and challenges.
          </p>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-soft border border-teal-pale/50">
            <h3 className="text-lg text-charcoal mb-4">Current groups</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-pale/50 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-teal" />
                </div>
                <div>
                  <p className="text-charcoal font-medium text-sm">For Healing Professionals</p>
                  <p className="text-charcoal-light text-sm">Therapists, yoga teachers, bodyworkers, and others in caring professions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-pale/50 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-teal" />
                </div>
                <div>
                  <p className="text-charcoal font-medium text-sm">For Managers & Leaders</p>
                  <p className="text-charcoal-light text-sm">People-oriented leaders navigating the human side of their work</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-charcoal-light text-sm">
            <span className="text-teal-dark font-medium">Format:</span> Cohort-based programs with regular group sessions
            and opportunities for peer connection.
          </p>
        </div>
      </section>

      {/* Team Coaching & Facilitation - Slate/Denim theme */}
      <section
        ref={(el) => addToRefs(el, 2)}
        className="scroll-fade-in py-16 bg-gradient-to-br from-slate-pale/30 via-cream to-denim-pale/30"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-slate/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-slate" />
            </div>
            <h2 className="text-2xl font-light text-charcoal">
              Team Coaching & Facilitation
            </h2>
          </div>
          <p className="text-charcoal-light leading-relaxed mb-8 max-w-3xl">
            Working with teams and organizations to build trust, improve
            communication, and navigate change together. I bring a collaborative,
            grounded presence to help groups do their best thinking.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-slate-pale/50">
              <div className="w-8 h-8 rounded-lg bg-denim-pale/50 flex items-center justify-center mb-4">
                <div className="w-2 h-2 rounded-full bg-denim" />
              </div>
              <h3 className="text-lg text-charcoal mb-2">Team Coaching</h3>
              <p className="text-charcoal-light text-sm">
                Ongoing support for leadership teams and workgroups
                developing their capacity to collaborate effectively.
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-slate-pale/50">
              <div className="w-8 h-8 rounded-lg bg-slate-pale/50 flex items-center justify-center mb-4">
                <div className="w-2 h-2 rounded-full bg-slate" />
              </div>
              <h3 className="text-lg text-charcoal mb-2">Group Facilitation</h3>
              <p className="text-charcoal-light text-sm">
                Design and facilitation for retreats, strategic planning,
                and community gatherings.
              </p>
            </div>
          </div>
          <p className="text-charcoal-light text-sm">
            <span className="text-slate-dark font-medium">Ideal for:</span> Corporate teams, nonprofits, community organizations,
            and any group seeking to work better together.
          </p>
        </div>
      </section>

      {/* Learning Design - Ochre/Tan theme */}
      <section
        ref={(el) => addToRefs(el, 3)}
        className="scroll-fade-in py-16 bg-gradient-to-bl from-ochre-pale/30 via-cream to-tan-pale/30"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-ochre/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-ochre" />
            </div>
            <h2 className="text-2xl font-light text-charcoal">
              Learning Design Consultation
            </h2>
          </div>
          <p className="text-charcoal-light leading-relaxed mb-8 max-w-3xl">
            For practitioners who convene groups and want to design more
            impactful learning experiences. I offer consultation on curriculum
            design, facilitation approaches, and creating containers for
            meaningful group work.
          </p>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-tan-pale/50">
            <p className="text-charcoal-light text-sm">
              <span className="text-ochre-dark font-medium">Ideal for:</span> Coaches, facilitators, educators, and community
              leaders designing their own offerings.
            </p>
          </div>
        </div>
      </section>

      {/* CTA - Rust/Warm theme */}
      <section
        ref={(el) => addToRefs(el, 4)}
        className="scroll-fade-in py-20 bg-gradient-to-br from-rust-pale/20 via-blush-pale/30 to-sage-pale/20"
      >
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-soft-lg border border-white/50">
            <h3 className="text-xl text-charcoal mb-2">Not sure which offering is right for you?</h3>
            <p className="text-charcoal-light mb-8">
              Let&apos;s talk. I&apos;m happy to explore what might be the best fit.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-sage hover:bg-sage-dark text-white px-8 py-3.5 rounded-full text-sm tracking-wide transition-all duration-300 hover:shadow-soft"
            >
              Connect with Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
