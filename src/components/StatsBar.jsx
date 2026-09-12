import {
  Database,
  BarChart3,
  TrendingUp,
  BriefcaseBusiness,
} from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Database,
    value: "10+",
    label: "Datasets Analyzed",
  },
  {
    id: 2,
    icon: BarChart3,
    value: "3+",
    label: "Interactive Dashboards",
  },
  {
    id: 3,
    icon: TrendingUp,
    value: "99%",
    label: "Accuracy in Data Cleaning",
  },
  {
    id: 4,
    icon: BriefcaseBusiness,
    value: "Business",
    label: "Focused Solutions",
  },
];

function StatsBar() {
  return (
    <section className="stats-section" aria-label="Data analysis statistics">
      <div className="stats-bar">
        {stats.map(({ id, icon: Icon, value, label }) => (
          <div className="stat-item" key={id}>
            <div className="stat-icon">
              <Icon size={26} strokeWidth={1.8} />
            </div>

            <div className="stat-content">
              <h3>{value}</h3>
              <p>{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsBar;