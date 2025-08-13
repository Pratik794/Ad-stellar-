import React from "react";
import FormTemplate from "../components/FormTemplate";

const Booking = () => {
  const fields = [
    { name: "name", label: "Full Name", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone Number", required: true },
    { name: "company", label: "Company Name" },
    { name: "service", label: "Service to Book", required: true },
    { name: "date", label: "Preferred Start Date", type: "date" },
    { name: "message", label: "Additional Details", type: "textarea" },
  ];

  return (
    <div className="form-page">
      <h1>Book Advertising Services</h1>
      <p>Schedule your advertising campaign with us</p>
      <FormTemplate formType="booking" fields={fields} />
    </div>
  );
};

export default Booking;
