import {
  BarChart3,
  Users,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
const projects = [
  {
    id: 1,
    icon: BarChart3,
    tag: "E-Commerce Analytics",
    title: "E-Commerce Sales & Profitability Analysis",
    description:
      "Analyzed sales performance, customer buying patterns, peak sales periods, and product profitability to identify business growth opportunities.",
    tools: ["Python", "Pandas", "Power BI"],
    impact:
      "Helped identify top-performing categories, seasonal trends, and areas with lower profitability.",
    github: "#",
    live: "#",
  },
  {
    id: 2,
    icon: Users,
    tag: "Customer Analytics",
    title: "Customer Segmentation — RFM Analysis",
    description:
      "Segmented customers using Recency, Frequency, and Monetary analysis to understand customer value and purchasing behavior.",
    tools: ["Python", "SQL", "Excel"],
    impact:
      "Created clear customer groups that can support retention, targeting, and personalized marketing strategies.",
    github: "#",
    live: "#",
  },
  {
    id: 3,
    icon: Workflow,
    tag: "Operational Analytics",
    title: "Operational Workflow Optimization",
    description:
      "Studied operational data to identify process bottlenecks, delivery delays, and workflow inefficiencies.",
    tools: ["Excel", "Power BI", "SQL"],
    impact:
      "Highlighted areas where process improvements can reduce delays and improve operational efficiency.",
    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <div>
            <p className="projects-eyebrow">FEATURED PROJECTS</p>

            <h2>
              Data Projects With
              <span> Business Impact</span>
            </h2>
          </div>

          <p className="projects-intro">
            A selection of analytics projects focused on transforming raw data
            into meaningful insights, dashboards, and practical business
            recommendations.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map(
            ({
              id,
              icon: Icon,
              tag,
              title,
              description,
              tools,
              impact,
              github,
              live,
            }) => (
              <article className="project-card" key={id}>
                <div className="project-visual">
                  <div className="project-visual-top">
                    <div className="project-icon">
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    <span>{tag}</span>
                  </div>

                  <div className="project-chart-preview">
                    <div className="chart-bars">
                      <span style={{ height: "34%" }}></span>
                      <span style={{ height: "58%" }}></span>
                      <span style={{ height: "47%" }}></span>
                      <span style={{ height: "78%" }}></span>
                      <span style={{ height: "64%" }}></span>
                      <span style={{ height: "88%" }}></span>
                    </div>

                    <div className="chart-line"></div>
                  </div>
                </div>

                <div className="project-content">
                  <span className="project-number">0{id}</span>

                  <h3>{title}</h3>

                  <p className="project-description">{description}</p>

                  <div className="project-tools">
                    {tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>

                  <div className="project-impact">
                    <strong>Business Impact</strong>
                    <p>{impact}</p>
                  </div>

                  <div className="project-links">
                    <a href={github}>
                      <FaGithub size={16} />
                      GitHub
                    </a>

                    <a href={live}>
                      View Project
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;