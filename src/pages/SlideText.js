import React, { useState } from 'react';
import '../css/SlideText.css';
import Image1 from '../assets/home3.png';
import Image2 from '../assets/home1.png';
import Image3 from '../assets/home4.png';

const SlideText = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // If you want the content to stay after hovering, comment this out.
    // setIsHovered(false); 
  };

  return (
    <section
      id="slide-text-section"
      className="section-hover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="slide-text-heading">Why Choose Heramb Laboratory Pvt Ltd.?</h3>
      
      <div className="slide-text-wrapper">
        <div className={`slide-item ${isHovered ? 'slide-in' : ''}`}>
          <img src={Image1} alt="Legacy of Trust" className={`slide-image ${isHovered ? 'slide-in-image' : ''}`} />
          <div className={`slide-text-container ${isHovered ? 'slide-in-text' : ''}`}>
            <h3>Legacy of Trust :</h3>
            <p>
              Founded in 1985, Heramb Laboratory has built a legacy of reliability, innovation, and customer satisfaction. As a second-generation company, we are proud to continue our tradition of excellence, backed by decades of expertise.
            </p>
          </div>
        </div>

        <div className={`second-slide-item ${isHovered ? 'second-slide-in' : ''}`}>
          <div className={`second-slide-text ${isHovered ? 'second-slide-in-text' : ''}`}>
            <h3>Tailored Solutions :</h3>
            <p>
               We understand that each project is unique. Our team collaborates closely with clients to develop customized solutions that meet their specific needs, whether in production, testing, or R&D.
            </p>
          </div>
          <img src={Image2} alt="Tailored Solutions" className={`second-slide-image ${isHovered ? 'second-slide-in-image' : ''}`} />
        </div>

        <div className={`slide-item ${isHovered ? 'slide-in' : ''}`}>
          <img src={Image3} alt="Quality Assurance" className={`slide-image ${isHovered ? 'slide-in-image' : ''}`} />
          <div className={`slide-text-container ${isHovered ? 'slide-in-text' : ''}`}>
            <h3>Quality Assurance : </h3>
            <p>
              Our comprehensive approach to quality control ensures that every product leaving our facility meets the highest industry standards. From raw materials to finished products, quality is at the core of what we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideText;
