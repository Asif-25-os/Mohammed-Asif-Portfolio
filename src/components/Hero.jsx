
import {
  ArrowRight,
  BarChart3,
  Database,
  Mail,
  Target,
  Code2,
  FileSpreadsheet,
  PieChart,
  BookOpen,
} from "lucide-react";

const tools = [
  { name: "Python", Icon: Code2 },
  { name: "Excel", Icon: FileSpreadsheet },
  { name: "Power BI", Icon: BarChart3 },
  { name: "Tableau", Icon: PieChart },
  { name: "Jupyter", Icon: BookOpen },
];

function Hero() {
  const profileImage =
    `${import.meta.env.BASE_URL}asif-profile.png`;

  return (
    <section className="asif-hero" id="home">
      <div className="asif-hero-container">

        {/* HERO MAIN CONTENT */}
        <div className="asif-hero-grid">

          {/* LEFT SIDE */}
          <div className="asif-hero-copy">

            <span className="asif-hero-label">
              <span className="asif-status-dot" />
              DATA ANALYST
            </span>

            <h1>
              Turning
              <br />
              Data Into
              <br />
              <span>Real Insights.</span>
            </h1>

            <p>
              I analyze data, uncover meaningful insights,
              and create visualizations that help businesses
              make smarter, data-driven decisions.
            </p>

            <div className="asif-hero-actions">

              <a
                className="asif-btn-primary"
                href="#projects"
              >
                <BarChart3 size={19} />
                View My Projects
                <ArrowRight size={17} />
              </a>

              <a
                className="asif-btn-secondary"
                href="#contact"
              >
                <Mail size={19} />
                Contact Me
              </a>

            </div>

            <div className="asif-hero-socials">
              <span>CONNECT WITH ME</span>

              <div>
                <a
                  href="#contact"
                  aria-label="Contact"
                  title="Contact"
                >
                  <Mail size={19} />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="asif-hero-visual">

            {/* PROFILE IMAGE */}
            <div className="asif-portrait">
              
              <img
              src={`${import.meta.env.BASE_URL}asif-profile.png`}
              alt="Mohammed Asif - Data Analyst"
              className="asif-hero-photo"
              loading="eager"
              fetchPriority="high"/>


              <div className="asif-portrait-caption">
                <Target size={20} />

                <div>
                  <strong>
                    Data-Driven Decisions
                  </strong>

                  <small>
                    From raw data to useful insights
                  </small>
                </div>
              </div>

            </div>

            {/* ANALYTICS CARD */}
            <div className="asif-insight-panel">

              <div className="asif-panel-heading">
                <BarChart3 size={18} />
                <strong>Analytics Focus</strong>
              </div>

              <div
                className="asif-chart"
                aria-hidden="true"
              >
                {[35, 48, 43, 64, 72, 90].map(
                  (height, index) => (
                    <span
                      key={index}
                      style={{
                        height: `${height}%`,
                      }}
                    />
                  )
                )}
              </div>

              <p>
                Explore trends.
                Discover opportunities.
              </p>

              <small>
                Illustrative chart · Not real project data
              </small>

            </div>
          </div>
        </div>

        {/* BOTTOM TECH STRIP */}
        <div className="asif-hero-bottom">

          <div className="asif-hero-value">
            <Database size={25} />

            <div>
              <strong>Data Analysis</strong>
              <span>
                Clean · Explore · Understand
              </span>
            </div>
          </div>

          <div className="asif-hero-value">
            <BarChart3 size={25} />

            <div>
              <strong>
                Business Intelligence
              </strong>
              <span>
                Visualize · Report · Improve
              </span>
            </div>
          </div>

          <div className="asif-hero-tools">
            <strong>Tools I Work With</strong>

            <div className="asif-tools-list">

              {tools.map(({ name, Icon }) => (
                <div
                  className="asif-tool"
                  key={name}
                >
                  <Icon size={25} />
                  <span>{name}</span>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
