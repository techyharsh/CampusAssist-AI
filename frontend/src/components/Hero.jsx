import { Link } from "react-router-dom";
import "./Hero.css";
import { FaRobot, FaGraduationCap } from "react-icons/fa";

function Hero() {
  return (
    
    <section className="hero" id="home">

      <div className="hero-content">

        <h1>
          <FaGraduationCap className="icon" />
          CampusAssist AI
        </h1>

        <h2>AI Chatbot for Student Support Services</h2>

        <p>
          Get instant AI-powered assistance for your learning,
          career and everyday student needs.
        </p>

        <div className="hero-buttons">

  <Link to="/login">
    <button className="primary-btn">
      <FaRobot /> Start Chat
    </button>
  </Link>

  <a href="#features">
    <button className="secondary-btn">
      Learn More
    </button>
  </a>

</div>

      </div>

    </section>
  );
}

export default Hero;