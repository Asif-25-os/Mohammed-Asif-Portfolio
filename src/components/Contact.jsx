import {
  Mail,
  MapPin,
  User,
  FileText,
  MessageSquare,
  Send,
  Lock,
  ArrowRight,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    text: "Let's discuss your project or opportunity.",
    href: "mailto:",
    color: "#1683ff",
  },
  {
    icon: FaLinkedinIn,
    title: "LinkedIn",
    text: "Connect and follow my professional journey.",
    href: "#",
    color: "#0A66C2",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    text: "Explore my projects and technical work.",
    href: "#",
    color: "#111827",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    text: "Quick chat for faster communication.",
    href: "#",
    color: "#25D366",
  },
];

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-page-container">

        {/* LEFT SIDE */}
        <div className="contact-left-panel">
          <div className="contact-label">
            <span>CONTACT</span>
            <div></div>
          </div>

          <h2 className="contact-main-title">
            Let's Create
            <span> Something Great</span>
          </h2>

          <p className="contact-main-description">
            Have a project in mind, an idea to discuss, or just want to say
            hello? I'd love to hear from you. Let's connect and explore how
            we can work together.
          </p>

          <div className="contact-list">
            {contactItems.map(
              ({ icon: Icon, title, text, href, color }) => (
                <a
                  href={href}
                  key={title}
                  className="contact-list-card"
                >
                  <div
                    className="contact-list-icon"
                    style={{
                      color: color,
                      backgroundColor: `${color}12`,
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <div className="contact-list-content">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>

                  <ArrowRight
                    size={20}
                    className="contact-list-arrow"
                  />
                </a>
              )
            )}
          </div>

          <div className="contact-location-row">
            <MapPin size={20} />
            <div>
              <strong>Chennai, India</strong>
              <span>Open to remote opportunities worldwide.</span>
            </div>
          </div>
        </div>

        {/* CENTER VISUAL */}
<div className="contact-center-visual">
  <div className="contact-impact-text">
    <span>Ideas</span>
    <span>To</span>
    <span>Impact</span>
  </div>

  <img
    src="/contact-workspace.png"
    alt="Workspace with plant, books, notebook and pen"
    className="contact-workspace-image"
  />
</div>

        {/* RIGHT FORM */}
        <div className="contact-form-card">
          <div className="contact-form-label">
            <span>SEND A MESSAGE</span>
            <div></div>
          </div>

          <h3>Get In Touch</h3>

          <p className="contact-form-description">
            Fill out the form and I'll get back to you as soon as possible.
          </p>

          <form className="contact-form">
            <div className="contact-form-row">
              <div className="contact-field">
                <label>
                  Your Name <span>*</span>
                </label>

                <div className="contact-input-wrapper">
                  <User size={18} />
                  <input
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div className="contact-field">
                <label>
                  Your Email <span>*</span>
                </label>

                <div className="contact-input-wrapper">
                  <Mail size={18} />
                  <input
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>

            <div className="contact-field">
              <label>
                Subject <span>*</span>
              </label>

              <div className="contact-input-wrapper">
                <FileText size={18} />
                <input
                  type="text"
                  placeholder="What's this about?"
                />
              </div>
            </div>

            <div className="contact-field">
              <label>
                Message <span>*</span>
              </label>

              <div className="contact-textarea-wrapper">
                <MessageSquare size={18} />

                <textarea
                  rows="6"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="contact-submit-btn"
            >
              Send Message
              <Send size={18} />
            </button>

            <div className="contact-privacy">
              <Lock size={14} />
              <span>
                Your information is safe with me. I'll never share it with
                anyone.
              </span>
            </div>
          </form>

          <div className="contact-quote">
            <p>
              “Great ideas start with a simple conversation.”
            </p>
            <span>
              Let's connect and turn ideas into reality.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;