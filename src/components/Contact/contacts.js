import React, { useRef, useEffect } from 'react';
import './contacts.css';
import mediaImage from '../../assets/nitk.jpg';


let scrollToContactSection = () => { };

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    scrollToContactSection = () => {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  }, []);

  return (
    <div className="page">
      {/* Media Section */}
      <section className="media-section">
        <img src={mediaImage} alt="Banner" className="hero-image" />

        {/* Dark overlay */}
        <div className="overlay"></div>

        {/* Text on top of image */}
        <div className="overlay-text">
          <h1 className="main-heading">Media</h1>
          <div className="underline"></div>
          <h1 className="below-part">Stay Tuned and Follow Us!!</h1>
          <section className="media-links">
            <div className="media-link">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <span>@instagram</span>
              </a>
            </div>
            <div className="media-link">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <span>@Linkedin</span>
              </a>
            </div>
            <div className="media-link">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <span>@youtube</span>
              </a>
            </div>
          </section>
        </div>
      </section>

  {/* Contact Section */ }
  < section className = "contact-section" ref = { contactRef } >
        <div className="contact-columns">
          <div className="contact-block">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">NITK Surathkal</a></li>
              <li><a href="#">AMES Portal</a></li>
            </ul>
          </div>

          <div className="contact-block">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Events</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Team</a></li>
            </ul>
          </div>

          <div className="contact-block">
            <h4>Contact Us</h4>
            <p>📍 Mechanical Department,<br />NITK Surathkal, Karnataka</p>
            <p>✉️ ames@nitk.edu.in</p>
          </div>
        </div>

        <div className="socials">
          <p>Our Social Media Platforms</p>
          <div className="icons">
            <a href="#"><i className="fab fa-facebook-f">🌐</i></a>
            <a href="#"><i className="fab fa-instagram">📸</i></a>
            <a href="#"><i className="fab fa-linkedin-in">💼</i></a>
          </div>
          <p className="credits">© 2025 Designed by <strong>AMES Web Team | NITK Surathkal</strong></p>
        </div>
      </section >
    </div >
  );
};

export { scrollToContactSection };
export default Contact;
