import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import Enquiry from "./pages/Enquiry";
import Booking from "./pages/Booking";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/enquire" element={<Enquiry />} />
        <Route path="/book" element={<Booking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
