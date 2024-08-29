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
          <h1>Attendance and Assignment Submission</h1>
          <button onClick={handleSignUpClick}>Sign Up Here</button>
        </>
      )}
    </div>
  );
}

export default HomePage;
