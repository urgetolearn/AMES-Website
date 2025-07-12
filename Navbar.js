import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo3.png';
import { scrollToAboutSection } from '../About/About';
import { scrollToUpdatesSection } from '../updates/updates'; 
import { scrollToContactSection } from '../Contact/contacts';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // Set true when scrolled more than 50px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="logo-section">
                <img src={logo} alt="AMES Logo" className="logo-img" />
            </div>
            <ul className={`nav-links ${scrolled ? 'scrolled-links' : 'top-links'}`}>
                <li><a className="object" href="/">Home</a></li>
                <li>
                    <a
                        href="/About"
                        className="object nav-button"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToAboutSection();
                        }}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="/updates"
                        className="object nav-button"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToUpdatesSection();
                        }}
                    >
                        Updates
                    </a>
                </li>
                <li><a className="object" href="#gallery">Projects</a></li>
                <li><a className="object" href="#contact">Team</a></li>
                <li>
                    <a
                        href="/contacts"
                        className="object nav-button"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToContactSection();
                        }}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
