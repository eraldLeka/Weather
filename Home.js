import React, { useRef } from "react";
import "../styles/home.css";
import profilePic from "../assets/erald.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPaper } from '@fortawesome/free-solid-svg-icons';

import useReveal from "../assets/hooks/useReveal";

import { FaDownload } from "react-icons/fa";


const Home = () => {

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useReveal(aboutRef);
  useReveal(projectsRef);
  useReveal(contactRef);

  return (
    <>
      {/* about Section */}
      <section className="about" id="about" ref={aboutRef}>
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-title">
              Hi, I'm Erald{" "}
              <FontAwesomeIcon
                icon={faHandPaper}
                style={{ color: "#FFD700" }}
              />
            </h1>
            <p className="about-subtitle">
             Hi! I'm <span className="highlight">Erald</span>, a passionate <span className="highlight">Web Developer</span> focused on creating 
              <span className="highlight">efficient</span> and <span className="highlight">user-friendly</span> web applications. 
              I enjoy solving <span className="highlight">real-world problems</span> with modern technologies.
            </p>
            <a
              href="/EraldLekaCV.pdf" 
              download
              className="resume-download-button"
            >
              <FaDownload style={{ marginRight: "8px" }} />
              CV
            </a>

          </div>

          <div className="about-image">
            <img src={profilePic} alt="Erald" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section className="projects" id="projects" ref={projectsRef}>
  <h2>Projects</h2>
  <p>Here are some of my featured works.</p>

  <div className="projects-grid">
    {/* Project 1 */}
    <div className="project-card">
      <video src="/videos/project1.mp4" controls />
      <h3>Project One</h3>
      <p>A short description of project one, what it does and why it is cool.</p>
        <div className="technologies">
    <span className="tech react">
      <img src="/icons/react.svg" alt="React" /> React
    </span>
    <span className="tech css">
      <img src="/icons/css3.svg" alt="CSS3" /> CSS
    </span>
    <span className="tech nodejs">
      <img src="/icons/nodejs.svg" alt="Node.js" /> Node.js
    </span>
  </div>
    </div>

    {/* Project 2 */}
    <div className="project-card">
      <video src="/videos/project2.mp4" controls />
      <h3>Project Two</h3>
      <p>A short description of project two.</p>
<div className="technologies">
  <span className="tech react">
    <img src="/icons/react.svg" alt="React" /> React
  </span>
  <span className="tech tailwind">
    <img src="/icons/tailwind.svg" alt="TailwindCSS" /> TailwindCSS
  </span>
  <span className="tech firebase">
    <img src="/icons/firebase.svg" alt="Firebase" /> Firebase
  </span>
</div>


    </div>

    {/* Project 3 */}
    <div className="project-card">
      <video src="/videos/project3.mp4" controls />
      <h3>Project Three</h3>
      <p>A short description of project three.</p>
      <div className="technologies">
        <span className="tech react">
          <img src="/icons/react.svg" alt="React" /> React
        </span>
        <span className="tech express">
          <img src="/icons/express.svg" alt="Express" /> Express
        </span>
        <span className="tech mongodb">
          <img src="/icons/mongodb.svg" alt="MongoDB" /> MongoDB
        </span>
      </div>
    </div>
    </div>
  </section>


      {/* Contact Section */}
      <section className="contact" id="contact" ref={contactRef}>
        <h2>Contact Me</h2>
        <p>Email: erald@example.com</p>
      </section>
    </>
  );
};

export default Home;