
import React from "react";
import { useNavigate } from "react-router-dom";
import rndImage from '../assets/randd1.png'; 
import testingImage from '../assets/testing.png';
import productionImage from '../assets/home9.png';
import '../css/PopupBoxes.css'; 
import research from '../assets/research.png';


function PopupBoxes() {
  const navigate = useNavigate();

  return (
    <div className="popup-container">
         
         <div>
         <h1>Our Expertise and Explore Our Solutions</h1>
     
      <h3>
      <p>Whether you're looking for advanced fiber products, high-performance chemicals, or expert testing services, Heramb Laboratory Pvt Ltd. is here to deliver.</p> <p> Explore our comprehensive range of solutions and discover how we can help your business thrive.</p></h3>
    </div>

    <div className="popup-box" onClick={() => navigate("/production")}>
        <img src={productionImage} alt="Manufacturing / Production" />
        <h3>Manufacturing / Production</h3>
        {/* <li> Fiber Reinforced Plastic (MEKP & Others)</li>
        <li>Cobalt Octate Unsaturated Resin</li> */}
      </div>
      
      <div className="popup-box" onClick={() => navigate("/testing")}>
        <img src={testingImage} alt="Testing" />
        <h3>Testing</h3>
      </div>

      <div className="popup-box" onClick={() => navigate("/rnd")}>
        <img src={rndImage} alt="R & D" />
        <h3>R & D</h3>
      </div>


      <div className="popup-box" onClick={() => navigate("/rewards")}>
        <img src={research} alt="Rewards" />
        <h3>Rewards and Recognition</h3>
      </div>
    </div>
  );
}

export default PopupBoxes;
