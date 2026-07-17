import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
  🎓 CampusAssist AI
</Link>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <Link to="/login">
  <button className="chat-btn">Start Chat</button>
</Link>
    </nav>
  );
}

export default Navbar;