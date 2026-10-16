
import { useState } from "react";

import {
  ArrowUpRight,
  Users,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

// ====================================
// TEAM MEMBER DETAILS
// ====================================

const teamMembers = [
  {
    name: "Mohammed Asif B",
    role: "Data Analyst",
    number: "01",
    initials: "MA",
    image: "asif-profile.png",

    bio: "Interested in transforming data into useful insights through analysis, visualization, and reporting.",

    skills: [
      "Data Analysis",
      "Visualization",
      "Power BI",
      "Reporting",
    ],

    portfolio:
      "https://asif-25-os.github.io/Mohammed-Asif-Portfolio/",

    github:
      "https://github.com/Asif-25-os",

    linkedin:
      "https://www.linkedin.com/in/mohammed-asif-a350882b6/",

    email:
      "bmd.asif46@gmail.com",
    whatsapp:
      "+91 8309492707",
  },

  {
    name: "Mohammed Hatheem J",
    role: "Web Developer & AI Enthusiast",
    number: "02",
    initials: "MH",
    image: "hatheem-team.png",

    bio: "Passionate about developing modern websites, AI-powered applications, and practical software solutions.",

    skills: [
      "React",
      "Web Development",
      "AI",
      "Automation",
    ],

    portfolio:
      "https://jhatheem19-code.github.io/mohammed-hatheem-portfolio/",

    github:
      "https://github.com/jhatheem19-code",

    linkedin:
      "https://www.linkedin.com/in/hatheem-ah?utm_source=share_via&utm_content=profile&utm_medium=member_android",

    email:
      "jhatheem19@gmail.com",
    
    whatsapp:
      "+91 9014758318"
  },
];

// ====================================
// TEAM PROFILE IMAGE
// ====================================

function TeamPhoto({ member }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="asif-team-v2-photo-box">
      {member.image && !imageError ? (
        <img
          src={`${import.meta.env.BASE_URL}${member.image}`}
          alt={`${member.name} professional portrait`}
          className="asif-team-v2-photo"
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="asif-team-v2-avatar">
          {member.initials}
        </div>
      )}
    </div>
  );
}

// ====================================
// SOCIAL MEDIA CONNECTIONS
// ====================================

function TeamSocials({ member }) {
  const socialLinks = [
    {
      name: "GitHub",
      Icon: FaGithub,
      href: member.github,
    },
    {
      name: "LinkedIn",
      Icon: FaLinkedinIn,
      href: member.linkedin,
    },
    {
      name: "WhatsApp",
      Icon: FaWhatsapp,
      href: member.whatsapp
        ? `https://wa.me/${member.whatsapp.replace(/\D/g, "")}`
        : "",
    },
    {
      name: "Email",
      Icon: FaEnvelope,
      href: member.email
        ? `mailto:${member.email}`
        : "",
    },
  ];

  return (
    <div className="asif-team-v2-socials">
      {socialLinks.map(({ name, Icon, href }) =>
        href ? (
          <a
            key={name}
            href={href}
            target={
              name === "Email" ? undefined : "_blank"
            }
            rel={
              name === "Email"
                ? undefined
                : "noopener noreferrer"
            }
            aria-label={`${member.name} ${name}`}
            title={name}
          >
            <Icon size={19} />
          </a>
        ) : (
          <span
            key={name}
            className="asif-team-social-unavailable"
            title={`${name} link coming soon`}
            aria-label={`${name} not configured`}
          >
            <Icon size={19} />
          </span>
        )
      )}
    </div>
  );
}

// ====================================
// MAIN TEAM SECTION
// ====================================

function Team() {
  return (
    <section className="asif-team-v2" id="team">
      <div className="asif-team-v2-container">

        {/* HEADER */}

        <div className="asif-team-v2-header">
          <span className="asif-team-v2-label">
            <span className="asif-team-v2-dot" />
            TEAM & COLLABORATIONS
          </span>

          <h2>
            Meet Our <span>Team.</span>
          </h2>

          <p>
            Different skills, shared ideas,
            and a passion for building
            meaningful digital experiences.
            Get to know the people behind the work.
          </p>

          <div className="asif-team-v2-caption">
            <Users size={17} />
            Meet the people and explore their work
          </div>
        </div>

        {/* TEAM CARDS */}

        <div className="asif-team-v2-grid">
          {teamMembers.map((member) => (
            <article
              className="asif-team-v2-card"
              key={member.name}
            >

              <TeamPhoto member={member} />

              <div className="asif-team-v2-content">

                <span className="asif-team-v2-member-label">
                  TEAM MEMBER {member.number}
                </span>

                <h3>{member.name}</h3>

                <span className="asif-team-v2-role">
                  {member.role}
                </span>

                <p className="asif-team-v2-bio">
                  {member.bio}
                </p>

                {/* SKILL BADGES */}

                <div className="asif-team-v2-skills">
                  {member.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>

                {/* PORTFOLIO + SOCIAL ICONS */}

                <div className="asif-team-v2-actions">

                  <a
                    className="asif-team-v2-button"
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${member.name} portfolio`}
                  >
                    View Portfolio
                    <ArrowUpRight size={17} />
                  </a>

                  <TeamSocials member={member} />

                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Team;
