import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";


const ISOResin = () => {
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
        <h2 className="product-title">ISO Resin</h2>
        <p><b>Product Details:</b></p>
        <table>
          <tbody>
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
              <td>35 kg</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>35 kg</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>Clear</td>
            </tr>
            <tr>
              <td>Resistance</td>
              <td>140</td>
            </tr>
            <tr>
              <td>Storage</td>
              <td>Room temperature</td>
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

export default ISOResin
