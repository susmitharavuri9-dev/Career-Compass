import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>🎓 Career Compass</h2>

            <Link to="/dashboard">🏠 Dashboard</Link>

            <Link to="/profile">👤 Profile</Link>

            <Link to="/resume">📄 Resume</Link>

            <Link to="/jobs">💼 Jobs</Link>

            <Link to="/advisor">🤖 AI Advisor</Link>

            <Link to="/">🚪 Logout</Link>
        </div>
    );
}

export default Sidebar;