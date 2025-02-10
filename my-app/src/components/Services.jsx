import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services-section py-5 text-white">
      <div className="container">
        <h2 className="fw-bold text-warning mb-4 text-center">Services</h2>
        <div className="row">
          {["Web Development", "UI/UX Design", "Backend Development"].map((service, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className="card bg-dark text-white text-center shadow-lg p-3">
                <h5 className="fw-bold">{service}</h5>
                <p>High-quality {service} with modern technologies.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;