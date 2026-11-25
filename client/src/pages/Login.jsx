import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API, { authHelpers } from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!formData.email.trim()) {
      setErrorMsg("Please enter your email address.");
      return;
    }
    if (!formData.password) {
      setErrorMsg("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      const res = await API.post("/users/login", formData);
      authHelpers.setAuth(res.data.token, res.data.user);
      setSuccessMsg(res.data.message || "Login successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 600);
    } catch (error) {
      setErrorMsg(
        error.response?.data?.message ||
          "Login failed. Please check your credentials and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container animate-fadeInUp">
        <div className="auth-header">
          <div className="auth-logo">
            <div className="auth-logo-mark">CC</div>
          </div>
          <h1>Career Compass</h1>
          <p className="auth-tagline">Sign in to continue</p>
        </div>

        {successMsg && (
          <div className="auth-alert auth-alert-success">
            <span>{successMsg}</span>
          </div>
        )}

        {errorMsg && (
          <div className="auth-alert auth-alert-error">
            <span>{errorMsg}</span>
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label>Email Address</label>
            <input
              className={`input ${errorMsg && !formData.email.trim() ? "input-error" : ""}`}
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className="field">
            <label>Password</label>
            <div className="input-wrap">
              <input
                className={`input ${errorMsg && !formData.password ? "input-error" : ""}`}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="input-toggle"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="row-between">
            <label className="check">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember me
            </label>
            <Link to="#" className="muted-link">Forgot password?</Link>
          </div>

          <button className="btn-primary" type="submit" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner" aria-hidden="true"></span>
                <span>Signing In</span>
              </>
            ) : (
              <span>Sign In</span>
            )}
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <div className="social-row">
            <button type="button" className="btn-social" onClick={() => alert("Google login coming soon")}>
              Google
            </button>
            <button type="button" className="btn-social" onClick={() => alert("GitHub login coming soon")}>
              GitHub
            </button>
          </div>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/register" className="accent-link">Create one</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
