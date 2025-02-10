import React, { useEffect, useRef } from 'react';
import heroImage from '../assets/heroImage.png';
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    textRef.current.classList.add('animate-slide-in');
    imageRef.current.classList.add('animate-floating');
  }, []);

  return (
    <section className="hero-section text-white text-center text-lg-start py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 ref={textRef} className="fw-bold">
              Hi, I'm <span className="text-primary">Mohomed Wazeem</span>
            </h1>
            <p className="lead mt-3">
              <span className="text-warning fw-bold">
                <Typewriter
                  options={{
                    strings: ['Full Stack Developer', 'MERN Stack Enthusiast', 'Web App Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </p>
            <p className="animate-fade-in">
              Passionate about building <span className="text-success fw-bold">scalable web applications</span> <br />
              with expertise in <span className="text-info">MERN Stack</span>.
            </p>
            <a href="mailto:mohomedwazeem729@gmail.com" className="btn btn-outline-light mt-4 animate-fade-in">
              Contact Me
            </a>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 text-center text-lg-end mt-4 mt-lg-0">
            <img 
              ref={imageRef}
              src={heroImage} 
              alt="Wazeem" 
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
