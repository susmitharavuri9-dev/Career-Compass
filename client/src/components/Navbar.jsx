import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { path: "/dashboard", label: "Dashboard", icon: "🏠" },
        { path: "/profile", label: "Profile", icon: "👤" },
        { path: "/resume", label: "Resume", icon: "📄" },
        { path: "/jobs", label: "Jobs", icon: "💼" },
        { path: "/courses", label: "Courses", icon: "📚" },
        { path: "/advisor", label: "AI Advisor", icon: "🤖" },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <Link to="/dashboard" className="navbar-brand">
                    <span className="brand-logo animate-float">🎓</span>
                    <span className="brand-text">
                        Career <span className="brand-accent">Compass</span>
                    </span>
                </Link>

                <div className="nav-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${isActive(link.path) ? "active" : ""}`}
                        >
                            <span className="nav-icon">{link.icon}</span>
                            <span className="nav-label">{link.label}</span>
                        </Link>
                    ))}
                </div>

                <button className="logout-btn" onClick={handleLogout}>
                    <span className="logout-icon">🚪</span>
                    <span className="logout-text">Logout</span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
