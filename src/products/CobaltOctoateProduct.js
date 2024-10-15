import React from 'react'
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";


const CobaltOctoateProduct = () => {
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
        <h2 className="product-title">Cobalt Octoate</h2>
        <p><b>Product Details:</b></p>
        <table>
          <tbody>
          <tr>
              <td>Minimum Order Quantity</td>
              <td>20 Kg</td>
            </tr>
            
            <tr>
              <td>Physical State</td>
              <td>Liquid</td>
            </tr>
            <tr>
              <td>Packaging Size</td>
              <td>20 Kg</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Jar</td>
            </tr>
            <tr>
              <td>Grade Standard</td>
              <td>Reagent Grade</td>
            </tr>
            <tr>
              <td>Usage/Application</td>
              <td>Industrial</td>
            </tr>
            <tr>
              <td>Formula</td>
              <td>C16H30CoO</td>
            </tr>
            <tr>
              <td>Density</td>
              <td>	1.01 g/cm3</td>
            </tr>
            
          </tbody>
        </table>
        <br/>
        <p>Dark blue colour</p>
        <br/>
        <p>Established in year 2020, Heramb Laboratories the leading Manufacturer and Wholesaler of Cobalt Octoate, FRP Resin and many more. </p>
     
      
      </div>
    </div>
  </div>
  )
}

export default CobaltOctoateProduct;
