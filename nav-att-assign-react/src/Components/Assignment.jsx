// src/Components/Assignment.jsx

import React, { useState } from 'react';
import './Assignment.css';

function Assignment() {
  const [selectedFile, setSelectedFile] = useState(null); // State to store selected file
  const [isFilePicked, setIsFilePicked] = useState(false); // State to check if a file is selected

  // Handle file input changes
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  // Handle file upload
  const handleFileUpload = () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    // Create a FormData object to prepare the file for upload
    const formData = new FormData();
    formData.append('file', selectedFile);

    // Use fetch or axios to send the file to the backend
    fetch('YOUR_BACKEND_ENDPOINT', { // Replace with your backend endpoint
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        alert('File uploaded successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('File upload failed!');
      });
  };

  return (
    <div className="assignment-wrapper"> {/* New container for centering */}
      <div className="drop-container"> {/* Apply drop-container class */}
        <h2 className="drop-title">Upload Your Assignment</h2>
        <input type="file" onChange={handleFileChange} />
        {isFilePicked ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size: {selectedFile.size} bytes</p>
            <p>
              Last Modified: {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        <button className="file-upload-button" onClick={handleFileUpload}>
          Upload
        </button>
      </div>
    </div>
  );
}

export default Assignment;
