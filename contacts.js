import React, { useRef, useEffect } from 'react';
import './contacts.css';

let scrollToContactSection = () => {};

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    scrollToContactSection = () => {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  }, []);

  return (
    <section className="contact-section" ref={contactRef}>
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
    </section>
  );
};

export { scrollToContactSection };
export default Contact;
