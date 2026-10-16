import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Code2,
  Database,
  FileSpreadsheet,
  Lightbulb,
  MonitorUp,
  PieChart,
  Settings,
  Target,
  Users,
  Wrench,
} from "lucide-react";

import {
  FaPython,
  FaGithub,
  FaFileExcel,
} from "react-icons/fa";




// Power BI icon without unsupported imports
function PowerBIIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="3" y="19" width="6" height="10" rx="2" fill="#F2C811" />
      <rect x="11" y="12" width="6" height="17" rx="2" fill="#F2C811" />
      <rect x="19" y="5" width="6" height="24" rx="2" fill="#E5A900" />
      <rect x="25" y="2" width="4" height="27" rx="2" fill="#F2C811" />
    </svg>
  );
}

// Safe fallback for SQL and VS Code
const categories = [
  {
    title: "Programming & Analysis",
    subtitle: "DATA PROCESSING & ANALYSIS",
    Icon: Code2,
    tools: [
      {
        name: "Python",
        Icon: FaPython,
        color: "#3776AB",
        description:
          "Data analysis, cleaning, automation and machine learning basics.",
        level: 85,
      },
      {
  name: "R / RStudio",
  Icon: BarChart3,
  color: "#276DC3",
  description:
    "Statistical analysis and data visualization.",
  level: 70,
},
    ],
  },
  {
    title: "Databases & Querying",
    subtitle: "DATA STORAGE & RETRIEVAL",
    Icon: Database,
    tools: [
      {
        name: "SQL",
        Icon: Database,
        color: "#1684CE",
        description:
          "Query data, join tables, write complex queries and analyze data.",
        level: 90,
      },
      {
        name: "MySQL",
        Icon: Database,
        color: "#00758F",
        description:
          "Work with relational databases and manage data efficiently.",
        level: 75,
      },
    ],
  },
  {
    title: "Spreadsheets & Reporting",
    subtitle: "DATA MANAGEMENT & REPORTING",
    Icon: FileSpreadsheet,
    tools: [
      {
        name: "Excel",
        Icon: FaFileExcel,
        color: "#217346",
        description:
          "Data cleaning, formulas, pivot tables and interactive reports.",
        level: 90,
      },
      {
        name: "Google Sheets",
        Icon: FileSpreadsheet,
        color: "#0F9D58",
        description:
          "Collaborative data analysis and real-time reporting.",
        level: 80,
      },
    ],
  },
  {
    title: "Data Visualization & BI",
    subtitle: "VISUALIZATION & DASHBOARDS",
    Icon: BarChart3,
    tools: [
      {
        name: "Power BI",
        Icon: PowerBIIcon,
        color: "#F2C811",
        description:
          "Create interactive dashboards and business reports.",
        level: 85,
      },
     {
  name: "Tableau",
  Icon: PieChart,
  color: "#4E79A7",
  description:
    "Create advanced visualizations and data stories.",
  level: 80,
},
    ],
  },
  {
    title: "Development & Productivity",
    subtitle: "TOOLS FOR EFFICIENCY",
    Icon: Wrench,
    tools: [
      {
        name: "Jupyter Notebook",
        Icon: BookOpen,
        color: "#F37626",
        description:
          "Interactive coding, data exploration and visualization.",
        level: 85,
      },
      {
        name: "VS Code",
        Icon: Code2,
        color: "#007ACC",
        description:
          "Write, run and manage Python, SQL and data projects.",
        level: 80,
      },
    ],
  },
  {
    title: "Version Control & Collaboration",
    subtitle: "PROJECT MANAGEMENT",
    Icon: Users,
    tools: [
      {
        name: "GitHub",
        Icon: FaGithub,
        color: "#181717",
        description:
          "Version control and collaboration on projects.",
        level: 75,
      },
      {
        name: "Google Colab",
        Icon: MonitorUp,
        color: "#F9AB00",
        description:
          "Cloud-based environment for Python and data analysis.",
        level: 80,
      },
    ],
  },
];

const workflow = [
  {
    name: "Collect Data",
    detail: "Gather data from different sources",
    Icon: Database,
  },
  {
    name: "Clean & Process",
    detail: "Handle missing values and transform",
    Icon: Settings,
  },
  {
    name: "Analyze",
    detail: "Use statistical methods & queries",
    Icon: BarChart3,
  },
  {
    name: "Visualize",
    detail: "Create interactive dashboards",
    Icon: MonitorUp,
  },
  {
    name: "Share Insights",
    detail: "Deliver clear recommendations",
    Icon: Target,
  },
];

function Skills() {
  return (
    <section className="asif-skills" id="skills">
      <div className="asif-skills-container">

        {/* INTRO + WORKFLOW */}
        <div className="asif-skills-top">

          <div className="asif-skills-intro">
            <span className="asif-skills-label">
              <span className="asif-skills-dot" />
              TECH TOOLS
            </span>

            <h2>
              Tools That
              <br />
              Turn Data <span>Into Insights.</span>
            </h2>

            <p>
              I work with modern data analysis,
              visualization and productivity tools
              to clean, analyze and present data
              in a meaningful way.
            </p>

            <div className="asif-skills-highlights">
              <div>
                <Database />
                <span>
                  <strong>Clean</strong>
                  <small>Prepare Data</small>
                </span>
              </div>

              <div>
                <BarChart3 />
                <span>
                  <strong>Analyze</strong>
                  <small>Find Patterns</small>
                </span>
              </div>

              <div>
                <PieChart />
                <span>
                  <strong>Visualize</strong>
                  <small>Create Insights</small>
                </span>
              </div>

              <div>
                <Lightbulb />
                <span>
                  <strong>Solve</strong>
                  <small>Real Problems</small>
                </span>
              </div>
            </div>
          </div>

          {/* WORKFLOW */}
          <div className="asif-skills-workflow">
            <div className="asif-skills-heading">
              <Settings />
              <h3>My Workflow</h3>
            </div>

            <div className="asif-workflow-steps">
              {workflow.map(
                ({ name, detail, Icon }, index) => (
                  <div
                    className="asif-workflow-step"
                    key={name}
                  >
                    <div className="asif-workflow-icon">
                      <Icon />
                    </div>

                    <strong>{name}</strong>
                    <small>{detail}</small>

                    {index < workflow.length - 1 && (
                      <ArrowRight className="asif-workflow-arrow" />
                    )}
                  </div>
                )
              )}
            </div>

            <div className="asif-workflow-quote">
              
              <p>
                The right tools make complex data
                simple and meaningful.
              </p>
            </div>
          </div>
        </div>

        {/* TOOL CATEGORIES */}
        <div className="asif-skills-categories">
          {categories.map(
            ({ title, subtitle, Icon, tools }) => (
              <article
                className="asif-skills-category"
                key={title}
              >
                <div className="asif-skills-heading">
                  <Icon />

                  <div>
                    <h3>{title}</h3>
                    <small>{subtitle}</small>
                  </div>
                </div>

                <div className="asif-skills-tool-grid">
                  {tools.map((tool) => {
                    const ToolIcon = tool.Icon;

                    return (
                      <div
                        className="asif-skills-tool-card"
                        key={tool.name}
                      >
                        <ToolIcon
                          className="asif-skills-tool-icon"
                          style={{ color: tool.color }}
                        />

                        <h4>{tool.name}</h4>
                        <p>{tool.description}</p>

                        <div className="asif-skills-level">
                          <div className="asif-skills-level-track">
                            <span
                              style={{
                                width: `${tool.level}%`,
                              }}
                            />
                          </div>

                          <strong>{tool.level}%</strong>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;

