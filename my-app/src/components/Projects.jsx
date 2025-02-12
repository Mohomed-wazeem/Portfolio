import React, { useEffect, useState, useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import projectImage2 from "../assets/prj2.png";
import projectImage3 from "../assets/petPr.jpg";
import projectImage4 from "../assets/port.jpg";



import "../index.css";

const projectData = [
  {
    id: 1,
    title: "Pet Shop Website",
    description: " Contribute a Full stack development in Pet Shop Management System with React. Js, Node.js, Express.Js, and MongoDB, featuring user and admin panels for product browsing, ordering, and management.",
    image: projectImage3,
    link: "https://github.com/Mohomed-wazeem/PetShop_Managment_System",
  },
  {
    id: 2,
    title: "Blogging Platform",
    description: "Developed a Blogging platform with Next.js, Tailwind.css and MongoDB, featuring search functionality",
    image: projectImage2,
    link: "https://github.com/Mohomed-wazeem/Blogging-platform",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A sleek and modern personal portfolio for showcasing work.",
    image: projectImage4,
    link: "https://github.com/Mohomed-wazeem/Portfolio",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="projects-section py-5" ref={sectionRef}>
      <div className="container">
        <h2 className="fw-bold text-center mb-5">
          Our <span className="highlight-text">Projects</span>
        </h2>
        <div className="row">
          {projectData.map((project, index) => (
            <div
              key={project.id}
              className={`col-lg-4 col-md-6 mb-4 project-card-container ${
                isVisible ? "fade-in" : "fade-out"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="overlay">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  <a href={project.link} className="icon-btn" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
