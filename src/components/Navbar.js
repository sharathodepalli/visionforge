import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">VisionForge</Link>
        </div>
        <div className="menu-toggle" onClick={toggleMobileMenu}>
          <span className="hamburger"></span>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile' : ''}`}>
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/join-team" onClick={() => setIsMobileMenuOpen(false)}>Join Team</Link></li>
          <li><Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
        </ul>
        <div className="cta-button">
          <Link to="/join-team" onClick={() => setIsMobileMenuOpen(false)}>Join Us Now</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
