import React from "react";
import FormTemplate from "../components/FormTemplate";

const Enquiry = () => {
  const fields = [
    { name: "name", label: "Full Name", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone Number" },
    { name: "service", label: "Service Interested In", required: true },
    {
      name: "message",
      label: "Your Enquiry",
      type: "textarea",
      required: true,
    },
  ];

  return (
    <div className="form-page">
      <h1>Service Enquiry</h1>
      <p>Have questions about our services? Send us your enquiry</p>
      <FormTemplate formType="enquiry" fields={fields} />
    </div>
  );
};

export default Enquiry;
