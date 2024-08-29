import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Attendance from './Components/Attendance';
import Assignment from './Components/Assignment';
import HomePage from './Components/HomePage';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar component with links to different pages */}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} /> {/* Add a route for RegisterForm */}
          <Route path="/" element={<Attendance />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
