import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg("");
    setSuccessMsg("");
  };

  const validate = () => {
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMsg("Please enter your full name (at least 2 characters).");
      return false;
    }
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setErrorMsg("Please enter a valid email address.");
      return false;
    }
    if (!formData.password || formData.password.length < 6) {
      setErrorMsg("Password must be at least 6 characters long.");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return false;
    }
    if (!agree) {
      setErrorMsg("Please agree to the Terms and Privacy Policy.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    if (!validate()) return;

    setLoading(true);

    try {
      await API.post("/users/register", {
        name: formData.name.trim(),
        email: formData.email.toLowerCase(),
        password: formData.password,
      });

      setSuccessMsg("Account created! Redirecting to sign in...");
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      setErrorMsg(
        error.response?.data?.message || "Registration failed. Please try again."
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
          <p className="auth-tagline">Create your account</p>
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
            <label>Full Name</label>
            <input
              className={`input ${errorMsg && formData.name.trim().length < 2 ? "input-error" : ""}`}
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </div>

          <div className="field">
            <label>Email Address</label>
            <input
              className={`input ${errorMsg && !emailRegex.test(formData.email) ? "input-error" : ""}`}
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
                className={`input ${errorMsg && formData.password.length < 6 ? "input-error" : ""}`}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="At least 6 characters"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
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

          <div className="field">
            <label>Confirm Password</label>
            <input
              className={`input ${errorMsg && formData.confirmPassword && formData.password !== formData.confirmPassword ? "input-error" : ""}`}
              type="password"
              name="confirmPassword"
              placeholder="Re-enter password"
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
            />
          </div>

          <label className={`check terms-check ${errorMsg && !agree ? "check-error" : ""}`}>
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => {
                setAgree(e.target.checked);
                if (e.target.checked) setErrorMsg("");
              }}
            />
            I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
          </label>

          <button className="btn-primary" type="submit" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner" aria-hidden="true"></span>
                <span>Creating Account</span>
              </>
            ) : (
              <span>Create Account</span>
            )}
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <div className="social-row">
            <button type="button" className="btn-social" onClick={() => alert("Google signup coming soon")}>
              Google
            </button>
            <button type="button" className="btn-social" onClick={() => alert("GitHub signup coming soon")}>
              GitHub
            </button>
          </div>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/" className="accent-link">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
