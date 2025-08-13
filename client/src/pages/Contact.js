import React from "react";
import FormTemplate from "../components/FormTemplate";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Import additional icons
import { FaUser, FaBriefcase, FaComment, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const fields = [
    { name: "name", label: "Full Name", required: true, icon: <FaUser /> },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      icon: <FaEnvelope />,
    },
    { name: "phone", label: "Phone Number", icon: <FaPhone /> },
    { name: "service", label: "Service Interested In", icon: <FaBriefcase /> },
    {
      name: "message",
      label: "Your Message",
      type: "textarea",
      required: true,
      icon: <FaComment />,
    },
  ];

  return (
    <div className="contact-page">
      <div className="contact-header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          We'd love to hear from you. Get in touch with our team today!
        </motion.p>
      </div>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="info-card">
            <h2>Contact Information</h2>
            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3>Office Address</h3>
                <p>
                  Freegani Near Choriya Township, Shujalpur Mandi. Shajapur,
                  Madhya Pradesh 465333
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div>
                <h3>Phone Number</h3>
                <p>+91 9174140853</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div>
                <h3>Email Address</h3>
                <p>team.adstellar@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaInstagram />
              </div>
              <div>
                <h3>Instagram</h3>
                <p>@TheAdstellar</p>
              </div>
            </div>

            <div className="map-container">
              <iframe
                title="Ad Stellar Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.208919655725!2d76.62459831539024!3d23.5002729847633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397cee1a5c8f5d89%3A0x1f1c0a6d5d5c5e5e!2sShajapur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1629999999999!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="form-card">
            <h2>Send Us a Message</h2>
            <FormTemplate formType="contact" fields={fields} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
