import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";


const GPResinProduct = () => {
  return (
    <div className="product-container">
    <div className="product-details">
      <div className="product-image-container">
        <img
          className="product-image"
          alt="GP Resin"
          src={Image1}
        />
      </div>

      <div className="product-info">
        <h2 className="product-title">GP Resin</h2>
        <p><b>Product Details:</b></p>
        <table>
          <tbody>
          <tr>
              <td>Minimum Order Quantity</td>
              <td>35 Kg</td>
            </tr>
          <tr>
              <td>Usage/Application</td>
              <td>FRP</td>
            </tr>
            <tr>
              <td>Packaging Size</td>
              <td>50 Litre</td>
            </tr>
            <tr>
              <td>Form</td>
              <td>Liquid</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>Yellow</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td> </td>
            </tr>
            <tr>
              <td>Acid Value</td>
              <td>15-23 mgKOH/g</td>
            </tr>
            <tr>
              <td>Purity</td>
              <td>99 Percent</td>
            </tr>
            <tr>
              <td>Gel time</td>
              <td>25 Degree C</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <p>Yellow color</p>
      </div>
    </div>
  </div>
  )
}

export default GPResinProduct;
