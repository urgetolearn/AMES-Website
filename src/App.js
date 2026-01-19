// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/Homepage';      
import About from './components/About/About';
import Updates from './components/updates';
import Contact from './components/Contact/contacts';
import AboutSection from './components/About2/AboutSection-ASHUTOSH';
import Footer from './components/Footer/footer';
import Projectsection from './components/projectsection/ProjectsSection';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/contacts" element={<Contact />} />
        {/* Add more routes if needed */}
        <Route path="/about-details" element={<AboutSection />} />
        <Route path="/projects" element={<Projectsection />} />

      </Routes>
    </Router>
  );
}

export default App;
