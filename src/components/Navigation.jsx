// src/components/Navigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'; // Import CSS for navigation styling

const Navigation = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        About Me
      </NavLink>
      <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>
        Portfolio
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
        Contact
      </NavLink>
      <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>
        Resume
      </NavLink>
    </nav>
  );
};

export default Navigation; // This line must be present

