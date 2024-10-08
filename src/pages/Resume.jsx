// src/pages/Resume.jsx
import React from 'react';
import './Resume.css'; // Import CSS for Resume styling

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="/src/assests/Kalens updated resume 2024.pdf" download className="download-link">Download Resume</a>
      <h3>Proficiencies:</h3>
      <ul className="proficiencies">
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
      </ul>
    </section>
  );
};

export default Resume;
