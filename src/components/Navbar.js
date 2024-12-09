import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">VISIONFORGE</Link>
        </div>

        {/* Menu Toggle for Mobile */}
        <div className="menu-toggle" onClick={toggleMobileMenu}>
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile' : ''}`}>
          <li>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link to="/join-team" onClick={() => setIsMobileMenuOpen(false)}>Join Team</Link>
          </li>
          <li>
            <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          </li>
        </ul>

        {/* Call to Action Button */}
        <div className="cta-button">
          <Link to="/join-team" onClick={() => setIsMobileMenuOpen(false)}>Join Us Now</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
