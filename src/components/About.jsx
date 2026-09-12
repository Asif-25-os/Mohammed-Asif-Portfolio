import {
  Brain,
  BriefcaseBusiness,
  LineChart,
  GraduationCap,
  BarChart3,
  Lightbulb,
  Quote,
} from "lucide-react";

const values = [
  {
    icon: Brain,
    title: "Analytical Thinking",
    text: "I enjoy breaking down complex problems and finding clear insights from data.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Mindset",
    text: "I focus on how data can support better decisions, efficiency, and business growth.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Approach",
    text: "I use data, patterns, and measurable insights to understand problems and recommend actions.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    text: "I continuously improve my skills in analytics, visualization, SQL, Python, and business intelligence.",
  },
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-visual">
          <div className="about-shape about-shape-top"></div>
          <div className="about-shape about-shape-left"></div>
          <div className="about-shape about-shape-right"></div>

          <div className="about-stats-card">
            <div>
              <strong>3+</strong>
              <span>Years Learning</span>
            </div>

            <div className="about-stat-line"></div>

            <div>
              <strong>10+</strong>
              <span>Projects</span>
            </div>

            <div className="about-stat-line"></div>

            <div>
              <strong>∞</strong>
              <span>Curiosity</span>
            </div>
          </div>

          <div className="about-learning-badge">
            <BarChart3 size={19} />
            <span>
              Always
              <strong>Learning</strong>
            </span>
          </div>

          <div className="about-photo-card">
            <img
              src="/about-profile.png"
              alt="Mohammed Asif"
              className="about-image"
            />

            <div className="about-signature">Mohammed Asif</div>
          </div>

          <div className="about-impact-badge">
            <Lightbulb size={18} />
            <span>
              Turning Ideas
              <strong>Into Impact</strong>
            </span>
          </div>
        </div>

        <div className="about-content">
          <div className="about-label">
            <span>ABOUT ME</span>
            <div></div>
          </div>

          <h2>
            Hi, I'm <span>Mohammed Asif</span>
          </h2>

          <h3>Data Analyst | Problem Solver | Lifelong Learner</h3>

          <p className="about-description">
            I'm a Computer Science student with a strong interest in data
            analysis and business intelligence. I enjoy working with data,
            discovering meaningful insights, and creating visualizations that
            support real-world decision making.
          </p>

          <p className="about-description">
            I'm continuously learning new tools and exploring how data can solve
            practical business problems and create measurable impact.
          </p>

          <div className="about-values">
            {values.map(({ icon: Icon, title, text }) => (
              <article className="about-value-card" key={title}>
                <div className="about-value-icon">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="about-quote">
        <div className="quote-icon">
          <Quote size={18} />
        </div>

        <p>Better Data. Better Decisions. A Better Tomorrow.</p>

        <div className="quote-divider"></div>

        <span>STUDENT / ANALYST / BUILDER</span>
      </div>
    </section>
  );
}

export default About;