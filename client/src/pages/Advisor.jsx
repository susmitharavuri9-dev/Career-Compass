import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";
import Footer from "../components/Footer";

function Advisor() {

    const [skills, setSkills] = useState("");
    const [interest, setInterest] = useState("");
    const [result, setResult] = useState("");

    const getAdvice = () => {

        if (
            skills.toLowerCase().includes("java") ||
            skills.toLowerCase().includes("spring")
        ) {

            setResult(`
Recommended Career:
• Java Backend Developer

Recommended Skills:
• Spring Boot
• Microservices
• MySQL
• REST API

Recommended Companies:
• Infosys
• TCS
• Cognizant
• Capgemini
            `);

        }
        else if (
            skills.toLowerCase().includes("react") ||
            skills.toLowerCase().includes("javascript")
        ) {

            setResult(`
Recommended Career:
• Frontend Developer

Learn:
• React
• Redux
• Tailwind CSS
• TypeScript

Companies:
• Accenture
• Deloitte
• IBM
            `);

        }
        else {

            setResult(`
Recommended Career:
• Full Stack Developer

Learn:
• Java
• React
• Node.js
• MongoDB
• SQL
            `);

        }

    };

    return (

        <>
            <Navbar />

            <div className="dashboard">

                <h1>🤖 AI Career Advisor</h1>

                <br />

                <input
                    type="text"
                    placeholder="Enter your skills"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    style={{
                        width: "350px",
                        padding: "10px"
                    }}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Enter your interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    style={{
                        width: "350px",
                        padding: "10px"
                    }}
                />

                <br /><br />

                <button onClick={getAdvice}>
                    Get Career Advice
                </button>

                <br /><br />

                <textarea
                    value={result}
                    readOnly
                    rows="12"
                    cols="60"
                />

            </div>
            <Footer />

        </>

    );

}

export default Advisor;