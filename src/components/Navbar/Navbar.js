import React from 'react';
import './Navbar.css';
import logo from '../../assets/AMES_LOGO.png';
import { scrollToAboutSection } from '../About/About';
import { scrollToFooterSection } from '../Footer/footer';
import { scrollToEventSection } from '../Events/EventsSection';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* ===== Left: Logo ===== */}
      <div className="logo-section">
        <a href="/">
          <img src={logo} alt="AMES Logo" className="logo-img" />
        </a>
      </div>

      {/* ===== Center: Navigation Links ===== */}
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li>
          <a
            href="/About"
            onClick={(e) => {
              e.preventDefault();
              scrollToAboutSection();
            }}
          >
            About
          </a>
        </li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="#">Teams</a></li>
        <li>
          <a
            href="/Event"
            onClick={(e) => {
              e.preventDefault();
              scrollToEventSection();
            }}
          >
            Events
          </a>
        </li>
      </ul>

      {/* ===== Right: Contact Button ===== */}
      <div className="contact-button">
        <a
          href="/Footer"
          onClick={(e) => {
            e.preventDefault();
            scrollToFooterSection();
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
