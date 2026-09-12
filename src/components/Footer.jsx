import {
  FaLinkedinIn,
  FaGithub,
  FaKaggle,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <div className="footer-logo-box">MA</div>

              <div>
                <h3>Mohammed Asif</h3>
                <p>Data Analyst</p>
              </div>
            </a>

            <p className="footer-description">
              Turning data into clear insights, meaningful visualizations,
              and better business decisions.
            </p>
          </div>

          <div className="footer-navigation">
            <h4>Quick Links</h4>

            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-connect">
            <h4>Connect</h4>

            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn" title="LinkedIn">
                <FaLinkedinIn />
              </a>

              <a href="#" aria-label="GitHub" title="GitHub">
                <FaGithub />
              </a>

              <a href="#" aria-label="Kaggle" title="Kaggle">
                <FaKaggle />
              </a>

              <a href="mailto:" aria-label="Email" title="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Mohammed Asif. All rights reserved.
          </p>

          <span>
            Designed for Data • Insights • Impact
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;