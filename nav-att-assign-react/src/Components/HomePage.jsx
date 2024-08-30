import React, { useState } from 'react';
import './HomePage.css';
import LoginForm from './LoginForm'; // Import LoginForm component

function HomePage() {
  const [showLoginForm, setShowLoginForm] = useState(false); // State to toggle LoginForm

  const handleSignUpClick = () => {
    setShowLoginForm(true); // Show LoginForm when button is clicked
  };

  return (
    <div className='home-page'>
      {showLoginForm ? (
        <LoginForm /> // Render LoginForm if showLoginForm is true
      ) : (
        <>
        <div className='home-content'>
          <h1>Attendance and Assignment Submission</h1>
          <p>Easily track attendance and manage assignment submissions in real-time. Enjoy quick access and detailed insights to improve educational management and boost student performance.</p>
          <button className='sign-up-button' onClick={handleSignUpClick}>Sign Up Here</button>
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
