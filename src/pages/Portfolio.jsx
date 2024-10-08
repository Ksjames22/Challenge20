// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';
import './Portfolio.css'; // Import CSS for Portfolio styling

const Portfolio = () => {
  const projects = [
    { title: 'My Portfolio', deployedUrl: 'https://ksjames22.github.io/My-Portfolio/' },
    // Add more projects here
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;


