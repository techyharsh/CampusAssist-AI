import "./Hero.css";
import { FaRobot, FaGraduationCap } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          <FaGraduationCap className="icon" />
          CampusAssist AI
        </h1>

        <h2>AI Chatbot for Student Support Services</h2>

        <p>
          Get instant answers to academic, admission, examination,
          scholarship and campus related queries anytime.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            <FaRobot /> Start Chat
          </button>

          <button className="secondary-btn">
            Learn More
          </button>
        </div>

      </div>

    </section>
  );
}

export default Hero;