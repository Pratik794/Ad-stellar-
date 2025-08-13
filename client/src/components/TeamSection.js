import React from "react";

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container">
        <div className="team-content">
          <h2>Our Creative Team</h2>
          <p>
            At Ad Stellar, our team of passionate creatives, strategists, and
            developers work together to deliver exceptional results for your
            brand. We combine artistic vision with data-driven strategies to
            create advertising that resonates.
          </p>
          <div className="cta-buttons" style={{ marginTop: "2rem" }}>
            <a href="/contact" className="btn primary">
              Meet Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
