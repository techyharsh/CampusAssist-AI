import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🎓 CampusAssist AI</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Features</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="chat-btn">Start Chat</button>
    </nav>
  );
}

export default Navbar;