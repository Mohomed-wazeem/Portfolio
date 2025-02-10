import React from 'react';
import projectImage from '../assets/project.jpg';

const Projects = () => {
  return (
    <section id="projects" className="projects-section py-5 text-white">
      <div className="container">
        <h2 className="fw-bold text-warning mb-4 text-center">Projects</h2>
        <div className="row">
          {[1, 2, 3].map((project) => (
            <div key={project} className="col-lg-4 mb-4">
              <div className="card bg-dark text-white shadow-lg">
                {/* Use projectImage instead of project */}
                <img src={projectImage} className="card-img-top" alt={`Project ${project}`} />
                <div className="card-body">
                  <h5 className="card-title">Project {project}</h5>
                  <p className="card-text">Brief description of the project.</p>
                  <a href="#" className="btn btn-outline-warning">View Details</a>
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
