import React, { useEffect, useState, useRef } from "react";
import { useFadeUpOnScroll } from '../../animation/useFadeUpOnScroll';
import useTypewriter from '../../animation/useTypewriter';
import './ProjectsSection.css';
import eventsData from "../data/project.js";
import ImageCarousel from './ImageCarousel';
import aboutImage from '../assets/pro.png';
import objectivesImage from '../assets/pro.png';

let scrollToEventSection = () => { };
const AUTO_NEXT_INTERVAL = 4000; // 4 seconds

function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [barKey, setBarKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % eventsData.length);
      setBarKey((k) => k + 1);
    }, AUTO_NEXT_INTERVAL);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  const handleClick = (idx) => {
    setActiveIndex(idx);
    setBarKey((k) => k + 1);
  };

  const eventRef = useRef(null);

  useEffect(() => {
    scrollToEventSection = () => {
      eventRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  }, []);

  const fadeRefs = useFadeUpOnScroll();
  const typewriter = useTypewriter();
  return (
    <section className="projects-section">
      <div className="projects-content">
        <h2
          className={
            `projects-title typewriter-title zoom-in shimmer${fadeRefs.current[0] && fadeRefs.current[0].classList && fadeRefs.current[0].classList.contains('fade-up') ? ' fade-up' : ''}`
          }
          ref={el => fadeRefs.current[0] = el}
        >
          {typewriter}
          <span className="typewriter-cursor">|</span>
        </h2>
        <div
          className={`carousel-fade-up${fadeRefs.current[1] && fadeRefs.current[1].classList && fadeRefs.current[1].classList.contains('fade-up') ? ' fade-up' : ''}`}
          ref={el => fadeRefs.current[1] = el}
        >
          <ImageCarousel />
        </div>
      </div>
      <div className="about-section" >
        {/* First Row: About Us */}
        <div 
          className={`about-content-wrapper${fadeRefs.current[2] && fadeRefs.current[2].classList && fadeRefs.current[2].classList.contains('fade-up') ? ' fade-up' : ''}`}
          ref={el => fadeRefs.current[2] = el}
        >
          <div className="about-text">
            <span className="about-us-label">Project 1</span>
            <div style={{ height: '3px', width: '50px', background: '#f7842b', margin: '8px 0 16px 0', borderRadius: '2px' }} />
            <h2 className="about-title1">Smart Fish Counting System</h2>
            <p className="about-desc1">
              Using image processing and sensors to track fish population in real-time.</p>
            <button className="about-btn">Know More</button>
          </div>
          <div className="about-image">
            <img src="/fish.png" alt="Graduation" />
          </div>
        </div>
        {/* Second Row: Objectives */}
        <div 
          className={`about-content-wrapper${fadeRefs.current[3] && fadeRefs.current[3].classList && fadeRefs.current[3].classList.contains('fade-up') ? ' fade-up' : ''}`}
          style={{ marginTop: "2.5rem" }}
          ref={el => fadeRefs.current[3] = el}
        >
          <div className="about-image2">
            <img src="/farm.jpg" alt="Classroom" />
          </div>
          <div className="about-text2">
            <span className="about-us-label">Project 2</span>
            <div style={{ height: '3px', width: '50px', background: '#f7842b', margin: '8px 0 16px 0', borderRadius: '2px' }} />
            <h2 className="about-title1" >Automation of Fish Breeding Systems</h2>
            <ul className="about-desc2" style={{ marginBottom: "1.5rem" }}>
              Designing automated temperature, oxygen, and feed control for breeding tanks.
            </ul>
            <button className="about-btn">Know More</button>
          </div>
        </div>
        {/* Third Row: Objectives */}
        <div 
          className={`about-content-wrapper${fadeRefs.current[4] && fadeRefs.current[4].classList && fadeRefs.current[4].classList.contains('fade-up') ? ' fade-up' : ''}`}
          style={{ marginTop: "2.5rem" }}
          ref={el => fadeRefs.current[4] = el}
        >
          <div className="about-text">
            <span className="about-us-label">Project 3</span>
            <div style={{ height: '3px', width: '50px', background: '#f7842b', margin: '8px 0 16px 0', borderRadius: '2px' }} />
            <h2 className="about-title1">Variable Gap Fish Sorting System</h2>
            <p className="about-desc1">
              Mechanical design for sorting fish by size using adjustable sorting trays.</p>
            <button className="about-btn">Know More</button>
          </div>
          <div className="about-image">
            <img src="/sort.webp" alt="Graduation" />
          </div>
        </div>
        {/* Fourth Row: Objectives */}
        <div 
          className={`about-content-wrapper${fadeRefs.current[5] && fadeRefs.current[5].classList && fadeRefs.current[5].classList.contains('fade-up') ? ' fade-up' : ''}`}
          style={{ marginTop: "2.5rem" }}
          ref={el => fadeRefs.current[5] = el}
        >
          <div className="about-image2">
            <img src="/v.jpg" alt="Classroom" />
          </div>
          <div className="about-text2">
            <span className="about-us-label">Project 4</span>
            <div style={{ height: '3px', width: '50px', background: '#f7842b', margin: '8px 0 16px 0', borderRadius: '2px' }} />
            <h2 className="about-title1">Vehicle Tracking System</h2>
            <ul className="about-desc2" style={{ marginBottom: "1.5rem" }}>
              Real-time vehicle tracking using GPS IoT modules, aimed at campus and transport use.
            </ul>
            <button className="about-btn">Explore</button>
          </div>
        </div>
        {/* Fifth Row: Objectives */}
        <div 
          className={`about-content-wrapper${fadeRefs.current[6] && fadeRefs.current[6].classList && fadeRefs.current[6].classList.contains('fade-up') ? ' fade-up' : ''}`}
          style={{ marginTop: "2.5rem" }}
          ref={el => fadeRefs.current[6] = el}
        >
          <div className="about-text">
            <span className="about-us-label">Project 5</span>
            <div style={{ height: '3px', width: '50px', background: '#f7842b', margin: '8px 0 16px 0', borderRadius: '2px' }} />
            <h2 className="about-title1">NITK Lake Water Saving System</h2>
            <p className="about-desc1">
              Optimizing lake water usage using smart control systems for sustainability.</p>
            <button className="about-btn">Know More</button>
          </div>
          <div className="about-image">
            <img src="/l.jpg" alt="Graduation" />
          </div>
        </div>

      </div>


    </section >
  );
}

export default ProjectsSection;
