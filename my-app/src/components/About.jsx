import React, { useEffect } from 'react';
import { FaReact, FaNode, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiExpress } from 'react-icons/si';
import '../index.css';
import heroImage from '../assets/about.webp';

const About = () => {
  useEffect(() => {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    const image = aboutSection.querySelector('.about-image');
    const textContent = aboutSection.querySelector('.text-content');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            image?.classList.add('animate-3d');
            textContent?.classList.add('animate-slide-right');
            observer.disconnect(); // Stops observing after animation triggers
          }
        });
      },
      { threshold: 0.5 } // Triggers when 50% of the section is visible
    );

    observer.observe(aboutSection);
  }, []);

  return (
    <section id="about" className="about-section py-5 text-white text-center text-lg-start mb-5 mt-5">
      <div className="container">
        <h2 className="fw-bold text-warning mb-4 text-center">About Me</h2>
        <div className="row align-items-center">
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <img 
              src={heroImage} 
              alt="Profile" 
              className="img-fluid about-image shadow-lg"
              style={{ maxWidth: "60%", height: "auto", border: "none" }}
            />
          </div>
          <div className="col-lg-7 text-content">
            <p className="lead mb-4">I'm a passionate Full Stack Developer specializing in the MERN Stack. I build interactive, scalable, and high-performance web applications that enhance user experience.</p>
            <p className="mb-4">With a strong foundation in front-end and back-end development, I craft intuitive designs and robust architectures. I thrive on solving complex problems and delivering efficient solutions.</p>
            
            <a href="/resume.pdf" className="btn btn-outline-warning btn-lg mt-4">Download CV</a>
          </div>
        </div>
      </div>

      {/* Custom gap */}
      <div className="custom-gap"></div>

      {/* Technologies Section */}
      <div className="mt-5 mb-5">
        <h3 className="fw-bold text-warning mb-5 text-center">Technologies</h3>
        <div className="tech-container">
          <div className="tech-icon animate-zoom-1">
            <FaReact size={50} className="text-primary" />
          </div>
          <div className="tech-icon animate-zoom-2">
            <SiNextdotjs size={50} className="text-light" />
          </div>
          <div className="tech-icon animate-zoom-3">
            <SiExpress size={50} className="text-secondary" />
          </div>
          <div className="tech-icon animate-zoom-4">
            <FaNode size={50} className="text-success" />
          </div>
          <div className="tech-icon animate-zoom-5">
            <FaDatabase size={50} className="text-warning" />
          </div>
        </div>
      </div>
      <hr className="my-2 w-75 mx-auto border border-light" style={{ height: '2px', borderWidth: '2px' }} />

    </section>
    
  );
};

export default About;
