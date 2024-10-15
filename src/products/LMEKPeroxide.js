import React from 'react'
import Image1 from "../assets/polyester_resin.jpeg";


const LMEKPeroxide = () => {
  return (
    <div className="product-container">
    <div className="product-details">
      <div className="product-image-container">
        <img
          className="product-image"
          alt="Liquid Methyl Ethyl Ketone Peroxide"
          src={Image1}
        />
      </div>

      <div className="product-info">
        <h2 className="product-title">Liquid Methyl Ethyl Ketone Peroxide</h2>
        <p><b>Product Details:</b></p>
        <table>
          <tbody>
          <tr>
              <td>Minimum Order Quantity</td>
              <td>30 Kg</td>
            </tr>
            <tr>
              <td>Grade Standard</td>
              <td>Technical Grade</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>HDPE Carbo Can</td>
            </tr>
            <tr>
              <td>Usage</td>
              <td>Laboratory</td>
            </tr>
            <tr>
              <td>Available Packaging Size</td>
              <td>25 Kg, 30 Kg, 50 Kg</td>
            </tr>
            <tr>
              <td>Physical State</td>
              <td>Liquid</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <p>We offer an effective range of <b>Liquid Methyl Ethyl Ketone Peroxide </b> that is processed with 
            the aid of our experience chemical specialists. These chemicals are extensively used in
             host of applications and applicable in fiberglass reinforced plastic sector. Furthermore,
              recognized as a colorless liquid, these chemicals are ideal to be used as a solvent for a
               majority of resins and also known for their characteristic odor.</p>
        <ul>
            <br/>
            <h3>Features :</h3>
          <li>Accurate composition</li>
          <li>Precise pH value</li>
          <li>Longer shelf life</li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default LMEKPeroxide;