import {
  FaDatabase,
  FaChartPie,
  FaChartBar,
  FaFileExcel,
  FaPython,
} from "react-icons/fa";

import {
  SiMysql,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

const technologies = [
  {
    name: "Python",
    category: "Programming",
    icon: FaPython,
    color: "#3776AB",
  },
  {
    name: "SQL",
    category: "Database Query",
    icon: FaDatabase,
    color: "#336791",
  },
  {
    name: "MySQL",
    category: "Database",
    icon: SiMysql,
    color: "#4479A1",
  },
  {
    name: "Power BI",
    category: "Business Intelligence",
    icon: FaChartBar,
    color: "#F2C811",
  },
  {
    name: "Tableau",
    category: "Data Visualization",
    icon: FaChartPie,
    color: "#E97627",
  },
  {
    name: "Excel",
    category: "Data Analysis",
    icon: FaFileExcel,
    color: "#217346",
  },
  {
    name: "Pandas",
    category: "Data Processing",
    icon: SiPandas,
    color: "#150458",
  },
  {
    name: "NumPy",
    category: "Data Analysis",
    icon: SiNumpy,
    color: "#4D77CF",
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <div className="skills-label">
            <span>SKILLS & TECHNOLOGIES</span>
            <div></div>
          </div>

          <h2>
            Technologies I
            <span> Use & Explore</span>
          </h2>

          <p>
            A focused toolkit I use for data analysis, database querying,
            visualization, data processing, and business intelligence.
          </p>
        </div>

        <div className="technology-grid">
          {technologies.map(
            ({ name, category, icon: Icon, color }) => (
              <article className="technology-card" key={name}>

                <div
                  className="technology-icon"
                  style={{
                    color: color,
                    backgroundColor: `${color}12`,
                    borderColor: `${color}28`,
                  }}
                >
                  <Icon />
                </div>

                <div className="technology-info">
                  <h3>{name}</h3>
                  <p>{category}</p>
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