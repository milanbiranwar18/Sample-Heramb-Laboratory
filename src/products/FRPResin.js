import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";


const FRPResin = () => {
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
        <h2 className="product-title">GP Unsaturated Polyester Resin</h2>
        <p><b>Product Details:</b></p>
        <table>
          <tbody>
          <tr>
              <td>Minimum Order Quantity</td>
              <td>70 Kg</td>
            </tr>
          <tr>
              <td>Usage/Application</td>
              <td>FRP</td>
            </tr>
            <tr>
              <td>Form</td>
              <td>	Liquid</td>
            </tr>
            <tr>
              <td>Packaging Size</td>
              <td>35 kg and 220 Kg</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Drum</td>
            </tr>
            <tr>
              <td>Grade Standard</td>
              <td>Industrial Grade</td>
            </tr>
            <tr>
              <td>Purity</td>
              <td>98%</td>
            </tr>
            <tr>
              <td>Ph Value</td>
              <td>7</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <p>Dark yellow color</p>
      </div>
    </div>
  </div>
  )
}

export default FRPResin;
