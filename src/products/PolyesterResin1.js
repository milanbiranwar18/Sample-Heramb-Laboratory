import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";



const PolyesterResin1 = () => {
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
        <h2 className="product-title">GP Polyester Resin</h2>
        <p><b>Product Details:</b></p>
        <table>
          <tbody>
          <tr>
              <td>Minimum Order Quantity</td>
              <td>220 Kg</td>
            </tr>
            <tr>
              <td>Grade Standard</td>
              <td>Industrial Grade</td>
            </tr>
            <tr>
              <td>Form</td>
              <td>Liquid</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>Orthopthalic</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>Heramb</td>
            </tr>
            <tr>
              <td>Packaging Size</td>
              <td>35 Kg</td>
            </tr>
            <tr>
              <td>Usage/Application</td>
              <td>FRP</td>
            </tr>
            <tr>
              <td>Density</td>
              <td>1100 kg/m 3</td>
            </tr>
            <tr>
              <td>Melting Point</td>
              <td>175</td>
            </tr>
            <tr>
              <td>Purity</td>
              <td>100%</td>
            </tr>
            
            
          </tbody>
        </table>
        <br/>
        <p>Established in year 2020, Heramb Laboratories the leading Manufacturer and Wholesaler of Cobalt Octoate, FRP Resin and many more. </p>
      </div>
    </div>
  </div>
  )
}

export default PolyesterResin1
