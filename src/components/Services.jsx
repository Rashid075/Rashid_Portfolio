// Services.js
import React from 'react';
import { FaReact, FaDatabase, FaLaptopCode } from 'react-icons/fa';
import '../styling/Services.css';

export const Services = () => {
  return (
    <section className="services-section" id="Services">
      <h2 className="services-header">My <span>Services</span></h2>
      <div className="services-container">
        <div className="service-card">
          <FaReact className="service-icon" />
          <h3 className="service-title">Frontend Development</h3>
          <p className="service-description">Building responsive and interactive user interfaces with modern technologies.</p>
        </div>
        <div className="service-card">
          <FaDatabase className="service-icon" />
          <h3 className="service-title">Backend Development</h3>
          <p className="service-description">Designing and implementing scalable and robust backend systems and APIs.</p>
        </div>
        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h3 className="service-title">Fullstack Development</h3>
          <p className="service-description">Expertise in both frontend and backend development for complete solutions.</p>
        </div>
      </div>
    </section>
  );
}
