const solutions = [
  {
    number: "01",
    title: "For Startups",
    description:
      "Move from idea to execution faster with lightweight project management and AI-powered workflows.",
    icon: "↗",
  },
  {
    number: "02",
    title: "For Growing Teams",
    description:
      "Keep everyone aligned with shared projects, automated processes and intelligent team insights.",
    icon: "◈",
  },
  {
    number: "03",
    title: "For Enterprises",
    description:
      "Scale productivity across departments with powerful automation, analytics and centralized control.",
    icon: "◎",
  },
];

export default function Solutions() {
  return (
    <section className="solutions-section" id="solutions">
      <div className="section-container">
        <div className="solutions-heading">
          <div>
            <span className="section-label">BUILT FOR EVERY TEAM</span>
            <h2>
              One platform.
              <br />
              <span>Every workflow.</span>
            </h2>
          </div>

          <p>
            Whether you're building your first product or scaling a global
            organization, NOVA adapts to the way your team works.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => (
            <div className="solution-card" key={solution.number}>
              <div className="solution-top">
                <span>{solution.number}</span>
                <div className="solution-icon">{solution.icon}</div>
              </div>

              <h3>{solution.title}</h3>

              <p>{solution.description}</p>

              <a href="#pricing">
                Explore solution <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}