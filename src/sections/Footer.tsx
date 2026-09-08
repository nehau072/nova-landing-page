const footerLinks = {
  Product: ["Features", "How It Works", "Solutions", "Pricing"],
  Company: ["About", "Careers", "Contact", "Blog"],
  Resources: ["Help Center", "Documentation", "Community", "Status"],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#" className="logo">
              <span className="logo-mark">N</span>
              <span>NOVA</span>
            </a>

            <p>
              The intelligent workspace for teams that want to work smarter
              and move faster.
            </p>

            <div className="footer-socials">
              <a href="#home">in</a>
              <a href="#home">𝕏</a>
              <a href="#home">◎</a>
            </div>
          </div>

          <div className="footer-links">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4>{title}</h4>

                {links.map((link) => (
                  <a href={`#${link.toLowerCase().replaceAll(" ", "-")}`} key={link}>
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 NOVA. All rights reserved.</span>

          <div>
            <a href="#home">Privacy</a>
            <a href="#home">Terms</a>
            <a href="#home">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}