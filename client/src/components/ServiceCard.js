import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`service-card ${expanded ? "expanded" : ""}`}>
      <div className="card-header" onClick={() => setExpanded(!expanded)}>
        <div className="service-icon">
          <service.icon />
        </div>
        <div className="service-title">
          <h3>{service.title}</h3>
          <p>{service.tagline}</p>
        </div>
        <div className="expand-icon">
          {expanded ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>

      <div className="card-content">
        <div className="service-details">
          <p>{service.description}</p>
          <div className="service-offerings">
            <h4>Key Offerings:</h4>
            <ul>
              {service.offerings.map((offering, index) => (
                <li key={index}>{offering}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="service-image">
          <img
            src={process.env.PUBLIC_URL + service.image}
            alt={service.title}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
