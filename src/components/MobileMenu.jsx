//src/components/MobileMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.css';

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className="mobile-menu">
      <Link to="/about" onClick={closeMenu}>About</Link>
      <Link to="/courses" onClick={closeMenu}>Courses</Link>
      <Link to="/admissions" onClick={closeMenu}>Admissions</Link>
      <Link to="/contact" onClick={closeMenu}>Contact</Link>
      <Link to="/apply" onClick={closeMenu} className="college-button">Apply Now</Link>
    </div>
  );
};

export default MobileMenu;