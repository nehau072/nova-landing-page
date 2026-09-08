export default function Product() {
  return (
    <section className="product-section" id="product">
      <div className="product-container">
        <div className="product-visual">
          <div className="product-window">
            <div className="product-window-top">
              <div className="window-controls">
                <span />
                <span />
                <span />
              </div>
              <span>NOVA Intelligence</span>
            </div>

            <div className="product-window-body">
              <div className="product-ai-icon">✦</div>

              <div className="product-ai-content">
                <small>AI WORKSPACE</small>
                <h3>Your work, intelligently organized.</h3>
                <p>
                  NOVA analyzes your projects, priorities and workflows to
                  surface what matters most.
                </p>
              </div>

              <div className="insight-list">
                <div className="insight-item">
                  <span>✓</span>
                  <div>
                    <strong>12 tasks optimized</strong>
                    <small>AI automation saved 4.5 hours</small>
                  </div>
                </div>

                <div className="insight-item">
                  <span>↗</span>
                  <div>
                    <strong>Team efficiency +28%</strong>
                    <small>Compared with last week</small>
                  </div>
                </div>

                <div className="insight-item">
                  <span>✦</span>
                  <div>
                    <strong>3 priorities detected</strong>
                    <small>Recommended by NOVA AI</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-content">
          <span className="section-label">ONE INTELLIGENT WORKSPACE</span>

          <h2>
            Less busywork.
            <br />
            <span>More meaningful work.</span>
          </h2>

          <p>
            NOVA gives your team a single place to plan, collaborate and
            automate. With AI working quietly in the background, your team can
            spend less time managing work and more time creating impact.
          </p>

          <div className="product-points">
            <div>
              <span>01</span>
              <div>
                <strong>Connect everything</strong>
                <p>Bring projects, tasks and communication together.</p>
              </div>
            </div>

            <div>
              <span>02</span>
              <div>
                <strong>Let AI take over</strong>
                <p>Automate repetitive workflows in seconds.</p>
              </div>
            </div>

            <div>
              <span>03</span>
              <div>
                <strong>Make better decisions</strong>
                <p>Turn everyday activity into useful insights.</p>
              </div>
            </div>
          </div>

          <a href="#how-it-works" className="product-link">
            Explore NOVA <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}