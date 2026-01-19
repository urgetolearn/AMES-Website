import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom'; // Added for the buttons
import { useFadeUpOnScroll } from '../../animation/useFadeUpOnScroll';
import useTypewriter from '../../animation/useTypewriter';
import './ProjectsSection.css';
import eventsData from "../../data/project.js";
import ImageCarousel from "../ImageCarousel/ImageCarousel.js";

function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [barKey, setBarKey] = useState(0);
  const AUTO_NEXT_INTERVAL = 4000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % eventsData.length);
      setBarKey((k) => k + 1);
    }, AUTO_NEXT_INTERVAL);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const fadeRefs = useFadeUpOnScroll();
  const typewriter = useTypewriter();

  return (
    <section className="ps-main-container">
      <div className="ps-top-content">
        <h2
          className={`ps-main-title typewriter-title zoom-in shimmer ${fadeRefs.current[0]?.classList.contains('fade-up') ? 'fade-up' : ''}`}
          ref={el => fadeRefs.current[0] = el}
        >
          {typewriter}
          <span className="typewriter-cursor">|</span>
        </h2>
        <div
          className={`ps-carousel-container ${fadeRefs.current[1]?.classList.contains('fade-up') ? 'fade-up' : ''}`}
          ref={el => fadeRefs.current[1] = el}
        >
          <ImageCarousel />
        </div>
      </div>

      <div className="ps-list-wrapper">
        {/* Project 1 */}
        <div className={`ps-row ${fadeRefs.current[2]?.classList.contains('fade-up') ? 'fade-up' : ''}`} ref={el => fadeRefs.current[2] = el}>
          <div className="ps-text-block">
            <span className="ps-label">Project 1</span>
            <div className="ps-accent-line" />
            <h2 className="ps-project-name">Smart Fish Counting System</h2>
            <p className="ps-description">Using image processing and sensors to track fish population in real-time.</p>
            <Link to="/about-details" className="ps-btn">Know More</Link>
          </div>
          <div className="ps-image-block">
            <img src="/fish.png" alt="Fish Counting" />
          </div>
        </div>

        {/* Project 2 - Reversed */}
        <div className={`ps-row ps-reverse ${fadeRefs.current[3]?.classList.contains('fade-up') ? 'fade-up' : ''}`} ref={el => fadeRefs.current[3] = el}>
          <div className="ps-text-block">
            <span className="ps-label">Project 2</span>
            <div className="ps-accent-line" />
            <h2 className="ps-project-name">Automation of Fish Breeding Systems</h2>
            <p className="ps-description">Designing automated temperature, oxygen, and feed control for breeding tanks.</p>
            <Link to="/about-details" className="ps-btn">Know More</Link>
          </div>
          <div className="ps-image-block">
            <img src="/farm.jpg" alt="Fish Breeding" />
          </div>
        </div>

        {/* Project 3 */}
        <div className={`ps-row ${fadeRefs.current[4]?.classList.contains('fade-up') ? 'fade-up' : ''}`} ref={el => fadeRefs.current[4] = el}>
          <div className="ps-text-block">
            <span className="ps-label">Project 3</span>
            <div className="ps-accent-line" />
            <h2 className="ps-project-name">Variable Gap Fish Sorting System</h2>
            <p className="ps-description">Mechanical design for sorting fish by size using adjustable sorting trays.</p>
            <Link to="/about-details" className="ps-btn">Know More</Link>
          </div>
          <div className="ps-image-block">
            <img src="/sort.webp" alt="Sorting System" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;