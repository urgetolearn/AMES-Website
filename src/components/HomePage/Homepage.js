import React from 'react';
import About from '../About/About';

import Contact from '../Contact/contacts';
import './Homepage.css';
import bannerImage from '../../assets/banner2.jpg';
import visionIcon from '../../assets/vision.png';


const HomePage = () => {
    const [hoveredCard, setHoveredCard] = React.useState(null);

    return (
        <div className='page' style={{ marginTop: '-15px' }}>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="banner-container">
                    <div className="hero-image-wrapper">
                        <img src={bannerImage} alt="Banner" className="hero-image" />
                    </div>

                    <div className="overlay-text">
                        Association Of Mechanical <span className="centered-part">Engineering Students</span>
                        <span className="below-part">Building the future through excellence in Mechanical engineering</span>
                    </div>
                </div>
            </section>

            <section className="info-cards-section">
                <div
                    className="info-card"
                    onMouseEnter={() => setHoveredCard('vision')}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '12px'
                        }}
                    >
                        <img
                            src={visionIcon}
                            alt="Vision Icon"
                            style={{
                                width: '48px',
                                height: '48px',
                                transition: 'transform 0.3s',
                                transform: hoveredCard === 'vision' ? 'scale(1.2) rotate(10deg)' : 'none'
                            }}
                        />
                    </div>
                    <h3>Our <span style={{ color: "#f7842b" }}>Vision</span></h3>
                    <p>
                        To empower students through technical knowledge and hands-on experience.
                    </p>
                </div>

                <div
                    className="info-card"
                    onMouseEnter={() => setHoveredCard('mission')}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '12px'
                        }}
                    >
                        <img
                            src={require('../../assets/mission.png')}
                            alt="Mission Icon"
                            style={{
                                width: '48px',
                                height: '48px',
                                transition: 'transform 0.3s',
                                transform: hoveredCard === 'mission' ? 'scale(1.2) rotate(-10deg)' : 'none'
                            }}
                        />
                    </div>
                    <h3>Our <span style={{ color: "#f7842b" }}>Mission</span></h3>
                    <p>
                        To provide a collaborative environment that fosters innovation and growth.
                    </p>
                </div>
            </section>

            <div style={{ paddingLeft: '140px', paddingRight: '140px' }}><hr style={{
                border: 'none',
                height: '2px',
                borderTop: '2px dashed #f7842b',
                margin: '32px 0'
            }} /></div>

            <About />
            <footer className="footer" id="contact">
                <Contact />
            </footer>
        </div>
    );
};

export default HomePage;
