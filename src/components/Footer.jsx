
import { ArrowUp, ArrowUpRight, Heart } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "GitHub", href: "", Icon: FaGithub },
  { name: "LinkedIn", href: "", Icon: FaLinkedinIn },
  { name: "WhatsApp", href: "", Icon: FaWhatsapp },
  { name: "Email", href: "", Icon: FaEnvelope },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="asif-footer">
      <div className="asif-footer-container">
        <div className="asif-footer-main">
          <div className="asif-footer-brand">
            <a href="#home" className="asif-footer-logo">
              <span>MA.</span>
              Mohammed Asif
            </a>

            <h2>
              Let's Create
              <br />
              <span>Something Meaningful.</span>
            </h2>

            <p>
              Transforming data into insights and ideas
              into opportunities through analytics,
              visualization and technology.
            </p>

            <a href="#contact" className="asif-footer-cta">
              Let's Connect
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="asif-footer-links">
            <h3>Quick Links</h3>

            <nav aria-label="Footer navigation">
              {navigation.map((item) => (
                <a key={item.name} href={item.href}>
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="asif-footer-connect">
            <h3>Connect With Me</h3>

            <p>
              Open to collaborations, projects and
              new opportunities.
            </p>

            <div className="asif-footer-socials">
              {socialLinks.map(({ name, href, Icon }) =>
                href ? (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                  >
                    <Icon size={19} />
                  </a>
                ) : (
                  <span
                    key={name}
                    className="asif-footer-social-disabled"
                    title={`${name} link coming soon`}
                    aria-label={`${name} link coming soon`}
                  >
                    <Icon size={19} />
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="asif-footer-bottom">
          <p>
            © {year} Mohammed Asif. All rights reserved.
          </p>

          <p className="asif-footer-made">
            Designed with <Heart size={14} /> and purpose
          </p>

          <a href="#home" className="asif-footer-backtop">
            Back to Top
            <ArrowUp size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
