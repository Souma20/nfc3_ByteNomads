// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';

function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/login" element={<LoginForm />} /> 
        <Route path="/register" element={<RegisterForm />} /> 
      </Routes>
    </Router>
  );
}

export default App;
