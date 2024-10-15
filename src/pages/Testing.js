import React from "react";
import '../css/Testing.css';
import Image1 from '../assets/testing1.png';

function Testing() {
  return (
    <div className="testing">

<section className="section-wrap" id="bannersection">
              <div className="section-container-full">
                  <div className="banner_images_2">
                      <div className="banner_images_desk">
                          <img 
                              src={Image1} 
                              alt="Contact Banner"
                              className="desktop_banner"
                          />
                      </div>
                  </div>
              </div>
          </section>
    <section className="testing-container">
      <h2 className="testing-title">Testing and Quality Assurance</h2>
      <p className="testing-intro">
        At Heramb Laboratory, we understand that rigorous testing and quality assurance are crucial to delivering high-performance products. Our in-house testing facilities and comprehensive analytical and experimental setups ensure that every product meets the highest standards of quality and reliability.
      </p>

      <div className="testing-box">
        <h3 className="testing-subtitle">In-House Testing Facilities</h3>
        <p className="testing-overview">
          <strong>Overview:</strong> Our state-of-the-art in-house testing facilities are designed to conduct a wide range of tests, ensuring that our products perform to their maximum potential. Our testing processes are integral to our commitment to quality and innovation.
        </p>
        <ul className="testing-areas">
          <strong>Key Testing Areas:</strong>
          <li>Mechanical Testing: Evaluates the strength, durability, and elasticity of materials. This includes tensile testing, impact resistance, and fatigue testing.</li>
          <li>Chemical Testing: Assesses the chemical properties and stability of our products. This involves tests for chemical resistance, composition analysis, and reactivity.</li>
          <li>Thermal Testing: Measures the thermal stability and performance of materials under various temperature conditions. This includes heat resistance, thermal cycling, and thermal conductivity tests.</li>
        </ul>
      </div>

      <div className="testing-box">
        <h3 className="testing-subtitle">Analytical Setup</h3>
        <p className="testing-overview">
          <strong>Overview:</strong> Our analytical setup provides precise and detailed insights into the properties and behavior of our products. Utilizing advanced analytical techniques, we ensure accurate and reliable data to support product development and quality control.
        </p>
        <ul className="testing-areas">
          <strong>Key Analytical Techniques:</strong>
          <li>Spectroscopy: Used for identifying chemical compositions and molecular structures, including FTIR (Fourier Transform Infrared Spectroscopy) and UV-Vis Spectroscopy.</li>
          <li>Chromatography: Enables separation and analysis of complex mixtures. Techniques such as HPLC (High-Performance Liquid Chromatography) and GC (Gas Chromatography) are employed.</li>
          <li>Microscopy: Provides detailed imagery and analysis of material structures at microscopic levels. Techniques include SEM (Scanning Electron Microscopy) and optical microscopy.</li>
        </ul>
      </div>

      <div className="testing-box">
        <h3 className="testing-subtitle">Experimental Setup</h3>
        <p className="testing-overview">
          <strong>Overview:</strong> Our experimental setup is geared towards investigating new materials and formulations, optimizing processes, and solving complex technical challenges. This setup supports our commitment to innovation and continuous improvement.
        </p>
        <ul className="testing-areas">
          <strong>Key Experimental Facilities:</strong>
          <li>Material Testing: Includes experimental setups for testing new formulations, composites, and prototypes. This helps in fine-tuning products to meet specific performance criteria.</li>
          <li>Process Simulation: Allows us to simulate and analyze production processes under various conditions to optimize efficiency and quality.</li>
          <li>Prototype Development: Supports the development and testing of prototypes to validate design concepts and performance before full-scale production.</li>
        </ul>
      </div>

      <p className="testing-commitment">
        <strong>Our Commitment to Quality:</strong> Our comprehensive testing, analytical, and experimental capabilities are central to our mission of delivering exceptional products. By leveraging these advanced setups, we ensure that every product we manufacture meets the highest standards of quality and performance. At Heramb Laboratory, we are dedicated to pushing the boundaries of innovation while maintaining the highest levels of quality assurance.
      </p>
    </section>
    </div>
  );
};

export default Testing;
