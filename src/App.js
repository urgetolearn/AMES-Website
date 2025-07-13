// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/Homepage';      
import About from './components/About/About';
import Updates from './components/updates/updates';
import Contact from './components/Contact/contacts';

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
      </Routes>
    </Router>
  );
}

export default App;
