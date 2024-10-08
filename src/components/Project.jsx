// src/components/Project.jsx
import React from 'react';
import './Project.css'; // Import CSS for project styling

const Project = ({ title, imageUrl, deployedUrl, repoUrl }) => {
  return (
    <div className="project">
      <h3 className="project-title">{title}</h3>
      <img className="project-image" src={imageUrl} alt={title} />
      <div className="project-links">
        <a href={deployedUrl} target="_blank" rel="noopener noreferrer">View Deployed App</a>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
    </div>
  );
};

export default Project;



