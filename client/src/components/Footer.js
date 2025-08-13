import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="/images/logo.png"
              alt="Ad Stellar"
              style={{ height: "70px", marginBottom: "1rem" }}
            />
            <span className="logo-text">AD STELLAR</span>
            <p>Creative Advertising Solutions</p>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>
              <FaMapMarkerAlt /> Freegani Near Choriya Township, Shajapur, MP
              465333
            </p>
            <p>
              <FaPhone /> 9174140853
            </p>
            <p>
              <FaEnvelope /> team.adstellar@gmail.com
            </p>
            <p>
              <FaInstagram /> @TheAdstellar
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Ad Stellar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
