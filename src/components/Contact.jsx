
import { useState } from "react";

import {
  Mail,
  Phone,
  ArrowUpRight,
  CalendarDays,
  UserRound,
  FileText,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

// Add Mohammed Asif's verified contact details.
const contactInfo = {
  github: "https://github.com/Asif-25-os",
  linkedin: "https://www.linkedin.com/in/mohammed-asif-a350882b6/",
  email: "bmd.asif46@gmail.com",
  whatsapp: "+91 8309492707",
};

const contactCards = [
  {
    name: "EMAIL",
    value: contactInfo.email || "Email to be added",
    description: "Drop me an email anytime",
    href: contactInfo.email
      ? `mailto:${contactInfo.email}`
      : "",
    Icon: Mail,
    type: "email",
  },
  {
    name: "WHATSAPP",
    value: contactInfo.whatsapp || "WhatsApp to be added",
    description: "Chat with me directly",
    href: contactInfo.whatsapp
      ? `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`
      : "",
    Icon: Phone,
    type: "whatsapp",
  },
  {
    name: "LINKEDIN",
    value: contactInfo.linkedin
      ? "View LinkedIn Profile"
      : "LinkedIn to be added",
    description: "Let's connect professionally",
    href: contactInfo.linkedin,
    Icon: FaLinkedinIn,
    type: "linkedin",
  },
  {
    name: "GITHUB",
    value: contactInfo.github
      ? "View GitHub Profile"
      : "GitHub to be added",
    description: "Check out my projects",
    href: contactInfo.github,
    Icon: FaGithub,
    type: "github",
  },
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!contactInfo.email) {
      window.alert(
        "Contact email has not been configured yet."
      );
      return;
    }

    const subject = encodeURIComponent(form.subject);

    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n\n` +
      `${form.message}`
    );

    window.location.href =
      `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="asif-contact" id="contact">
      <div className="asif-contact-container">

        {/* LEFT-ALIGNED CONTACT HEADING */}
        <div className="asif-contact-header">
          <span className="asif-contact-label">
            <span className="asif-contact-dot" />
            CONTACT
          </span>

          <h2>
            Let's Turn
            <br />
            Conversations Into
            <br />
            <span>Opportunities.</span>
          </h2>

          <p>
            Have a data analytics project, collaboration
            idea, or opportunity in mind? Let's connect
            and explore how meaningful insights can
            create real value.
          </p>
        </div>

        {/* CONTACT MAIN LAYOUT */}
        <div className="asif-contact-layout">

          {/* LEFT SIDE */}
          <div className="asif-contact-left">

            {/* CONTACT CARDS */}
            <div className="asif-contact-cards">
              {contactCards.map(
                ({
                  name,
                  value,
                  description,
                  href,
                  Icon,
                  type,
                }) => (
                  <div
                    className="asif-contact-card"
                    key={name}
                  >
                    <div
                      className={`asif-contact-icon asif-contact-icon-${type}`}
                    >
                      <Icon size={30} />
                    </div>

                    <div className="asif-contact-card-info">
                      <strong>{name}</strong>
                      <span>{value}</span>
                      <small>{description}</small>
                    </div>

                    {href ? (
                      <a
                        href={href}
                        className="asif-contact-open"
                        aria-label={`Open ${name}`}
                        target={
                          href.startsWith("mailto:")
                            ? undefined
                            : "_blank"
                        }
                        rel="noopener noreferrer"
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    ) : (
                      <span
                        className="asif-contact-open asif-contact-unavailable"
                        aria-label={`${name} not configured`}
                      >
                        <ArrowUpRight size={20} />
                      </span>
                    )}
                  </div>
                )
              )}
            </div>

            {/* AVAILABILITY CARD */}
            <div className="asif-contact-availability">
              <div className="asif-contact-availability-icon">
                <CalendarDays size={30} />
              </div>

              <div className="asif-contact-availability-info">
                <strong>AVAILABILITY</strong>

                <h3>Open to New Opportunities</h3>

                <p>
                  Interested in discussing data analytics,
                  business intelligence and meaningful
                  projects.
                </p>
              </div>

              <span className="asif-contact-status">
                <CheckCircle2 size={15} />
                Let's Connect
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="asif-contact-form-card">
            <div className="asif-contact-form-heading">
              <div className="asif-contact-form-icon">
                <Send size={28} />
              </div>

              <div>
                <h3>Send a Message</h3>

                <p>
                  Fill out the form to prepare an email.
                  Your email app will open to send it.
                </p>
              </div>
            </div>

            {/* MESSAGE FORM */}
            <form onSubmit={handleSubmit}>
              <div className="asif-contact-form-row">

                <label className="asif-contact-field">
                  <UserRound size={20} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    aria-label="Your Name"
                    value={form.name}
                    onChange={updateField}
                    required
                  />
                </label>

                <label className="asif-contact-field">
                  <Mail size={20} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    aria-label="Your Email"
                    value={form.email}
                    onChange={updateField}
                    required
                  />
                </label>
              </div>

              <label className="asif-contact-field">
                <FileText size={20} />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  aria-label="Subject"
                  value={form.subject}
                  onChange={updateField}
                  required
                />
              </label>

              <label className="asif-contact-field asif-contact-textarea">
                <MessageCircle size={20} />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  aria-label="Your Message"
                  value={form.message}
                  onChange={updateField}
                  required
                />
              </label>

              <button
                className="asif-contact-submit"
                type="submit"
              >
                <Send size={21} />
                Prepare Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
