import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ContactUs from './components/ContactUs/ContactUs';
import SocialNetworks from './components/SocialNetworks/SocialNetworks';

import profileImage from './components/assets/profile.jpg';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <Router>
      <div className={isDarkTheme ? 'app dark-theme' : 'app light-theme'}>
        <nav>
          <img src={profileImage} alt="Profile" className="profile-image" />
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contactUs">Contact Us</Link>
          <Link to="/socialNetworks">Social Networks</Link>
          <button onClick={toggleTheme} className="theme-toggle-button">
            {isDarkTheme ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/socialNetworks" element={<SocialNetworks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
