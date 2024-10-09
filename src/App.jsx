
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ContactUs from './components/ContactUs/ContactUs';
// import { useTheme } from './ThemeContext';


import profileImage from './components/assets/profile.jpg'; // Make sure this matches the exact path and filename
// Adjust the path based on where you placed the image

const App = () => {
    // const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <nav>
        <img src={profileImage} alt="Profile" className="profile-image" />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contactUs">Contact Us</Link>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './components/Home/Home';
// import About from './components/About/About';
// import Skills from './components/Skills/Skills';
// import Projects from './components/Projects/Projects';
// import { useTheme } from './components/ThemeContext';

// const App = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <Router>
//       <div style={{ backgroundColor: theme.background, color: theme.color, minHeight: '100vh' }}>
//         <nav style={{ backgroundColor: theme.primary }}>
//           <img src={require('./assets/profile.jpg')} alt="Profile" className="profile-image" />
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/skills">Skills</Link>
//           <Link to="/projects">Projects</Link>
//           <button onClick={toggleTheme}>Toggle Theme</button> {/* Button to toggle themes */}
//         </nav>
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/projects" element={<Projects />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;
