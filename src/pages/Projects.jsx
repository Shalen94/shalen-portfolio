import "./ProjectsHome.css";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "busEasy",
    title: "BusEasy",
    desc: "Smart rural bus ticket booking system.",
    tech: ["PHP", "MySQL","XAMPP", "Bootstrap" ],
  },
  {
    id: "cryptoScope",
    title: "CryptoScope",
    desc: "Real-time crypto price tracking dashboard.",
    tech: ["MongoDB","Express.js","React.js","Node.js", "CoinGecko API"],
  },
  {
    id: "taskify",
    title: "Taskify",
    desc: "AI-powered real-time task manager.",
    tech: [ "PostgreSQL", "React.js","Express.js","Node.js"],
  },
  {
    id: "skypulse",
    title: "SkyPulse",
    desc: "Real-time weather forecasting with maps, alerts, and location search.",
    tech: ["React", "Weather API", "GeoLocation"],
  },
];

export default function Projects() {
  return (
    <div className="projects-main-container" id="projects">
        <h1>Projects</h1>
        
        <div className="projects-container">
        {projects.map((p, index) => (
            <div
            className="project-card"
            key={p.id}
            style={{ animationDelay: `${index * 0.2}s` }}
            >
            <h2>{p.title}</h2>
            <p>{p.desc}</p>

            <div className="tech-stack">
                {p.tech.map((t) => (
                <span key={t}>{t}</span>
                ))}
            </div>

            <Link to={`/projects/${p.id}`} className="view-btn">
                View Details →
            </Link>
            </div>
        ))}
        </div>
    </div>
  );
}
