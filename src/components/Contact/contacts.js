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
    <div className="page1">
      {/* Media Section */}
      <section className="media-section">
        <div className="media-image-wrapper">
          <img src={mediaImage} alt="Media Banner" className="media-image" />
          <div className="media-overlay"></div>
          <div className="media-overlay-text">
            <div className="main-heading">MEDIA</div>
            {/* The horizontal line will be placed here now */}
            <div className="line"></div>
            <div className="below-part">Stay Tuned and Follow Us!!</div>
            <section className="media-links">
              <div className="media-link1">
                <a href="https://www.instagram.com/ames.nitk?igsh=MXN0cjlxNmN5anE5cA==" target="_blank" rel="noopener noreferrer">@instagram</a>
              </div>
              <div className="media-link2">
                <a href="https://www.linkedin.com/company/association-of-mechanical-engineering-students-nitk/" target="_blank" rel="noopener noreferrer">@Linkedin</a>
              </div>
              <div className="media-link3">
                <a href="#" target="_blank" rel="noopener noreferrer">@youtube</a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export { scrollToContactSection };
export default Contact;