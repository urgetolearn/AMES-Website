
import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-section">
                <img src={logo} alt="AMES Logo" className="logo-img" />
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#gallery">About</a></li>
                <li><a href="#gallery">Events</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
