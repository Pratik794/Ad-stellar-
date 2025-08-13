import React from "react";
import {
  FaChartLine,
  FaPalette,
  FaVideo,
  FaLaptopCode,
  FaHashtag,
  FaLightbulb,
  FaBullhorn,
  FaGift,
} from "react-icons/fa";

const ServiceHighlights = () => {
  const services = [
    {
      icon: <FaChartLine />,
      title: "Performance Marketing Solutions",
      description:
        "We create digital campaigns that actually convert. Using data-driven strategies, we help you reach the right audience at the right time with messages that resonate, turning clicks into customers.",
      image: "/images/marketing.jpg",
    },
    {
      icon: <FaPalette />,
      title: "Brand Identity & Creative Design",
      description:
        "Your brand is more than a logo - it's your story. We craft visual identities that make you unforgettable, from eye-catching logos to social media visuals that stop the scroll.",
      image: "/images/design.jpg",
    },
    {
      icon: <FaVideo />,
      title: "Visual Production & Media Services",
      description:
        "Show, don't just tell. Our production team creates stunning videos and photos that showcase your products and tell your story in ways words never could.",
      image: "/images/production.jpg",
    },
    {
      icon: <FaLaptopCode />,
      title: "Web & Mobile Development",
      description:
        "First impressions matter. We build websites and apps that look amazing on any device while making it easy for customers to find what they need and take action.",
      image: "/images/development.jpg",
    },
    {
      icon: <FaHashtag />,
      title: "Social Media Strategy & Management",
      description:
        "Turn followers into fans. We develop authentic social media strategies that build real connections, spark conversations, and grow your community organically.",
      image: "/images/social.jpg",
    },
    {
      icon: <FaLightbulb />,
      title: "Strategic Branding & Market Consulting",
      description:
        "Find your unique voice in a crowded market. We help you discover what makes you special and how to communicate it effectively to your ideal customers.",
      image: "/images/consulting.jpg",
    },
    {
      icon: <FaBullhorn />,
      title: "Outdoor Advertising & On-Ground Promotion",
      description:
        "Make an impact in the real world. From eye-catching billboards to local events, we help your brand stand out where your customers live, work, and play.",
      image: "/images/outdoor.jpg",
    },
    {
      icon: <FaGift />,
      title: "Value-Added Services",
      description:
        "Little touches that make a big difference. Get professional business cards, branded calendars, and other essentials that keep your business top-of-mind.",
      image: "/images/value.jpg",
    },
  ];

  return (
    <section className="service-highlights">
      <div className="container">
        <div className="section-header">
          <h2>How We Help Your Business Shine</h2>
          <p className="subtitle">
            At Ad Stellar, we don't just create ads - we create connections.
            Here's how our full-service approach helps businesses like yours
            stand out in today's crowded marketplace.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image-container">
                <img
                  src={process.env.PUBLIC_URL + service.image}
                  alt={service.title}
                  className="service-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                  }}
                />
                <div className="service-icon">{service.icon}</div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-container">
          <p className="cta-text">
            Ready to transform your marketing? Let's discuss how we can tailor
            these services to your unique business goals.
          </p>
          <a href="/services" className="btn primary">
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
