// src/Components/Assignment.jsx

import React, { useState } from 'react';
import './Assignment.css';

function Assignment() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleFileUpload = () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    fetch('YOUR_BACKEND_ENDPOINT', {
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
    <div className="assignment-wrapper">
      <div className="drop-container">
        <h2 className="drop-title">Upload Your Assignment</h2>
        <label htmlFor="file-upload" className="file-upload-button">Choose File</label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          style={{ display: 'none' }} // Hide the default file input
        />
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
