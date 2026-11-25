import { useEffect, useState } from "react";
import API, { authHelpers } from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  const [form, setForm] = useState({
    name: "",
    college: "",
    branch: "",
    graduationYear: "",
    skills: "",
    certifications: ""
  });

  useEffect(() => {
    let ignore = false;
    (async function loadProfile() {
      try {
        const res = await API.get("/profile");
        if (!ignore) {
          setForm({
            name: res.data.name || "",
            college: res.data.college || "",
            branch: res.data.branch || "",
            graduationYear: res.data.graduationYear || "",
            skills: res.data.skills ? res.data.skills.join(", ") : "",
            certifications: res.data.certifications
              ? res.data.certifications.join(", ")
              : ""
          });
        }
      } catch (error) {
        if (!ignore) console.log(error);
      }
    })();
    return () => { ignore = true; };
  }, []);

  const updateProfile = async () => {
    try {
      await API.put("/profile", {
        ...form,
        skills: form.skills.split(",").map(s => s.trim()),
        certifications: form.certifications
          .split(",")
          .map(c => c.trim())
      });

      const savedUser = authHelpers.getUser();
      if (savedUser) {
        authHelpers.setAuth(localStorage.getItem("token"), {
          ...savedUser,
          name: form.name || savedUser.name,
          college: form.college || savedUser.college,
          branch: form.branch || savedUser.branch,
          graduationYear: form.graduationYear || savedUser.graduationYear,
        });
      }

      alert("Profile Updated Successfully");

    } catch (error) {
      alert("Update Failed");
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="profile-shell">
        <div className="profile-card">
          <h1>👤 My Profile</h1>

          <div className="profile-grid">
            <input
              className="profile-input"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              className="profile-input"
              type="text"
              placeholder="College"
              value={form.college}
              onChange={(e) =>
                setForm({ ...form, college: e.target.value })
              }
            />

            <input
              className="profile-input"
              type="text"
              placeholder="Branch"
              value={form.branch}
              onChange={(e) =>
                setForm({ ...form, branch: e.target.value })
              }
            />

            <input
              className="profile-input"
              type="text"
              placeholder="Graduation Year"
              value={form.graduationYear}
              onChange={(e) =>
                setForm({
                  ...form,
                  graduationYear: e.target.value
                })
              }
            />

            <input
              className="profile-input"
              type="text"
              placeholder="Skills (comma separated)"
              value={form.skills}
              onChange={(e) =>
                setForm({ ...form, skills: e.target.value })
              }
            />

            <input
              className="profile-input"
              type="text"
              placeholder="Certifications (comma separated)"
              value={form.certifications}
              onChange={(e) =>
                setForm({
                  ...form,
                  certifications: e.target.value
                })
              }
            />
          </div>

          <button
            className="auth-button"
            style={{ marginTop: "22px", width: "100%" }}
            onClick={updateProfile}
          >
            Save Profile
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;