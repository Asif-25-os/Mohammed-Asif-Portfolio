
import {
  UserRound,
  Database,
  BarChart3,
  Target,
  Search,
  Lightbulb,
  GraduationCap,
  FileText,
  BookOpen,
  Brain,
  Settings,
  TrendingUp,
} from "lucide-react";

const approach = [
  { title: "Understand Data", Icon: Search },
  { title: "Clean & Process", Icon: Database },
  { title: "Analyze & Visualize", Icon: BarChart3 },
  { title: "Solve Real Problems", Icon: Target },
];

function About() {
  return (
    <section className="asif-about" id="about">
      <div className="asif-about-container">

        {/* ABOUT INTRODUCTION */}
        <div className="asif-about-top">
          <div className="asif-about-intro">
            <span className="asif-about-label">
              <span className="asif-about-dot" />
              ABOUT ME
            </span>

            <h2>
              Turning Data
              <br />
              Into <span>Opportunities.</span>
            </h2>

            <p>
              I'm Mohammed Asif, a Data Analyst with a
              strong interest in analyzing data, finding
              meaningful insights, and creating clear
              visualizations that support better
              decision-making.
            </p>

            <div className="asif-about-highlights">
              <div>
                <GraduationCap />
                <span>
                  <strong>Learning</strong>
                  <small>Continuous Growth</small>
                </span>
              </div>

              <div>
                <FileText />
                <span>
                  <strong>Projects</strong>
                  <small>Practical Experience</small>
                </span>
              </div>

              <div>
                <TrendingUp />
                <span>
                  <strong>Data</strong>
                  <small>Driven Mindset</small>
                </span>
              </div>

              <div>
                <Lightbulb />
                <span>
                  <strong>Always</strong>
                  <small>Curious</small>
                </span>
              </div>
            </div>
          </div>

          {/* MY APPROACH */}
          <div className="asif-about-approach">
            <div className="asif-about-card-heading">
              <Database />
              <strong>My Approach</strong>
            </div>

            <div className="asif-about-approach-main">
              <h3>
                Analyze
                <br />
                Visualize
                <br />
                <span>Solve</span>
                <br />
                <span>Grow</span>
              </h3>

              <p>
                I follow a structured approach to
                understand data, clean and analyze it,
                create meaningful visualizations,
                and turn insights into practical
                solutions.
              </p>
            </div>

            <div className="asif-about-approach-steps">
              {approach.map(({ title, Icon }) => (
                <div key={title}>
                  <Icon />
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* THREE ABOUT CARDS */}
        <div className="asif-about-cards">

          {/* PERSONAL BIO */}
          <article className="asif-about-card">
            <div className="asif-about-card-heading">
              <UserRound />
              <div>
                <h3>Personal Bio</h3>
                <small>GET TO KNOW ME</small>
              </div>
            </div>

            <p className="asif-about-bio">
              I am Mohammed Asif, a Data Analyst
              passionate about transforming raw data
              into meaningful business insights.
              I enjoy exploring datasets, identifying
              patterns, and solving real-world problems
              through analytical thinking.
            </p>

            <div className="asif-about-qualities">
              <span>
                <Brain /> Analytical Thinking
              </span>
              <span>
                <Search /> Attention to Detail
              </span>
              <span>
                <Settings /> Problem Solving
              </span>
              <span>
                <BookOpenIcon /> Continuous Learning
              </span>
            </div>
          </article>

          {/* WHAT I BRING */}
          <article className="asif-about-card">
            <div className="asif-about-card-heading">
              <Target />
              <div>
                <h3>What I Bring</h3>
                <small>PROFESSIONAL STRENGTHS</small>
              </div>
            </div>

            <div className="asif-about-info-list">
              <div>
                <Brain />
                <span>
                  <strong>Analytical Thinking</strong>
                  <small>
                    Understanding patterns and insights
                  </small>
                </span>
              </div>

              <div>
                <Settings />
                <span>
                  <strong>Problem Solving</strong>
                  <small>
                    Finding practical solutions
                  </small>
                </span>
              </div>

              <div>
                <Search />
                <span>
                  <strong>Attention to Detail</strong>
                  <small>
                    Maintaining accuracy and clarity
                  </small>
                </span>
              </div>

              <div>
                <TrendingUp />
                <span>
                  <strong>Business Understanding</strong>
                  <small>
                    Connecting insights with decisions
                  </small>
                </span>
              </div>
            </div>
          </article>

          {/* CAREER FOCUS */}
          <article className="asif-about-card">
            <div className="asif-about-card-heading">
              <TrendingUp />
              <div>
                <h3>Career Focus</h3>
                <small>MY PROFESSIONAL DIRECTION</small>
              </div>
            </div>

            <div className="asif-about-info-list">
              <div>
                <Database />
                <span>
                  <strong>Data-Driven Decisions</strong>
                  <small>
                    Turning information into action
                  </small>
                </span>
              </div>

              <div>
                <BarChart3 />
                <span>
                  <strong>Business Intelligence</strong>
                  <small>
                    Supporting better business outcomes
                  </small>
                </span>
              </div>

              <div>
                <Target />
                <span>
                  <strong>Practical Analytics</strong>
                  <small>
                    Solving meaningful problems
                  </small>
                </span>
              </div>

              <div>
                <BookOpenIcon />
                <span>
                  <strong>Continuous Growth</strong>
                  <small>
                    Learning and improving consistently
                  </small>
                </span>
              </div>
            </div>
          </article>
        </div>

        {/* EDUCATION */}
        <div className="asif-about-education">
          <div className="asif-about-card-heading">
            <GraduationCap />
            <div>
              <h3>Education & Learning</h3>
              <small>ACADEMIC BACKGROUND</small>
            </div>
          </div>

          <div className="asif-about-education-grid">
            <div>
              <strong>Academic Background</strong>
              <p>
                Education details to be confirmed
              </p>
            </div>

            <div>
              <strong>Practical Learning</strong>
              <p>
                Applying analytical concepts through
                projects and data exploration.
              </p>
            </div>

            <div>
              <strong>Continuous Learning</strong>
              <p>
                Developing analytical, visualization,
                and problem-solving capabilities.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function BookOpenIcon() {
  return <BookOpen />;
}

export default About;
