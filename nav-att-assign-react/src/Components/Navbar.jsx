// src/Components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Create a CSS file for styling the navbar

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/attendance">Attendance</Link>
        </li>
        <li>
          <Link to="/assignment">Assignment</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
