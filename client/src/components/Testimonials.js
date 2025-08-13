import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Ad Stellar transformed our brand identity with their creative designs. Our engagement increased by 150%!",
      author: "Rajesh Sharma",
      company: "TechNova Solutions",
    },
    {
      text: "Their performance marketing strategies helped us double our ROI in just 3 months. Highly recommended!",
      author: "Priya Mehta",
      company: "FashionHub",
    },
    {
      text: "The promotional videos created by Ad Stellar went viral across platforms. Exceptional quality and creativity!",
      author: "Vikram Singh",
      company: "FoodieDelight",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>Client Testimonials</h2>
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="quote">"{testimonial.text}"</p>
              <div className="author-info">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
