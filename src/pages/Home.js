import React, { useState, useRef, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import '../Home.css'; 
import designer from '../assets/Designer.png';
import designer1 from '../assets/Designer1.png';
import designer2 from '../assets/Designer2.png';
import designer3 from '../assets/Designer3.png';
import PopupBoxes from './PopupBoxes';
import Home_page1 from './Home_page1';
import ImageSlider from './ImageSlider';
import SlideText from './SlideText';
import MissionVision from './MissionVision';



function Home() {
  return (
    <div className="home-container">
      {/* Section 1: Introductory Content */}
      <section> <ImageSlider /> </section>

      <section className='company_section1'>
        <ul className='company_ul1'>
          <li className='comapny_li1'>With over three decades of excellence, Heramb Laboratory Pvt Ltd. has been at the forefront of fiber molding and chemical production since 2007. As a second-generation, family-owned company, we blend tradition with innovation, delivering top-tier products that meet the evolving needs of industries worldwide.</li>
        </ul>
        <a href="/about" className="about-button">
          Who We Are →
        </a>
      </section>


      <section><Home_page1 /></section>

      {/* Other Sections */}

      <section>
          <SlideText />
        </section>


      <section className='section2'>
        <h2>Our Expertise and Explore Our Solutions</h2>
        <h3> Manufaacturing / Production</h3>
        <ul>
          <li> Production Excellence: With precision manufacturing processes, we produce high-quality fiber-molded products and chemical solutions tailored to meet industry standards.</li> <li>From concept to completion, we ensure that every step of the production journey adheres to strict quality controls.</li>
          </ul>
          <h3> Testing</h3>
         <ul> <li> Advanced Testing: Our dedicated testing facilities and expert technicians rigorously evaluate all products for durability, safety, and performance.</li> <li>We believe that superior testing is the foundation of reliability, ensuring that our solutions excel in the real world.</li>
         </ul>
         <h3> R & D</h3>
         <ul><li> Research & Development (R&D): Innovation drives us forward. Our R&D team continually explores new materials, techniques, and technologies to deliver cutting-edge solutions that set new benchmarks in the fiber and chemical industries. </li> <li> We're committed to pushing boundaries, enhancing existing products, and pioneering new solutions.</li>
         </ul>
         <h3> Rewards and Recognition</h3>
         <ul><li> Our Achivements : Innovation drives us forward. Our R&D team continually explores new materials, techniques, and technologies to deliver cutting-edge solutions that set new benchmarks in the fiber and chemical industries. </li> <li> We're committed to pushing boundaries, enhancing existing products, and pioneering new solutions.</li>
         </ul>
      </section>

      <section><PopupBoxes /></section>

   

       

    

    </div>
  );
}

export default Home;
