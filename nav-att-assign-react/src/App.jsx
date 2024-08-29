// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Attendance from './Components/Attendance';
import Assignment from './Components/Assignment';
import HomePage from './Components/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar component with links to different pages */}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/assignment" element={<Assignment />} />
          {/* Default route to redirect to attendance page */}
          <Route path="/" element={<Attendance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
