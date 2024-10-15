import React from 'react';
import '../css/MissionVision.css';
import MissionImage from '../assets/Designer.png';
import VisionImage from '../assets/Designer1.png';

const MissionVision = () => {
  return (
    
    <section className="mission-vision-container">
      <div className="mission-box">
        <img src={MissionImage} alt="Our Mission" />
        <h2>Our Mission</h2>
        <p>
          At Heramb Laboratory Pvt Ltd, our mission is to drive innovation, deliver quality, and offer solutions that meet the ever-evolving needs of our customers and society. We strive to maintain our legacy of trust and dedication to excellence.
        </p>
      </div>
      <div className="vision-box">
        <img src={VisionImage} alt="Our Vision" />
        <h2>Our Vision</h2>
        <p>
          Our vision is to be a global leader in the chemical and fiber molding industry, recognized for our unwavering commitment to quality, sustainability, and creating value for all stakeholders through continuous innovation.
        </p>
      </div>
    </section>
   
  );
};

export default MissionVision;
