
import {
  ArrowUpRight,
  BarChart3,
  Code2,
  Database,
  ExternalLink,
  Target,
  Search,
  Lightbulb,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "E-Commerce Sales & Profitability Analysis",
    description:
      "Analyzed e-commerce sales data to identify key revenue drivers, profit trends and top-performing product categories using Excel and Power BI.",
    image: "project-ecommerce.png",
    tools: ["Excel", "Power BI", "SQL"],
    projectUrl: "",
    codeUrl: "",
  },
  {
    number: "02",
    title: "Customer Segmentation — RFM Analysis",
    description:
      "Segmented customers using RFM analysis to understand buying behavior and identify high-value and at-risk customers.",
    image: "project-rfm.png",
    tools: ["Python", "Pandas", "Excel", "Seaborn"],
    projectUrl: "",
    codeUrl: "",
  },
  {
    number: "03",
    title: "Jarvis DevFlow",
    description:
    "An AI-powered software development platform designed to assist and automate stages of the software development lifecycle, from requirements and planning to development, testing and deployment preparation.",
    image: "project-jarvis-devflow.png",
    tools: ["AI", "Python", "FastAPI", "React"],
    projectUrl: "",
    codeUrl: "",
  },
];

const projectWorkflow = [
  {
    name: "Collect",
    detail: "Gather relevant data",
    Icon: Database,
  },
  {
    name: "Explore",
    detail: "Understand patterns",
    Icon: Search,
  },
  {
    name: "Analyze",
    detail: "Generate insights",
    Icon: BarChart3,
  },
  {
    name: "Deliver",
    detail: "Present solutions",
    Icon: Target,
  },
];

function ProjectPreview({ project }) {
  return (
    <div className="asif-project-preview">
      <div className="asif-project-preview-fallback">
        <BarChart3 size={46} strokeWidth={1.4} />
        <strong>{project.title}</strong>
        <span>Dashboard preview coming soon</span>
      </div>

      <img
        src={`${import.meta.env.BASE_URL}${project.image}`}
        alt={`${project.title} dashboard preview`}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />

      <span className="asif-project-number">
        {project.number}
      </span>
    </div>
  );
}

function Projects() {
  return (
    <section className="asif-projects" id="projects">
      <div className="asif-projects-container">

        {/* PROJECTS INTRODUCTION */}
        <div className="asif-projects-top">

          {/* LEFT CONTENT */}
          <div className="asif-projects-intro">
            <span className="asif-projects-label">
              <span className="asif-projects-dot" />
              PROJECT PORTFOLIO
            </span>

            <h2>
              Turning Data Into
              <br />
              <span>Real-World Solutions.</span>
            </h2>

            <p>
              I explore real-world problems through
              data analysis, identify meaningful
              patterns, and create practical insights
              that support smarter business decisions.
            </p>

            <div className="asif-projects-highlights">
              <div>
                <Database />
                <span>
                  <strong>Explore</strong>
                  <small>Understand Data</small>
                </span>
              </div>

              <div>
                <BarChart3 />
                <span>
                  <strong>Analyze</strong>
                  <small>Discover Patterns</small>
                </span>
              </div>

              <div>
                <Target />
                <span>
                  <strong>Solve</strong>
                  <small>Deliver Insights</small>
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — PROJECT APPROACH */}
          <div className="asif-projects-overview">
            <div className="asif-projects-overview-heading">
              <BarChart3 />
              <h3>My Project Approach</h3>
            </div>

            <div className="asif-projects-overview-steps">
              {projectWorkflow.map(({ name, detail, Icon }) => (
                <div key={name}>
                  <Icon />
                  <strong>{name}</strong>
                  <small>{detail}</small>
                </div>
              ))}
            </div>

            <p className="asif-projects-overview-quote">
              From raw datasets to meaningful insights
              and practical solutions.
            </p>
          </div>
        </div>

        {/* PROJECT CARDS */}
        <div className="asif-projects-grid">
          {projects.map((project) => (
            <article
              className="asif-project-card"
              key={project.number}
            >
              <ProjectPreview project={project} />

              <div className="asif-project-content">
                <span className="asif-project-category">
                  <Database size={14} />
                  Data Analysis
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="asif-project-tech">
                  {project.tools.map((tool) => (
                    <span key={tool}>
                      <Code2 size={15} />
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="asif-project-actions">
                  {project.projectUrl ? (
                    <a
                      className="asif-project-primary"
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                      <ExternalLink size={17} />
                    </a>
                  ) : (
                    <span className="asif-project-primary asif-project-disabled">
                      Project Link Pending
                    </span>
                  )}

                  {project.codeUrl ? (
                    <a
                      className="asif-project-secondary"
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                      <ArrowUpRight size={17} />
                    </a>
                  ) : (
                    <span className="asif-project-secondary asif-project-disabled">
                      Code Link Pending
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
