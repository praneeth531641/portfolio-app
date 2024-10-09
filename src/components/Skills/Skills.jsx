import React from 'react';
import './Skills.css'; // Import the CSS file

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Welcome to My Skills</h1>
      <p className="skills-description">These are the skills I have gained.</p>
      <h2 className="about-subtitle">Skills & Technologies</h2>
            <h3 className="about-subheading">Frontend Development:</h3>
            <p className="skills-description">
                Proficient in React and Angular, I specialize in building responsive, accessible, and visually appealing user interfaces that enhance user engagement. 
                Knowledgeable in modern frontend tools and libraries, such as Redux for state management, and various CSS frameworks (like Bootstrap and Tailwind) for styling.
            </p>
            <h3 className="about-subheading">Backend Development:</h3>
            <p className="skills-description">
                Experienced in building RESTful APIs and server-side applications using .NET and Node.js, ensuring robust data handling and security. 
                Proficient in database management with SQL Server and MongoDB, allowing for efficient data storage, retrieval, and manipulation.
            </p>
            <h3 className="about-subheading">Full-Stack Development:</h3>
            <p className="skills-description">
                Skilled in both MERN and MEAN stacks, I enjoy tackling challenges that require an integrated approach, from designing databases to creating user-friendly interfaces.
            </p>
            <h3 className="about-subheading">Problem Solving & Critical Thinking:</h3>
            <p className="skills-description">
                I approach problems methodically and creatively, always looking for innovative solutions to meet user needs and project requirements.
            </p> 
    </div>
  );
};

export default Skills;
