import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './SocialNetworks.css'; // Import the CSS file

const SocialNetworks = () => {
  return (
    <div className="social-container">
      <h1 className="social-title">Welcome to My Social Networks</h1>
      <p className="social-description">These are the Social Networking Accounts I have:</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        {/* <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/path/to/naukri-icon.png" alt="Naukri" className="naukri-icon" />
        </a> */}
      </div>
    </div>
  );
};

export default SocialNetworks;
