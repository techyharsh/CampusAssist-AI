import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

if (data.message === "Signup Successful") {
    setSuccess("Signup Successful ✅");
    setTimeout(() => {
        navigate("/login");
    }, 1500);
} else {
    alert(data.message);
}

    } catch (error) {
      alert("Backend Connection Failed");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSignup}>

        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {success && <p className="success-msg">{success}</p>}

        <button type="submit">
          Sign Up
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </form>
    </div>
  );
}

export default Signup;