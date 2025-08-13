import React from "react";
import Hero from "../components/Hero";
import ServiceHighlights from "../components/ServiceHighlights";
import Testimonials from "../components/Testimonials";
import TeamSection from "../components/TeamSection";

const Home = () => {
  return (
    <div>
      <Hero />

      {/* New Introductory Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Your Partner in Advertising Excellence</h2>
            <p>
              At Ad Stellar, we believe great advertising isn't just about
              selling products - it's about creating meaningful connections. We
              combine creative thinking with data-driven strategies to help your
              brand stand out, connect with your audience, and drive real
              results.
            </p>
            <p>
              Whether you're launching a new product, refreshing your brand, or
              looking to boost engagement, we have the expertise and passion to
              make it happen.
            </p>
          </div>
        </div>
      </section>

      <ServiceHighlights />
      <TeamSection />
      <Testimonials />
    </div>
  );
};

export default Home;
