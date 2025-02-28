import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section py-5 text-white">
      <div className="container text-center">
        <h2 className="fw-bold text-warning mb-4">Contact Me</h2>
        <p className="lead">Feel free to reach out for collaborations or inquiries.</p>

        <div className="d-flex justify-content-center gap-4 mb-4">
          <a href="mailto:mohomedwazeem729@gmail.com" className="text-white" aria-label="Email">
            <FaEnvelope size={32} />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-profile" className="text-white" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={32} />
          </a>
          <a href="https://github.com" className="text-white" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={32} />
          </a>
        </div>

        <a href="mailto:mohomedwazeem729@gmail.com" className="btn btn-outline-warning">Email Me</a>
      </div>
    </section>
  );
};

export default Contact;
