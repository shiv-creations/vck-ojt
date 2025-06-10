//src/components/Header/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">My College</Link>
        <nav className="desktop-nav">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/apply" className="college-button">Apply Now</Link>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
      {menuOpen && <MobileMenu closeMenu={() => setMenuOpen(false)} />}
    </header>
  );
};

export default Header;