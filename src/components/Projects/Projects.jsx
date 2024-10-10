import React from 'react';
import './Projects.css'; // Import the CSS file

const Projects = () => {
  const projectData = [
    {
      title: 'Brain Tumor Classification',
      duration: '273 Days',
      description: 'Classification of brain tumor using skull stripping and CNNs.',
    },
    {
      title: 'Empro',
      duration: '12 Months',
      description: 'An application for microbial management system. My role as a software developer involved developing a module named culture for tracking bacteria in pharmacy plants.',
    },
    {
      title: 'Courses Portal',
      duration: '2 Months',
      description: 'A web application where students can select courses which are approved by admins. Students can check if their course is approved or rejected. Developed using React, Express.js, Node.js, and MySQL.',
    },
    {
      title: 'Prompt Using OpenAI API',
      duration: '2 Weeks',
      description: 'Created a custom prompt for ChatGPT using the OpenAI API for personal use with HTML, CSS, and JavaScript.',
    },
  ];

  return (
    <div className="projects-container">
      {/* <h1 className="projects-title">Welcome to My Projects Page</h1> */}
      <p className="projects-description">Here are some of the projects I have completed:</p>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-duration">{project.duration}</p>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
