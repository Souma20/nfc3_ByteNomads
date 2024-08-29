// src/Components/RegisterForm/RegisterForm.jsx

import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom'; 
function RegisterForm() {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Register</h1>
        <div className="input-box">
          <input type="text" placeholder="username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="email" placeholder="email" required />
          <MdEmail className='icon' />

        </div>
        <div className="input-box">
          <input type="password" placeholder="password" required />
          <FaLock className="icon" />
        </div>
        <button type="submit">Register</button>
        <div className="register-link">
          <p>
            Already have an account? <Link to="/login">Login here</Link> {/* Use Link to navigate */}
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
