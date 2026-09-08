export default function CTA() {
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
      </div>
    </section>
  );
}