const steps = [
  {
    number: "01",
    title: "Bring your work together",
    description:
      "Connect your projects, tasks, conversations and favorite tools inside one intelligent workspace.",
    icon: "⌘",
  },
  {
    number: "02",
    title: "Let NOVA automate",
    description:
      "Set up AI-powered workflows that handle repetitive tasks and keep your team moving automatically.",
    icon: "✦",
  },
  {
    number: "03",
    title: "Focus on what matters",
    description:
      "Use real-time insights and smart recommendations to make better decisions and achieve your goals.",
    icon: "↗",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="section-container">
        <div className="how-heading">
          <span className="section-label">HOW IT WORKS</span>
          <h2>
            From busywork
            <br />
            <span>to breakthrough.</span>
          </h2>
          <p>
            NOVA makes productivity simple. Connect your work, automate the
            routine and let your team focus on creating meaningful results.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              <div className="step-top">
                <span>{step.number}</span>
                <div className="step-icon">{step.icon}</div>
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>

              <div className="step-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}