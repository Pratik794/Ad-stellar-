const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  formType: {
    type: String,
    required: true,
    enum: ["registration", "contact", "enquiry", "booking"],
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  service: String,
  message: String,
  company: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Form", formSchema);
