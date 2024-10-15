import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";


const FiftyPercentHydrogenPeroxide = () => {
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
        <h2 className="product-title">50 Percent Hydrogen Peroxide</h2>
        <p><b>Product Details:</b></p>
        <table>
          <tbody>
          <tr>
              <td>Purity</td>
              <td>50%</td>
            </tr>
          <tr>
              <td>Grade Standard</td>
              <td>Industrial</td>
            </tr>
            <tr>
              <td>Packaging</td>
              <td>30 kg HDPE Drum</td>
            </tr>
            <tr>
              <td>Packing Size</td>
              <td>30 Liter</td>
            </tr>
            <tr>
              <td>Grade</td>
              <td>Industrial</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Can</td>
            </tr>
            <tr>
              <td>Form</td>
              <td>Liquid</td>
            </tr>
            <tr>
              <td>Application</td>
              <td>Bleaching Agent</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <p>Since our commencement, we are immersed in presenting an elite array of <b>50 Percent Hydrogen Peroxide. </b></p>
      </div>
    </div>
  </div>
  )
}

export default FiftyPercentHydrogenPeroxide
