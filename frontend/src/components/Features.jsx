import "./Features.css";
import { FaRobot, FaBook, FaCalendarAlt } from "react-icons/fa";

function Features() {
  return (
    <section className="features" id="features">
      <h2>Key Features</h2>

      <div className="feature-container">

        <div className="feature-card">
            <FaBook />
          <h3>AI Assistance</h3>
          <p>Get instant AI-powered responses for your questions.</p>
        </div>

        <div className="feature-card">
            <FaCalendarAlt />
          <h3>Student Guidance</h3>
          <p>Receive helpful guidance,learning tips and support.</p>
        </div>

        <div className="feature-card">
          <FaRobot />
          <h3>24/7 Availability</h3>
          <p>Available anytime to assist students.</p>
        </div>

      </div>
    </section>
  );
}

export default Features;