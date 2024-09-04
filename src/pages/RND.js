import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/RND.css'; 

function RND() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="rnd-section">
      <div className="rnd-content" data-aos="fade-up">
        <h2>Research & Development</h2>
        <p>
          At Heramb Laboratory, innovation drives everything we do. Our R&D division focuses on advancing material science, optimizing processes, and creating cutting-edge solutions for the fiber and chemical industries.
        </p>
        <h3>Our R&D Setup</h3>
        <ul>
          <li>MEKP: Enhancing safety, stability, and performance.</li>
          <li>Cobalt Octate: Optimizing resin curing processes.</li>
          <li>Unsaturated Resins: Developing high-performance, durable formulations.</li>
        </ul>
        <h3>Commitment to Innovation</h3>
        <p>
          Through continuous R&D, we ensure that our products remain at the forefront of the industry, delivering superior quality and performance. We are always exploring new ways to enhance existing products and create innovative solutions that meet the needs of tomorrow.
        </p>
      </div>
    </section>
  );
}

export default RND;
