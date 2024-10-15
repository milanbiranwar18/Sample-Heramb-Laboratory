import React from 'react';
import '../css/Production.css';
import Imgrefresher from '../assets/home9.png';

function Production() {
  return (
    <div className='prod'>
     <section className="image-section">
        <div className="image-container">
          <img 
            src={Imgrefresher} 
            alt="Production Process" 
            className="production-image"
          />
        </div>
      </section>
      
    <section className="production-container">
      <h2 className="production-title">Manufacturing / Production</h2>
      <p className="production-intro">
        At Heramb Laboratory, our manufacturing prowess is centered around delivering high-quality products that drive innovation and efficiency in various industries. Our expertise spans across Fiber Reinforced Plastic (FRP), Methyl Ethyl Ketone Peroxide (MEKP), Cobalt Octate, and Unsaturated Resin. Here’s a closer look at each of our manufactured products:
      </p>
      
      <div className="product-box">
        <h3 className="product-title">Fiber Reinforced Plastic (FRP)</h3>
        <p className="product-overview">
          <strong>Overview:</strong> Fiber Reinforced Plastic (FRP) is a composite material made by reinforcing a plastic matrix with fibers. The result is a lightweight yet robust material that offers superior strength, durability, and resistance to environmental factors.
        </p>
        <ul className="product-applications">
          <strong>Applications:</strong>
          <li>Construction: Used in structural elements and building facades.</li>
          <li>Automotive: Enhances performance parts and body components.</li>
          <li>Marine: Ideal for boat hulls and other marine structures.</li>
          <li>Aerospace: Provides high strength-to-weight ratio for aircraft components.</li>
        </ul>
        <p className="product-expertise">
          <strong>Our Expertise:</strong> We produce FRP products tailored to meet specific industry requirements. Our advanced manufacturing techniques ensure consistent quality and performance across a wide range of applications.
        </p>
      </div>

      <div className="product-box">
        <h3 className="product-title">Methyl Ethyl Ketone Peroxide (MEKP)</h3>
        <p className="product-overview">
          <strong>Overview:</strong> Methyl Ethyl Ketone Peroxide (MEKP) is a crucial catalyst used in the curing process of polyester resins and other composite materials. It facilitates the polymerization process, ensuring that resins achieve their desired strength and durability.
        </p>
        <ul className="product-applications">
          <strong>Applications:</strong>
          <li>FRP Production: Essential for the curing of FRP composites.</li>
          <li>Plastic Manufacturing: Used in various plastic products for improved properties.</li>
          <li>Chemical Industry: Serves as a key component in various chemical reactions.</li>
        </ul>
        <p className="product-expertise">
          <strong>Our Expertise:</strong> We manufacture MEKP with precise control over its chemical properties to ensure reliable and consistent performance in curing applications.
        </p>
      </div>

      <div className="product-box">
        <h3 className="product-title">Cobalt Octate</h3>
        <p className="product-overview">
          <strong>Overview:</strong> Cobalt Octate is a metal catalyst used to accelerate the curing process of unsaturated polyester resins. It plays a vital role in enhancing the efficiency and speed of resin hardening.
        </p>
        <ul className="product-applications">
          <strong>Applications:</strong>
          <li>Resin Curing: Speeds up the curing time for polyester resins, improving production efficiency.</li>
          <li>Composites Manufacturing: Enhances the properties of composite materials by facilitating faster curing.</li>
        </ul>
        <p className="product-expertise">
          <strong>Our Expertise:</strong> Our Cobalt Octate is produced to the highest standards, ensuring optimal performance and compatibility with various resin systems.
        </p>
      </div>

      <div className="product-box">
        <h3 className="product-title">Unsaturated Resin</h3>
        <p className="product-overview">
          <strong>Overview:</strong> Unsaturated Resin is a type of resin that remains liquid until cured with a catalyst. It is widely used in composite materials due to its versatility and excellent mechanical properties.
        </p>
        <ul className="product-applications">
          <strong>Applications:</strong>
          <li>FRP Production: Serves as the matrix in FRP composites.</li>
          <li>Coatings and Adhesives: Used in various coatings and adhesive formulations for enhanced durability.</li>
          <li>Mold Making: Ideal for creating molds and prototypes in manufacturing processes.</li>
        </ul>
        <p className="product-expertise">
          <strong>Our Expertise:</strong> We offer a range of Unsaturated Resin formulations, designed to meet diverse application needs with a focus on quality and performance.
        </p>
      </div>
      
      <p className="production-commitment">
        <strong>Our Commitment to Excellence:</strong> At Haremb Laboratory, we are dedicated to delivering products that not only meet but exceed industry standards. Our state-of-the-art manufacturing processes, rigorous quality control, and commitment to innovation ensure that we provide solutions that enhance performance and reliability for our clients.
      </p>
    </section>
    </div>
  );
}

export default Production;
