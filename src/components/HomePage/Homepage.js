import React from 'react';
import About from '../About/About';

import Contact from '../Contact/contacts';
import './Homepage.css';
import bannerImage from '../../assets/banner2.jpg';
import visionIcon from '../../assets/vision.png';
import Footer from '../Footer/footer';
const year = new Date().getFullYear();



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
                        Association Of Mechanical Engineering Students(AMES)
                        <span className="below-part1">National Institute of Technology Karnataka(NITK)</span>
                        <span className="moto">Connecting gears of innovation across generations</span>
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
            <Contact />
            <footer className="footer" id="contact">
                <Footer />
            </footer>
            <div style={{ paddingLeft: '140px', paddingRight: '140px' }}><hr style={{
                border: 'none',
                height: '2px',
                borderTop: '2px dashed #f7842b',
                margin: '0px 0 0 0',
                paddingBottom: '27px'
            }} ></hr></div>
            <ul className="footer-bottom" >
                <li className="footer-text" >© {year} AMES. All rights reserved.</li>
                <li className="footer-text2" ><a href='#' style={{color:'#fff',textDecoration:'none'}}>Privacy Policy</a></li>
                <li className="footer-text3"><a href='#'style={{color:'#fff',textDecoration:'none'}}>Terms of Service</a></li>
            </ul>
        </div>
    );
};

export default HomePage;
