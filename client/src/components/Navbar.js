import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="Ad Stellar"
            className="logo-image"
          />
          <span className="logo-text">AD STELLAR</span>
        </Link>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link to="/register" className="btn" onClick={() => setIsOpen(false)}>
            Register
          </Link>
        </div>

        <div
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
