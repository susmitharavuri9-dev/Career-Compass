import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Dashboard() {
    const navigate = useNavigate();

    const stats = [
        { icon: "👤", label: "Profile", value: "Active", trend: "✓ Complete", trendClass: "up" },
        { icon: "📄", label: "Resume", value: "Uploaded", trend: "★ Verified", trendClass: "up" },
        { icon: "💼", label: "Job Matches", value: "24", trend: "↑ 5 new", trendClass: "up" },
        { icon: "📚", label: "Courses", value: "12", trend: "4 in progress", trendClass: "neutral" },
    ];

    const modules = [
        {
            icon: "👤",
            title: "My Profile",
            desc: "Build a professional profile showcasing your education, skills, certifications and achievements.",
            tags: ["Personal Info", "Education", "Skills"],
            path: "/profile",
        },
        {
            icon: "📄",
            title: "Resume Builder",
            desc: "Upload, manage and preview your resume. Get AI-powered suggestions to stand out.",
            tags: ["Upload", "Preview", "AI Tips"],
            path: "/resume",
        },
        {
            icon: "💼",
            title: "Job Explorer",
            desc: "Discover personalized job recommendations from top companies matched to your profile.",
            tags: ["24 Matches", "Top MNCs", "Apply Now"],
            path: "/jobs",
        },
        {
            icon: "📚",
            title: "Skill Courses",
            desc: "Upskill with handpicked courses from industry-leading platforms like Coursera, NPTEL.",
            tags: ["12 Courses", "Certified", "Free"],
            path: "/courses",
        },
        {
            icon: "🤖",
            title: "AI Career Advisor",
            desc: "Get personalized career guidance, roadmap suggestions and skill recommendations from AI.",
            tags: ["24/7 Help", "Smart Tips", "Roadmap"],
            path: "/advisor",
        },
        {
            icon: "🎯",
            title: "Achievements",
            desc: "Track your milestones, completed certifications and career progress all in one place.",
            tags: ["Milestones", "Badges", "Rewards"],
            path: "/profile",
        },
    ];

    const progress = [
        { label: "Profile Completeness", icon: "👤", percent: 85 },
        { label: "Skills Mastered", icon: "⚡", percent: 62 },
        { label: "Resume Quality", icon: "📄", percent: 78 },
        { label: "Interview Prep", icon: "🎤", percent: 40 },
    ];

    return (
        <>
            <Navbar />

            <div className="dashboard">

                <div className="page-header animate-fadeInUp">
                    <h1 className="page-title">🎓 Welcome to Career Compass AI</h1>
                    <p className="page-subtitle">Your AI-powered personalized career guidance platform — navigate your path to success.</p>
                </div>

                <div className="stats-grid">
                    {stats.map((s, i) => (
                        <div
                            key={i}
                            className={`stat-card animate-fadeInUp delay-${(i + 1) * 100}`}
                        >
                            <div className="stat-icon">{s.icon}</div>
                            <div className="stat-label">{s.label}</div>
                            <p className="stat-value">{s.value}</p>
                            <span className={`stat-trend ${s.trendClass}`}>{s.trend}</span>
                        </div>
                    ))}
                </div>

                <h2 className="section-title animate-fadeInUp delay-100">
                    <span className="icon">🧭</span> Quick Modules
                </h2>

                <div className="cards">
                    {modules.map((m, i) => (
                        <div
                            key={i}
                            className={`card animate-popIn delay-${((i % 4) + 1) * 100}`}
                        >
                            <div className="card-icon">{m.icon}</div>
                            <h3>{m.title}</h3>
                            <p>{m.desc}</p>
                            <div className="card-tags">
                                {m.tags.map((t, j) => (
                                    <span key={j} className="card-tag">{t}</span>
                                ))}
                            </div>
                            <button
                                className="card-button"
                                onClick={() => navigate(m.path)}
                            >
                                <span>Explore</span>
                                <span>→</span>
                            </button>
                        </div>
                    ))}
                </div>

                <h2 className="section-title animate-fadeInUp delay-200">
                    <span className="icon">📈</span> Your Progress
                </h2>

                <div className="two-col">
                    <div className="progress-card animate-fadeInUp delay-300">
                        <div className="goal-header">
                            <span className="goal-emoji">🎯</span>
                            <h3 style={{ margin: 0 }}>Career Readiness Score</h3>
                        </div>
                        <div className="progress-list">
                            {progress.map((p, i) => (
                                <div key={i} className="progress-item">
                                    <div className="progress-label-row">
                                        <span className="progress-label">
                                            <span>{p.icon}</span>
                                            {p.label}
                                        </span>
                                        <span className="progress-percent">{p.percent}%</span>
                                    </div>
                                    <div className="progress-track">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${p.percent}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="goal-card animate-fadeInUp delay-400">
                        <div className="goal-header">
                            <span className="goal-emoji">🏆</span>
                            <h3 style={{ margin: 0 }}>Your Achievements</h3>
                        </div>
                        <ul className="checklist">
                            <li>
                                <span className="check">✔</span>
                                Profile successfully created with all academic details.
                            </li>
                            <li>
                                <span className="check">✔</span>
                                Resume uploaded and verified by our quality system.
                            </li>
                            <li>
                                <span className="check">✔</span>
                                24 matching job opportunities found for your skill-set.
                            </li>
                            <li>
                                <span className="check">✔</span>
                                AI Career Advisor is ready to guide your next steps.
                            </li>
                            <li>
                                <span className="check">✔</span>
                                12 recommended skill-courses curated just for you.
                            </li>
                            <li>
                                <span className="check">✔</span>
                                Placement preparation guide unlocked — keep going!
                            </li>
                        </ul>
                    </div>
                </div>

                <h2 className="section-title animate-fadeInUp delay-300">
                    <span className="icon">🚀</span> Career Goal
                </h2>
                <div className="goal-card animate-fadeInUp delay-400">
                    <p className="goal-text">
                        🎯 Short-Term: Improve your technical fundamentals, complete industry-recognized
                        certifications, and build 2-3 showcase projects to strengthen your portfolio.
                        <br /><br />
                        ✨ Long-Term: Master full-stack development, prepare for mock interviews,
                        participate in hackathons, and crack top-tier placements with a package you deserve.
                        Career Compass will guide you every step of the way!
                    </p>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
