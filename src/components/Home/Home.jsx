import React, { useState, useEffect } from 'react';
import './Home.css';
import ResumeModal from '../ResumeModal/ResumeModal';
// import DiceBearAvatar from '../DiceBearAvatar/DiceBearAvatar'; // Uncomment if you want to use the avatar

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");
  const fullText = "Hello! I'm Rayavarapu Praneeth, a passionate Web Developer dedicated to creating innovative solutions and beautiful experiences. This portfolio showcases my journey, skills, and projects that reflect my commitment to excellence and creativity.";
  const fullText2 = "In my work, I blend technology with artistry, striving to build not just functional applications but also visually appealing designs. Here, you'll find a collection of my projects that highlight my expertise in MERN, MEAN, .NET Full stack, SQL Server, MySQL, and my approach to problem-solving.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(timer);
    }, 50); // Adjust typing speed here (in milliseconds)
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText2((prev) => prev + fullText2[index]);
      index++;
      if (index === fullText2.length) clearInterval(timer);
    }, 50); // Adjust typing speed here (in milliseconds)
    return () => clearInterval(timer);
  }, []);

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
      <div>
        <p className="home-description">
          {displayedText}
        </p>
        <p className="home-description">
          {displayedText2}
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
