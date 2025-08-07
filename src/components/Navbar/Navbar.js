import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo3.png';
import { scrollToAboutSection, scrollToObjectivesSection } from '../About/About';
import { scrollToContactSection } from '../Contact/contacts';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); 
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
                        href="#objectives"
                        className="object"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToObjectivesSection();
                        }}
                    >
                        Projects
                    </a>
                </li>
                <li><a className="object" href="#event">Events</a></li>
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
