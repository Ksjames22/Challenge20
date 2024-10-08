// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', imageUrl: 'url1', deployedUrl: 'link1', repoUrl: 'repo1' },
    // Add more projects
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;

