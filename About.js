// src/components/About.js
import React, { useRef, useEffect } from 'react';
import './About.css';

// Global reference to allow outside trigger (like from Navbar)
let scrollToAboutSection = () => {};

const About = () => {
  const aboutRef = useRef(null);

  // Assign scroll function globally once component mounts
  useEffect(() => {
    scrollToAboutSection = () => {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  }, []);

  return (
    <section className="about-section" ref={aboutRef}>
      <h2>About AMES</h2>
      <p>
        The Association of Mechanical Engineering Students (AMES) at NITK Surathkal is a student-led body
        that fosters innovation, technical excellence, and community among mechanical engineers.
      </p>
      <p>
        We organize workshops, industrial visits, tech talks, and competitions to empower students
        with real-world skills and collaborative opportunities.
      </p>
    </section>
  );
};

// Export scroll function
export { scrollToAboutSection };
export default About;
