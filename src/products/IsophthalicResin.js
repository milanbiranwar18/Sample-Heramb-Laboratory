import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";


const IsophthalicResin = () => {
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
        <h2 className="product-title">Isophthalic Resin</h2>
        <p><b>Product Details:</b></p>
        <table>
          <tbody>
          <tr>
              <td>Minimum Order Quantity </td>
              <td>100 Kg</td>
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
              <td>Purity</td>
              <td>97%</td>
            </tr>
            <tr>
              <td>Packaging Size</td>
              <td>35 Litre</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Drum</td>
            </tr>
            <tr>
              <td>Gel Time</td>
              <td>20 Min</td>
            </tr>
            <tr>
              <td>Acid Value</td>
              <td>23 mgkoh/g</td>
            </tr>
            
          </tbody>
        </table>
        <br/>
        <p>Established in year 2020, Heramb Laboratories the leading Manufacturer and Wholesaler of Cobalt Octoate, FRP Resin and many more.</p>
     
       

      </div>
    </div>
  </div>
  )
}

export default IsophthalicResin
