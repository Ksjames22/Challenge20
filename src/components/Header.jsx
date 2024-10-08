// src/components/Header.jsx
import React from 'react';
import Navigation from './Navigation';
import './Header.css'; // Import CSS for header styling

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Kalen James</h1>
      <Navigation />
    </header>
  );
};

export default Header; // Ensure this line is present


