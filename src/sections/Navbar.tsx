import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Solutions", href: "#solutions" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          <span className="logo-mark">N</span>
          <span>NOVA</span>
        </a>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#pricing" className="login-link">
            Log in
          </a>
          <a href="#cta" className="nav-button">
            Get Started
          </a>
        </div>

        <button
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}