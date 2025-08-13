import React, { useState } from "react";
import axios from "axios";
import { FaCheck, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const FormTemplate = ({ formType, fields }) => {
  const [formData, setFormData] = useState({ formType });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use environment variable for API URL in production
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
      await axios.post(`${API_URL}/api/forms/submit`, formData);
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        className="success-message"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="success-icon">
          <FaCheck />
        </div>
        <h3>Message Sent Successfully!</h3>
        <p>
          Thank you for contacting us. Our team will get back to you within 24
          hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {fields.map((field) => (
        <div key={field.name} className="form-group">
          <label>
            {field.icon && <span className="input-icon">{field.icon}</span>}
            {field.label}
            {field.required && <span className="required"> *</span>}
          </label>
          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              required={field.required}
              onChange={handleChange}
              placeholder={`Enter your ${field.label.toLowerCase()}...`}
            ></textarea>
          ) : (
            <input
              type={field.type || "text"}
              name={field.name}
              required={field.required}
              onChange={handleChange}
              placeholder={`Enter your ${field.label.toLowerCase()}...`}
            />
          )}
        </div>
      ))}
      <motion.button
        type="submit"
        className="submit-btn"
        disabled={isSubmitting}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <span className="spinner"></span>
        ) : (
          <>
            <FaPaperPlane className="btn-icon" /> Send Message
          </>
        )}
      </motion.button>
    </form>
  );
};

export default FormTemplate;
