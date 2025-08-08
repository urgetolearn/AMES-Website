import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo3.png';
import { scrollToAboutSection} from '../About/About';
import { scrollToFooterSection } from '../Footer/footer';
import { scrollToEventSection } from '../Events/EventsSection';

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
                <a href='/'><img src={logo} alt="AMES Logo" className="logo-img" /></a>
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
                    <a href="#" className='object'>Projects</a>
                </li>
                <li><a className="object nav-button" href="/Event"  
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToEventSection();
                        }}>Events</a></li>
                <li>
                    <a
                        href="/Footer"
                        className="object nav-button"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToFooterSection();
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
