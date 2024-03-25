import React from "react";
import "./Login.css";

function Login({ setLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email === "keshav@xyz" && password === "keshav123") {
      setLogin(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-image"></div>
      <div className="login-form">
        <div style={{ color: "#04139a", marginBlock: 40 }}>
          <h2 className="login-header">Login to BluOcean</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="keshav@xyz"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="keshav123"
              required
            />
            <span className="forgot-password">Forgot Password?</span>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="signup">
            <span>Want to know more about BluOcean ? </span>
            <span className="signup-btn"> Sign Up</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
