import { Download, ArrowRight } from "lucide-react";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaKaggle,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">
            DATA <span>•</span> INSIGHTS <span>•</span> IMPACT
          </p>

          <h1>
            Turning Data Into
            <span className="hero-highlight">Business Growth</span>
          </h1>

          <p className="hero-description">
            I analyze raw data, uncover meaningful insights, and create
            interactive dashboards to help businesses make better decisions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-primary">
              View My Projects
              <ArrowRight size={17} />
            </a>

            <a
              href="/resume.pdf"
              className="hero-secondary"
              download
            >
              <Download size={17} />
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="#"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              aria-label="Kaggle"
              title="Kaggle"
            >
              <FaKaggle />
            </a>

            <a
              href="mailto:"
              aria-label="Email"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;