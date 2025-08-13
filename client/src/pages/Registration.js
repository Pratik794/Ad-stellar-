import React from "react";
import FormTemplate from "../components/FormTemplate";

const Registration = () => {
  const fields = [
    { name: "name", label: "Full Name", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone Number", required: true },
    { name: "company", label: "Company Name" },
    { name: "service", label: "Service Interested In" },
  ];

  return (
    <div className="form-page">
      <h1>Client Registration</h1>
      <p>Register with us to get started with our advertising services</p>
      <FormTemplate formType="registration" fields={fields} />
    </div>
  );
};

export default Registration;
