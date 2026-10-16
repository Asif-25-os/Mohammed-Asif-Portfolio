
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="asif-navbar">
      <div className="asif-navbar-inner">

        <a className="asif-brand" href="#home">
          <span className="asif-brand-logo">
            MA<span className="asif-brand-dot">.</span>
          </span>

          <span className="asif-brand-text">
            <strong>Mohammed Asif</strong>
            <small>DATA ANALYST</small>
          </span>
        </a>

        <nav className="asif-nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="asif-nav-button" href="#contact">
          Let's Connect
          <ArrowUpRight size={17} />
        </a>

      </div>
    </header>
  );
}

export default Navbar;
