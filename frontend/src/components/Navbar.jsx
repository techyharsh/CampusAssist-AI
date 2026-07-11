import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🎓 CampusAssist AI</div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#home">
  <button className="chat-btn">Start Chat</button>
</a>
    </nav>
  );
}

export default Navbar;