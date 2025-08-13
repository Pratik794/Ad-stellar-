import React from "react";
import ServiceCard from "../components/ServiceCard";
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

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Performance Marketing Solutions",
      tagline: "Data-driven campaigns that deliver results",
      icon: FaChartLine,
      description:
        "Our performance marketing strategies combine cutting-edge analytics with creative execution to drive measurable results. We optimize every campaign for maximum ROI, leveraging real-time data to refine targeting and messaging.",
      offerings: [
        "Google Ads (Search & Display Campaigns)",
        "Meta Advertising (Instagram & Facebook Promotions)",
        "Product Launch & Promotion Strategy",
        "ROI-Focused Digital Campaigns",
        "Conversion Rate Optimization",
        "Analytics & Performance Reporting",
      ],
      image: "/images/marketing.jpg",
    },
    {
      id: 2,
      title: "Brand Identity & Creative Design",
      tagline: "Crafting memorable brand experiences",
      icon: FaPalette,
      description:
        "We transform brands through compelling visual identities that resonate with your audience. Our creative team develops cohesive brand systems that communicate your unique value across all touchpoints.",
      offerings: [
        "Logo Design & Brand Identity Development",
        "Reels Editing & Motion Graphics",
        "Social Media Visual Assets",
        "AI-Powered Blogging & Content Graphics",
        "Brand Guidelines & Style Guides",
        "Packaging & Merchandise Design",
      ],
      image: "/images/design.jpg",
    },
    {
      id: 3,
      title: "Visual Production & Media Services",
      tagline: "Captivating visual storytelling",
      icon: FaVideo,
      description:
        "From concept to delivery, our production team creates visually stunning content that engages audiences and drives action. We specialize in creating premium video and photography that elevates your brand.",
      offerings: [
        "Promotional Reels & Ad Shoots",
        "Corporate Video Production",
        "Product Photography",
        "Event & Real-Time Coverage",
        "Drone Videography",
        "3D Animation & Visual Effects",
      ],
      image: "/images/production.jpg",
    },
    {
      id: 4,
      title: "Web & Mobile Development",
      tagline: "Digital experiences that convert",
      icon: FaLaptopCode,
      description:
        "We build responsive, high-performance websites and applications that deliver exceptional user experiences. Our development team creates solutions tailored to your business objectives and audience needs.",
      offerings: [
        "Responsive Website Design",
        "E-commerce Platform Development",
        "Custom Mobile App Development",
        "UI/UX Design & Optimization",
        "Website Maintenance & Support",
        "API Integration & Development",
      ],
      image: "/images/development.jpg",
    },
    {
      id: 5,
      title: "Social Media Strategy & Management",
      tagline: "Building communities that engage",
      icon: FaHashtag,
      description:
        "We develop comprehensive social media strategies that build authentic connections with your audience. Our team creates compelling content, manages communities, and leverages data to drive engagement.",
      offerings: [
        "Strategic Content Planning & Scheduling",
        "Community Engagement Optimization",
        "Influencer Collaboration & Brand Partnerships",
        "Social Media Advertising",
        "Crisis Management & Reputation Monitoring",
        "Performance Analytics & Reporting",
      ],
      image: "/images/social.jpg",
    },
    {
      id: 6,
      title: "Strategic Branding & Market Consulting",
      tagline: "Positioning your brand for success",
      icon: FaLightbulb,
      description:
        "Our strategic consulting services help brands navigate complex markets and position themselves for growth. We provide insights-driven recommendations to strengthen your brand positioning and market presence.",
      offerings: [
        "Brand Positioning & Narrative Development",
        "Rebranding Strategies & Execution",
        "Target Audience & Market Research",
        "Competitive Analysis & Strategy",
        "Brand Architecture Development",
        "Customer Journey Mapping",
      ],
      image: "/images/consulting.jpg",
    },
    {
      id: 7,
      title: "Outdoor Advertising & On-Ground Promotion",
      tagline: "Making an impact in the real world",
      icon: FaBullhorn,
      description:
        "We create eye-catching outdoor campaigns that maximize visibility and impact. From billboards to experiential marketing, we help your brand stand out in physical spaces.",
      offerings: [
        "Pamphlet/Flyer Design & Distribution",
        "Street Hoardings, Billboards & Standees",
        "Retail Branding & In-store Promotions",
        "Event Activation & Experiential Marketing",
        "Vehicle Wraps & Transit Advertising",
        "Public Announcement Scripting",
      ],
      image: "/images/outdoor.jpg",
    },
    {
      id: 8,
      title: "Value-Added Services",
      tagline: "Complementary solutions that enhance your brand",
      icon: FaGift,
      description:
        "Our value-added services provide additional touchpoints to strengthen your brand identity and customer relationships. These premium offerings come complimentary with our packages.",
      offerings: [
        "Custom Visiting Card Design",
        "Branded Calendar with Creative Visual Concepts",
        "Email Signature Design",
        "Corporate Presentation Templates",
        "Social Media Cover Art Bundles",
        "Branded Merchandise Concepts",
      ],
      image: "/images/value.jpg",
    },
  ];

  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Our Advertising Solutions</h1>
        <p>
          Comprehensive services designed to elevate your brand and drive
          measurable results
        </p>
      </div>

      <div className="services-catalog">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
