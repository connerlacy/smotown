"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // TODO: Implement actual form submission (e.g., API route, email service)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
    setFormData({ name: "", email: "", interest: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (status === "success") {
    return (
      <div className="bg-sage/10 p-8 text-center">
        <h3 className="text-lg text-charcoal mb-2">
          Thank you
        </h3>
        <p className="text-charcoal-light text-sm mb-4">
          Your message has been sent. I&apos;ll be in touch soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sage text-sm hover:text-sage-light transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm text-charcoal-light mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-warm-gray bg-transparent text-charcoal focus:outline-none focus:border-sage transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-charcoal-light mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-warm-gray bg-transparent text-charcoal focus:outline-none focus:border-sage transition-colors"
        />
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm text-charcoal-light mb-2">
          I&apos;m interested in
        </label>
        <select
          id="interest"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-warm-gray bg-transparent text-charcoal focus:outline-none focus:border-sage transition-colors"
        >
          <option value="">Select an option</option>
          <option value="individual">One-on-One Sessions</option>
          <option value="group">Group Sessions</option>
          <option value="workshop">Workshops</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-charcoal-light mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-warm-gray bg-transparent text-charcoal focus:outline-none focus:border-sage transition-colors resize-none"
          placeholder="What brings you here?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-sage hover:bg-sage-light disabled:opacity-50 text-white px-6 py-3 text-sm tracking-wide transition-colors"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
