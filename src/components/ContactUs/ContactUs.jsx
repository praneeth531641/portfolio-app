import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-info">
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:praneethrayavarapu@gmail.com">praneethrayavarapu@gmail.com</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> Phone: <a href="tel:9390862517">9390862517</a>
        </p>
      </div>
      <div className="social-media">
        <p>@pranco</p>
      </div>
    </div>
  );
};

export default ContactUs;
