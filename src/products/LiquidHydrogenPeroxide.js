import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";


const LiquidHydrogenPeroxide = () => {
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
        <h2 className="product-title">Liquid Hydrogen Peroxide</h2>
        <p><b>Product Details:</b></p>
        <table>
          <tbody>
          <tr>
              <td>Grade Standard</td>
              <td>Food</td>
            </tr>
            <tr>
              <td>Packing Size</td>
              <td>50 Liter</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Plastic Can</td>
            </tr>
            <tr>
              <td>Form</td>
              <td>Liquid</td>
            </tr>
            <tr>
              <td>Purity</td>
              <td>99 Percent</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <p>As an authentic name of this domain, we hold expertise in providing a high-quality array of <b>Liquid Hydrogen Peroxide.</b></p>
      </div>
    </div>
  </div>
  )
}

export default LiquidHydrogenPeroxide
