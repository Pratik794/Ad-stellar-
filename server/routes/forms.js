const express = require("express");
const router = express.Router();
const Form = require("../models/Form");

// Submit form
router.post("/submit", async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
