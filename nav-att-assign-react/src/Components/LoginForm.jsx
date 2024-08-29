// LoginForm.jsx

import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './LoginForm.css';

function LoginForm() {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" required />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label className="check"><input type="checkbox" /> Remember me</label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have an account? <Link to="/register">Register here</Link> {/* Use Link to navigate */}
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
