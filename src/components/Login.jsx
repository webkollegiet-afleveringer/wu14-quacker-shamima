import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../scss/Login.scss";

const Login = () => {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Load users from localStorage
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [
      { email: "test@mail.com", password: "1234" }
    ];
    setUsers(storedUsers);

    // auto-login if already logged in
    const loggedInUser = localStorage.getItem("userEmail");
    if (loggedInUser) {
      navigate("/");
    }
  }, [navigate]);

  // Save users whenever updated
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // ---------------- LOGIN ----------------
  const handleLogin = () => {
    const userExists = users.find(
      (u) => u.email === email && u.password === password
    );

    if (userExists) {
      setMessage("✅ Login successful!");
      localStorage.setItem("userEmail", email);

      setTimeout(() => {
        navigate("/");
      }, 800);
    } else {
      setMessage("❌ Wrong email or password");
    }
  };

  // ---------------- REGISTER ----------------
  const handleRegister = () => {
    if (password.length < 4) {
      setMessage("⚠️ Password must be at least 4 characters");
      return;
    }

    const userExists = users.find((u) => u.email === email);

    if (userExists) {
      setMessage("⚠️ User already exists");
      return;
    }

    const newUsers = [...users, { email, password }];
    setUsers(newUsers);

    setMessage("✅ Account created! You can now login.");
    setMode("login");
    setEmail("");
    setPassword("");
  };

  // ---------------- SUBMIT ----------------
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (!email || !password) {
      setMessage("⚠️ Please fill all fields");
      return;
    }

    if (mode === "login") {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        {/* HEADER */}
        <div className="login-header">
          <h1>{mode === "login" ? "Welcome back" : "Create account"}</h1>
          <p className="login-subtitle">
            {mode === "login"
              ? "Login to continue"
              : "Join our community"}
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="login-form">

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {mode === "login" && (
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
          )}

          <button type="submit" className="login-button">
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>

        {/* MESSAGE */}
        {message && <p className="login-message">{message}</p>}

        {/* SWITCH */}
        <div className="auth-switch">
          {mode === "login" ? (
            <p>
              Don’t have an account?
              <button
                type="button"
                className="switch-btn"
                onClick={() => {
                  setMode("register");
                  setMessage("");
                }}
              >
                Register
              </button>
            </p>
          ) : (
            <p>
              Already have an account?
              <button
                type="button"
                className="switch-btn"
                onClick={() => {
                  setMode("login");
                  setMessage("");
                }}
              >
                Login
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Login;