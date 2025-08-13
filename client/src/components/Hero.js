import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Transform Your Brand with{" "}
            <span className="highlight">Ad Stellar</span>
          </h1>
          <p>Creative Advertising Solutions for the Digital Age</p>
          <div className="cta-buttons">
            <Link to="/services" className="btn primary">
              Our Services
            </Link>
            <Link to="/contact" className="btn secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
