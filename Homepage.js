import React from 'react';
import About from '../About/About';
import Updates from '../updates/updates';
import Contact from '../Contact/contacts';
import './Homepage.css';
import bannerImage from '../../assets/banner.png';


const HomePage = () => {
    return (
        <div>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="banner-container">
                    <img src={require('../../assets/banner.png')} alt="Banner" className="hero-image" />

                    <div className="overlay-text">
                        Association Of Mechanical <span className="centered-part">Engineering Students</span>
                        <span className="below-part">Building the future through excellence in Mechanical engineering</span>
                    </div>


                </div>
            </section>
            <Updates />

            <section className="info-cards-section">
                <div className="info-card">
                    <h3>Our Vision</h3>
                    <p>
                        To empower students through technical knowledge and hands-on experience.
                    </p>
                </div>



                <div className="info-card">
                    <h3>Our Mission</h3>
                    <p>
                        To provide a collaborative environment that fosters innovation and growth.
                    </p>
                </div>
            </section>
            <About />
            <footer className="footer" id="contact">
                <Contact />
            </footer>
        </div>
    );
};

export default HomePage;
