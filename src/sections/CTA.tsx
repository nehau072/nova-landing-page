import { useState } from "react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="cta-section" id="cta">
      <div className="cta-glow" />

      <div className="cta-content">
        <span className="section-label">READY TO MOVE FASTER?</span>

        <h2>
          Your best work
          <br />
          <span>starts with NOVA.</span>
        </h2>

        <p>
          Join thousands of teams using AI to eliminate busywork and focus on
          what matters.
        </p>

        <div className="cta-actions">
          <a href="#pricing" className="primary-button">
            Start for free
            <span>→</span>
          </a>

          <a href="#faq" className="secondary-button">
            Learn more
          </a>
        </div>

        <div className="cta-note">
          No credit card required · Free 14-day trial
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="primary-button">
            Send message
            <span>→</span>
          </button>

          {status && <p>{status}</p>}
        </form>
      </div>
    </section>
  );
}