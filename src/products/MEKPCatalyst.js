import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";


const MEKPCatalyst = () => {
  return (
    <div className="product-container">
    <div className="product-details">
      <div className="product-image-container">
        <img
          className="product-image"
          src={Image1}
        />
      </div>


      <div className="product-info">
        <h2 className="product-title">MEKP Catalyst</h2>
        <p><b>Product Details:</b></p>
        <table>
          <tbody>
          <tr>
              <td>Minimum Order Quantity</td>
              <td>30 Kg</td>
            </tr>
            
            <tr>
              <td>Form</td>
              <td>Liquid</td>
            </tr>
            <tr>
              <td>Packaging Size</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Pack Type</td>
              <td>Plastic Can</td>
            </tr>
            <tr>
              <td>viscosity</td>
              <td>400 cps</td>
            </tr>
            <tr>
              <td>PH Value</td>
              <td>6-7</td>
            </tr>
            <tr>
              <td>Soluble</td>
              <td>Slightly Soluble</td>
            </tr>
            <tr>
              <td>Purity</td>
              <td>100 Percent</td>
            </tr>
            
          </tbody>
        </table>
        <br/>
        <p>Driven by vision to achieve significant growth in the sector, we are engaged in providing a wide range of<b>Liquid Unsaturated Polyester Resin.</b> Apart from this, our offered resins can be availed by our clients in customized packaging options at industry leading prices.</p>
     
        <ul>
            <br/>
            <h3>Features :</h3>
          <li>Accurate composition</li>
          <li>Effectiveness</li>
          <li>High efficiency</li>
        </ul>

      </div>
    </div>
  </div>
  );
};

export default MEKPCatalyst;
