import Reveal from "../components/Reveal";

const features = [
  {
    icon: "✦",
    title: "AI Automation",
    description:
      "Automate repetitive work and let AI handle routine tasks while your team focuses on what matters.",
  },
  {
    icon: "◈",
    title: "Smart Projects",
    description:
      "Plan, organize and track projects with powerful tools designed for modern teams.",
  },
  {
    icon: "◎",
    title: "Team Collaboration",
    description:
      "Keep conversations, tasks, files and decisions together in one shared workspace.",
  },
  {
    icon: "⌁",
    title: "Intelligent Insights",
    description:
      "Turn your team's activity into actionable insights with real-time productivity analytics.",
  },
  {
    icon: "⚡",
    title: "Workflow Builder",
    description:
      "Create custom workflows that connect your favorite tools and eliminate unnecessary steps.",
  },
  {
    icon: "◉",
    title: "Unified Workspace",
    description:
      "Bring projects, communication, documents and productivity tools into one simple platform.",
  },
];

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="section-container">
        <div className="section-heading">
          <div>
            <span className="section-label">POWERFUL FEATURES</span>
            <h2>
              Everything your team needs
              <span> to move faster.</span>
            </h2>
          </div>

          <p>
            NOVA combines intelligent automation with powerful collaboration
            tools to help your team do its best work.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 100}>
              <div className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="#cta">
                  Learn more <span>→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}