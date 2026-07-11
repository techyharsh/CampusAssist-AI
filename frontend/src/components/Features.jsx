import "./Features.css";
import { FaRobot, FaBook, FaCalendarAlt } from "react-icons/fa";

function Features() {
  return (
    <section className="features" id="features">
      <h2>Key Features</h2>

      <div className="feature-container">

        <div className="feature-card">
            <FaBook />
          <h3>🎓 Academic Support</h3>
          <p>Get answers related to subjects, syllabus and study resources.</p>
        </div>

        <div className="feature-card">
            <FaCalendarAlt />
          <h3>📅 Exam Updates</h3>
          <p>Stay updated with exam dates, notices and important deadlines.</p>
        </div>

        <div className="feature-card">
          <FaRobot />
          <h3>💬 AI Chatbot</h3>
          <p>Ask campus-related questions anytime with instant responses.</p>
        </div>

      </div>
    </section>
  );
}

export default Features;