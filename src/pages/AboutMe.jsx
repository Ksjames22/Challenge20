// src/pages/AboutMe.jsx
import React from 'react';
import './AboutMe.css'; // Make sure to import your CSS file

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <img src="your-photo.jpg" alt="Your Avatar" className="avatar" />
      <p>
        Hello! I’m Kalen James, a passionate web developer with a focus on creating dynamic and user-friendly web applications. I have a strong foundation in HTML, CSS, and JavaScript, along with experience in React and Node.js.
      </p>
      <p>
        I thrive on building innovative solutions that solve real-world problems and enhance user experiences. My journey into the tech world started with a fascination for technology and how it shapes our lives, leading me to pursue a career in web development.
      </p>
      <h3>Skills</h3>
      <ul className="skills">
        <li>Front-End Development: Proficient in React, HTML, CSS, and JavaScript, with a keen eye for design and user experience.</li>
        <li>Back-End Development: Experience with Node.js and Express, ensuring a seamless interaction between the front-end and back-end.</li>
        <li>Version Control: Skilled in using Git and GitHub for version control and collaboration.</li>
      </ul>
      <h3>Interests</h3>
      <p>
        When I'm not coding, I enjoy exploring new technologies like gaming, contributing to open-source projects, and staying updated on industry trends. I also love golfing and working out, which inspire my creativity and problem-solving skills.
      </p>
      <p>
        I’m always looking for opportunities to learn and grow, and I’m excited about collaborating on projects that make a difference. Feel free to connect with me on <a href="https://www.linkedin.com/in/kalen-james-4329b22a7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>!
      </p>
    </section>
  );
};

export default AboutMe;


