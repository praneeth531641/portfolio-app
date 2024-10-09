// import React from 'react';
// import './About.css'; // Import the CSS file

// const About = () => {
//     return (
//         <section className="about-section">
//             <h1 className="about-title">About Me</h1> 
//             <p className="about-description">
//                 Hello! I’m a passionate developer with experience in building web applications using React and more. 
//                 I love creating clean, efficient code and always strive to learn new technologies.
//             </p>
//         </section>
//     );
// };

// export default About;
import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
    return (
        <section className="about-section">
            <h1 className="about-title">About Me</h1> 
            <p className="about-description">
                Hello! I’m Rayavarapu Praneeth, a passionate and results-driven full-stack developer with a strong foundation in web technologies. 
                With expertise in both frontend and backend development, I enjoy creating seamless and dynamic user experiences across a variety of platforms.
            </p>
            <h2 className="about-subtitle">Professional Background</h2>
            <p className="about-description">
                I have had the privilege of working on diverse projects that range from small-scale applications to large enterprise solutions. 
                This experience has equipped me with the ability to adapt to various technologies and frameworks, and I thrive in collaborative environments 
                where I can contribute my skills while learning from others.
            </p>
            {/* <h2 className="about-subtitle">Skills & Technologies</h2>
            <h3 className="about-subheading">Frontend Development:</h3>
            <p className="about-description">
                Proficient in React and Angular, I specialize in building responsive, accessible, and visually appealing user interfaces that enhance user engagement. 
                Knowledgeable in modern frontend tools and libraries, such as Redux for state management, and various CSS frameworks (like Bootstrap and Tailwind) for styling.
            </p>
            <h3 className="about-subheading">Backend Development:</h3>
            <p className="about-description">
                Experienced in building RESTful APIs and server-side applications using .NET and Node.js, ensuring robust data handling and security. 
                Proficient in database management with SQL Server and MongoDB, allowing for efficient data storage, retrieval, and manipulation.
            </p>
            <h3 className="about-subheading">Full-Stack Development:</h3>
            <p className="about-description">
                Skilled in both MERN and MEAN stacks, I enjoy tackling challenges that require an integrated approach, from designing databases to creating user-friendly interfaces.
            </p>
            <h3 className="about-subheading">Problem Solving & Critical Thinking:</h3>
            <p className="about-description">
                I approach problems methodically and creatively, always looking for innovative solutions to meet user needs and project requirements.
            </p> */}
            <h2 className="about-subtitle">My Development Philosophy</h2>
            <p className="about-description">
                I believe that good software development is not just about writing code; it's about understanding the end-user and creating solutions that are intuitive and effective. 
                I emphasize the importance of clean, maintainable code, and I strive to implement best practices in every project I undertake.
            </p>
            <h2 className="about-subtitle">Continuous Learning & Growth</h2>
            <p className="about-description">
                The tech landscape is constantly evolving, and I am committed to lifelong learning. 
                I regularly explore new tools, frameworks, and methodologies to stay up-to-date with industry trends. 
                Whether through online courses, community meetups, or personal projects, I am always looking for ways to enhance my skill set.
            </p>
        </section>
    );
};

export default About;
