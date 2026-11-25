import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";
import Footer from "../components/Footer";
import { useState } from "react";

function Courses() {
    const [enrolled, setEnrolled] = useState(new Set([0, 1]));

    const courses = [
        {
            title: "Java Full Stack Development",
        platform: "Infosys Springboard",
        duration: "12 Weeks",
        level: "Intermediate",
        rating: 4.8,
        students: 12450,
        price: "Free",
        progress: 65,
        tags: ["Java", "Spring", "Spring Boot", "MySQL", "REST API"],
        category: "Backend",
        icon: "☕",
        color: "from-orange-500",
        },
        {
            title: "Complete React JS - Zero to Mastery",
        platform: "Coursera",
        duration: "8 Weeks",
        level: "Beginner",
        rating: 4.9,
        students: 45230,
        price: "Free",
        progress: 40,
        tags: ["React", "Hooks", "Redux", "Router", "TypeScript"],
        category: "Frontend",
        icon: "⚛️",
        color: "from-sky-500",
        },
        {
            title: "MongoDB Developer Learning Path",
            platform: "MongoDB University",
            duration: "6 Weeks",
            level: "Beginner",
            rating: 4.7,
            students: 8900,
            price: "Free",
            progress: 0,
            tags: ["MongoDB", "NoSQL", "Aggregation", "Indexes"],
            category: "Database",
            icon: "🍃",
            color: "from-green-500",
        },
        {
            title: "Data Structures & Algorithms",
            platform: "NPTEL",
            duration: "10 Weeks",
            level: "Intermediate",
            rating: 4.6,
            students: 25600,
            price: "Free",
            progress: 22,
            tags: ["DSA", "Arrays", "Trees", "Graphs", "DP"],
            category: "Fundamentals",
            icon: "🧮",
            color: "from-violet-500",
        },
        {
            title: "Full Stack Web Development",
            platform: "Udemy",
            duration: "16 Weeks",
            level: "Beginner",
            rating: 4.9,
            students: 68000,
            price: "₹499",
            progress: 0,
            tags: ["HTML", "CSS", "JS", "Node", "MongoDB"],
            category: "Full Stack",
            icon: "🌐",
            color: "from-cyan-500",
        },
        {
            title: "Python Programming Essentials",
            platform: "Cisco Networking Academy",
            duration: "4 Weeks",
            level: "Beginner",
            rating: 4.8,
            students: 18700,
            price: "Free",
            progress: 0,
            tags: ["Python", "OOP", "Libraries"],
            category: "Backend",
            icon: "🐍",
            color: "from-blue-500",
        },
        {
            title: "AWS Cloud Practitioner",
            platform: "AWS Skill Builder",
            duration: "5 Weeks",
            level: "Beginner",
            rating: 4.7,
            students: 32100,
            price: "Free",
            progress: 0,
            tags: ["AWS", "EC2", "S3", "IAM", "Cloud"],
            category: "Cloud",
            icon: "☁️",
            color: "from-amber-500",
        },
        {
            title: "System Design Fundamentals",
            platform: "Educative",
            duration: "7 Weeks",
            level: "Advanced",
            rating: 4.9,
            students: 9200,
            price: "₹899",
            progress: 0,
            tags: ["Design", "Scalability", "HLD", "LLD"],
            category: "Advanced",
            icon: "🏗️",
            color: "from-pink-500",
        },
    ];

    const toggleEnroll = (idx) => {
        const next = new Set(enrolled);
        if (next.has(idx)) next.delete(idx);
        else next.add(idx);
        setEnrolled(next);
    };

    const renderStars = (rating) => {
        const full = Math.floor(rating);
        const half = rating - full >= 0.5;
        return (
            <span style={{ color: "#f59e0b", fontSize: "0.9rem", letterSpacing: "2px" }}>
                {"★".repeat(full)}
                {half ? "½" : ""}
                <span style={{ color: "#d1d5db" }}>{"★".repeat(5 - full - (half ? 1 : 0))}</span>
            </span>
        );
    };

    return (
        <>
            <Navbar />

            <div className="dashboard">
                <div className="page-header animate-fadeInUp">
                    <h1 className="page-title">📚 Recommended Courses</h1>
                    <p className="page-subtitle">
                        Handpicked courses from top platforms — upskill, get certified, supercharge your career.
                    </p>
                </div>

                <div className="cards">
                    {courses.map((course, index) => (
                        <div key={index} className={`card animate-popIn delay-${((index % 4) + 1) * 100}`} style={{ textAlign: "left" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                                <div className="card-icon" style={{
                                    width: "56px",
                                    height: "56px",
                                    fontSize: "1.7rem",
                                    marginBottom: 0,
                                    background: "linear-gradient(145deg, rgba(139,92,246,0.18), rgba(236,72,153,0.14))",
                                }}>
                                    {course.icon}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                        <span className="card-tag" style={{
                                            background: "rgba(139,92,246,0.12)",
                                            color: "var(--accent)",
                                        }}>
                                            {course.category}
                                        </span>
                                        <span className="card-tag" style={{
                                            background: course.price === "Free"
                                                ? "rgba(16,185,129,0.12)"
                                                : "rgba(245,158,11,0.14)",
                                            color: course.price === "Free" ? "var(--success)" : "var(--warning)",
                                        }}>
                                            {course.price}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <h3 style={{ marginBottom: "6px", lineHeight: 1.35 }}>{course.title}</h3>

                            <p style={{ color: "var(--primary-dark)", fontWeight: 700, marginBottom: "10px", fontSize: "0.93rem" }}>
                                <span>🎓</span> {course.platform}
                            </p>

                            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", fontSize: "0.85rem", color: "var(--text-muted)", flexWrap: "wrap" }}>
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                                    <span>⏱️</span> {course.duration}
                                </span>
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                                    <span>📶</span> {course.level}
                                </span>
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                                    <span>👥</span> {(course.students / 1000).toFixed(1)}k
                                </span>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                                {renderStars(course.rating)}
                                <span style={{ fontWeight: 800, color: "var(--text-primary)", fontSize: "0.95rem" }}>{course.rating}</span>
                                <span style={{ color: "var(--text-light)", fontSize: "0.85rem" }}>({Math.round(course.students).toLocaleString()} ratings)</span>
                            </div>

                            <div className="card-tags">
                                {course.tags.map((t, j) => (
                                    <span key={j} className="card-tag">{t}</span>
                                ))}
                            </div>

                            {enrolled.has(index) && (
                                <div style={{ marginBottom: "14px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", fontWeight: 700, marginBottom: "6px" }}>
                                        <span style={{ color: "var(--text-secondary)" }}>Your Progress</span>
                                        <span style={{ color: "var(--primary-dark)" }}>{course.progress}%</span>
                                    </div>
                                    <div className="progress-track">
                                        <div className="progress-fill" style={{ width: `${course.progress}%` }} />
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={() => toggleEnroll(index)}
                                className="card-button"
                                style={{
                                    background: enrolled.has(index)
                                        ? "linear-gradient(135deg,#10b981,#059669)"
                                        : "var(--button-gradient)",
                                    boxShadow: enrolled.has(index)
                                        ? "0 8px 20px rgba(16,185,129,0.35)"
                                        : "0 8px 20px rgba(99,102,241,0.28)",
                                }}
                            >
                                <span>{enrolled.has(index) ? "✓ Continue Learning" : "Enroll Now"}</span>
                                <span>{enrolled.has(index) ? "📖" : "→"}</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Courses;
