import React from 'react';
import Modal from 'react-modal';
import './ResumeModal.css'; // Create this file for styling

// Set app element for accessibility
Modal.setAppElement('#root');

const ResumeModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Resume Preview"
      className="modal"
      overlayClassName="overlay"
    >
      {/* Button Container */}
      <div className="button-container">
        <a href="/documents/resume.pdf" download className="download-button">
          Download Resume
        </a>
        <button className="close-button" onClick={onRequestClose}>
          X
        </button>
      </div>
      
      <iframe
        src="/documents/resume.pdf"
        title="Resume Preview"
        className="resume-preview"
      />
    </Modal>
  );
};

export default ResumeModal;
