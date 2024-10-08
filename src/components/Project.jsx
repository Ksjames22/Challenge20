// src/components/Project.jsx
import React from 'react';

const Project = ({ title, imageUrl, deployedUrl, repoUrl }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer">View Deployed App</a>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">View Code</a>
    </div>
  );
};

export default Project;


