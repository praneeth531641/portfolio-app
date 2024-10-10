import React, { useState } from 'react';
import './Home.css';
import ResumeModal from '../ResumeModal/ResumeModal';
// import DiceBearAvatar from '../DiceBearAvatar/DiceBearAvatar'; // Uncomment if you want to use the avatar

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home-container">
      {/* Uncomment this to display the avatar */}
      {/* <DiceBearAvatar /> */}
      <div >
      

        <p className="home-description">
          Hello! I'm <strong>Rayavarapu Praneeth</strong>, a passionate <strong>Web Developer</strong> dedicated to creating innovative solutions and beautiful experiences. This portfolio showcases my journey, skills, and projects that reflect my commitment to excellence and creativity.
        </p>
        <p className="home-description">
          In my work, I blend technology with artistry, striving to build not just functional applications but also visually appealing designs. Here, you'll find a collection of my projects that highlight my expertise in <strong>MERN,MEAN and .NET Full stack,SQL Server , MySql</strong>, as well as my approach to problem-solving.
        </p>
        <div className="greeting-box">
        <p className="greeting-text">Hello! Thanks for visiting my portfolio. Feel free to explore! --@Pranco</p>
      </div>
      </div>
      <div>
      <button onClick={openModal} className="resume-button">
        Preview Resume
      </button>

      <ResumeModal isOpen={isModalOpen} onRequestClose={closeModal} />
      </div>
    </div>
  );
};

export default Home;
