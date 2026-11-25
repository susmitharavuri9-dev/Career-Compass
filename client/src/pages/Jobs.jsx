import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";
import Footer from "../components/Footer";
import { useState } from "react";

function Jobs() {
    const [applied, setApplied] = useState(new Set());
    const [filter, setFilter] = useState("all");

    const jobs = [
        {
            title: "Java Backend Developer",
            company: "Infosys",
            location: "Hyderabad, Telangana",
            salary: "₹4,00,000 - ₹6,50,000",
            type: "Full Time",
            level: "Entry Level",
            posted: "2 days ago",
            applicants: 124,
            tags: ["Java", "Spring Boot", "MySQL", "Microservices"],
            match: 94,
            logo: "🏢",
        },
        {
            title: "MERN Stack Developer",
            company: "TCS",
            location: "Bangalore, Karnataka",
            salary: "₹4,50,000 - ₹7,00,000",
            type: "Full Time",
            level: "Entry Level",
            posted: "1 day ago",
            applicants: 215,
            tags: ["React", "Node.js", "MongoDB", "Express"],
            match: 91,
            logo: "🏛️",
        },
        {
            title: "Software Engineer - Frontend",
            company: "Wipro",
            location: "Chennai, Tamil Nadu",
            salary: "₹3,80,000 - ₹6,00,000",
            type: "Full Time",
            level: "Fresher",
            posted: "3 days ago",
            applicants: 187,
            tags: ["HTML", "CSS", "JavaScript", "React"],
            match: 88,
            logo: "🌐",
        },
        {
            title: "Frontend Developer",
            company: "Accenture",
            location: "Pune, Maharashtra",
            salary: "₹5,00,000 - ₹8,00,000",
            type: "Full Time",
            level: "Mid Level",
            posted: "5 hours ago",
            applicants: 87,
            tags: ["React", "TypeScript", "Tailwind", "Redux"],
            match: 96,
            logo: "⚙️",
        },
        {
            title: "Full Stack Developer",
            company: "Cognizant",
            location: "Hyderabad, Telangana",
            salary: "₹6,00,000 - ₹9,00,000",
            type: "Full Time",
            level: "Entry Level",
            posted: "4 days ago",
            applicants: 302,
            tags: ["Java", "React", "SQL", "Node.js"],
            match: 85,
            logo: "🧠",
        },
        {
            title: "Data Analyst Intern",
            company: "Capgemini",
            location: "Mumbai, Maharashtra",
            salary: "₹2,50,000 - ₹4,00,000",
            type: "Internship",
            level: "Fresher",
            posted: "6 hours ago",
            applicants: 45,
            tags: ["Python", "SQL", "Excel", "Power BI"],
            match: 82,
            logo: "📊",
        },
        {
            title: "Junior React Developer",
            company: "Deloitte",
            location: "Gurugram, Haryana",
            salary: "₹5,50,000 - ₹8,50,000",
            type: "Full Time",
            level: "Entry Level",
            posted: "1 week ago",
            applicants: 156,
            tags: ["React", "Next.js", "Git", "REST API"],
            match: 90,
            logo: "🔬",
        },
        {
            title: "AWS Cloud Engineer",
            company: "IBM",
            location: "Remote",
            salary: "₹6,50,000 - ₹10,00,000",
            type: "Full Time",
            level: "Mid Level",
            posted: "2 weeks ago",
            applicants: 98,
            tags: ["AWS", "Docker", "Kubernetes", "DevOps"],
            match: 78,
            logo: "☁️",
        },
    ];

    const filteredJobs = jobs.filter((j) => {
        if (filter === "all") return true;
        if (filter === "freshers") return j.level === "Fresher";
        if (filter === "internship") return j.type === "Internship";
        if (filter === "remote") return j.location.toLowerCase().includes("remote");
        return true;
    });

    const toggleApply = (idx) => {
        const next = new Set(applied);
        if (next.has(idx)) next.delete(idx);
        else next.add(idx);
        setApplied(next);
    };

    const filters = [
        { key: "all", label: "All Jobs", icon: "💼" },
        { key: "freshers", label: "Freshers", icon: "🎓" },
        { key: "internship", label: "Internships", icon: "🌟" },
        { key: "remote", label: "Remote", icon: "🏡" },
    ];

    return (
        <>
            <Navbar />

            <div className="dashboard">
                <div className="page-header animate-fadeInUp">
                    <h1 className="page-title">💼 Recommended Jobs</h1>
                    <p className="page-subtitle">
                        {filteredJobs.length} curated opportunities matched to your profile — apply and land your dream job!
                    </p>
                </div>

                <div className="cards" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", marginBottom: "28px" }}>
                    {filters.map((f) => (
                    <button
                        key={f.key}
                        onClick={() => setFilter(f.key)}
                        className={`card animate-fadeInUp delay-100`}
                        style={{
                            cursor: "pointer",
                            background: filter === f.key ? "var(--button-gradient)" : "var(--card-gradient)",
                            color: filter === f.key ? "white" : "var(--text-primary)",
                            border: filter === f.key ? "2px solid transparent" : "1px solid var(--border-light)",
                            padding: "16px",
                            textAlign: "left",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            borderRadius: "var(--radius-lg)",
                            boxShadow: filter === f.key ? "0 8px 22px rgba(99,102,241,0.35)" : "var(--shadow-sm)",
                            justifyContent: "center",
                        }}
                    >
                        <span style={{ fontSize: "1.3rem" }}>{f.icon}</span>
                        {f.label}
                    </button>
                ))}
                </div>

                <div className="cards">
                    {filteredJobs.map((job, index) => (
                    <div key={index} className={`card animate-popIn delay-${((index % 4) + 1) * 100}`} style={{ textAlign: "left" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                            <div className="card-icon" style={{ width: "54px", height: "54px", fontSize: "1.6rem", marginBottom: 0 }}>
                                {job.logo}
                            </div>
                            <div style={{ textAlign: "right" }}>
                                <div style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "4px",
                                    padding: "4px 10px",
                                    borderRadius: "var(--radius-full)",
                                    background: "rgba(16,185,129,0.12)",
                                    color: "var(--success)",
                                    fontSize: "0.78rem",
                                    fontWeight: 800,
                                }}>
                                    <span>🎯</span>
                                    {job.match}% Match
                                </div>
                            </div>
                        </div>

                        <h3 style={{ marginBottom: "4px" }}>{job.title}</h3>

                        <p style={{ color: "var(--primary-dark)", fontWeight: 700, marginBottom: "10px", fontSize: "0.95rem" }}>
                            <span>🏢</span> {job.company}
                        </p>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 14px", marginBottom: "14px", fontSize: "0.88rem" }}>
                            <div style={{ color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "6px" }}>
                                <span>📍</span> {job.location}
                            </div>
                            <div style={{ color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "6px" }}>
                                <span>💰</span> <strong style={{ color: "var(--text-primary)" }}>{job.salary}</strong>
                            </div>
                            <div style={{ color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "6px" }}>
                                <span>⏰</span> {job.posted}
                            </div>
                            <div style={{ color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "6px" }}>
                                <span>👥</span> {job.applicants} applicants
                            </div>
                        </div>

                        <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
                            <span className="card-tag" style={{
                                background: job.type === "Full Time" ? "rgba(16,185,129,0.12)" : "rgba(245,158,11,0.14)",
                                color: job.type === "Full Time" ? "var(--success)" : "var(--warning)",
                            }}>
                                {job.type}
                            </span>
                            <span className="card-tag">{job.level}</span>
                        </div>

                        <div className="card-tags">
                            {job.tags.map((t, j) => (
                                <span key={j} className="card-tag">{t}</span>
                            ))}
                        </div>

                        <button
                            onClick={() => toggleApply(index)}
                            className="card-button"
                            style={{
                                background: applied.has(index)
                                    ? "linear-gradient(135deg,#10b981,#059669)"
                                    : "var(--button-gradient)",
                                boxShadow: applied.has(index)
                                    ? "0 8px 20px rgba(16,185,129,0.35)"
                                    : "0 8px 20px rgba(99,102,241,0.28)",
                            }}
                        >
                            <span>{applied.has(index) ? "✓ Applied" : "Apply Now"}</span>
                            <span>{applied.has(index) ? "🎉" : "→"}</span>
                        </button>
                    </div>
                ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Jobs;
