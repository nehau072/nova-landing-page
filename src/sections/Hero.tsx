export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            AI-powered productivity platform
          </div>

          <h1>
            Work smarter.
            <br />
            <span>Achieve more.</span>
          </h1>

          <p className="hero-description">
            NOVA brings your projects, people, and AI-powered automation
            together in one intelligent workspace.
          </p>

          <div className="hero-actions">
            <a href="#pricing" className="primary-button">
              Start for free
              <span>→</span>
            </a>

            <a href="#how-it-works" className="secondary-button">
              See how it works
              <span>▶</span>
            </a>
          </div>

          <div className="hero-note">
            <span>✓</span> No credit card required
            <span>✓</span> Free 14-day trial
          </div>
        </div>

        <div className="hero-visual">
          <div className="dashboard-card">
            <div className="dashboard-top">
              <div className="window-controls">
                <span />
                <span />
                <span />
              </div>

              <div className="dashboard-title">
                <span className="mini-logo">N</span>
                NOVA Workspace
              </div>

              <div className="avatar">NU</div>
            </div>

            <div className="dashboard-body">
              <div className="dashboard-sidebar">
                <div className="sidebar-item active">⌂ Dashboard</div>
                <div className="sidebar-item">▣ Projects</div>
                <div className="sidebar-item">✓ Tasks</div>
                <div className="sidebar-item">◉ Analytics</div>
              </div>

              <div className="dashboard-main">
                <div className="dashboard-heading">
                  <div>
                    <small>MONDAY, SEPTEMBER 8</small>
                    <h3>Good morning, Neha 👋</h3>
                  </div>
                  <button>+ New task</button>
                </div>

                <div className="progress-card">
                  <div>
                    <small>Weekly productivity</small>
                    <strong>84%</strong>
                  </div>
                  <div className="progress-bar">
                    <div />
                  </div>
                  <span>↑ 12.4% this week</span>
                </div>

                <div className="task-grid">
                  <div className="task-card">
                    <div className="task-icon purple">✦</div>
                    <div>
                      <small>AI AUTOMATION</small>
                      <p>Review campaign insights</p>
                    </div>
                    <span className="task-check">✓</span>
                  </div>

                  <div className="task-card">
                    <div className="task-icon blue">◈</div>
                    <div>
                      <small>PROJECT</small>
                      <p>Website redesign</p>
                    </div>
                    <span className="task-check">✓</span>
                  </div>

                  <div className="task-card">
                    <div className="task-icon orange">◉</div>
                    <div>
                      <small>TEAM</small>
                      <p>Product sync · 2:00 PM</p>
                    </div>
                    <span className="task-check">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="floating-card ai-card">
            <div className="floating-icon">✦</div>
            <div>
              <strong>AI Assistant</strong>
              <p>3 tasks automated</p>
            </div>
          </div>

          <div className="floating-card productivity-card">
            <span>Productivity</span>
            <strong>+32%</strong>
            <div className="mini-chart">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <span>↓</span>
      </div>
    </section>
  );
}