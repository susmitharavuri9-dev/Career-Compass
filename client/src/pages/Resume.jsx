import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Resume() {
  const [file, setFile] = useState(null);

  const uploadResume = async () => {
    if (!file) {
      alert("Please select a PDF file.");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("resume", file);

      const res = await axios.post(
        "http://localhost:5000/api/profile/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(res.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Upload Failed");
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1>📄 Resume Upload</h1>

        <br />

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <br />
        <br />

        <button onClick={uploadResume}>
          Upload Resume
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Resume;