import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";



const RadiatorCoolant = () => {
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
        <h2 className="product-title">Supers Radiator Coolant</h2>
        <p><b>Product Details:</b></p>
        <table>
          <tbody>
          <tr>
              <td>Brand</td>
              <td>Supers</td>
            </tr>
          <tr>
              <td>Packaging Size</td>
              <td>3.785 L</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Can</td>
            </tr>
            <tr>
              <td>Special Qualities</td>
              <td>Anti Rust</td>
            </tr>
            
            <tr>
              <td>Type of Coolants</td>
              <td>Synthetic Liquid</td>
            </tr>
            <tr>
              <td>Form</td>
              <td>Liquid</td>
            </tr>
           
            
          </tbody>
        </table>
        <br/>
        <p>Being a well-distinguished company in the market, we are into offering <b>Supers Radiator Coolant.</b></p>
     
        <ul>
            <br/>
  <h3>Other Details :</h3>
  <li> Ready To Use</li>
  <li>Do Not Add Water</li>
  <li>Formulated For Anti-Rust, Corrosion & Overheating Protection</li>
</ul>
      </div>
    </div>
  </div>
  )
}

export default RadiatorCoolant;
