import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";



const MEKPHardener = () => {
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
        <h2 className="product-title">MEKP Hardener</h2>
        <p><b>Product Details:</b></p>
        <table>
          <tbody>
          <tr>
              <td>Minimum Order Quantity</td>
              <td>30 Kg</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>HE 50</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>Colourless</td>
            </tr>
            <tr>
              <td>Application</td>
              <td>	FRP</td>
            </tr>
            <tr>
              <td>Flash Point</td>
              <td>75 DegreeC</td>
            </tr>
            <tr>
              <td>physical state</td>
              <td>Liquid</td>
            </tr>
            <tr>
              <td>packaging size</td>
              <td>30 Kg.</td>
            </tr>
            <tr>
              <td>Boiling Point</td>
              <td>80 DegreeC</td>
            </tr>
            <tr>
              <td>Density</td>
              <td>1.17 g/cm3</td>
            </tr>
            <tr>
              <td>Formula</td>
              <td>C8H18O6</td>
            </tr>
            <tr>
              <td>CAS No.</td>
              <td>1338-23-4</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>	HDPE Cans.</td>
            </tr>
            <tr>
              <td>Usage/Application</td>
              <td>Manufacture of FRP product</td>
            </tr>
            
          </tbody>
        </table>
        <br/>
        <p>Clear liquid</p>
     
       

      </div>
    </div>
  </div>
  )
}

export default MEKPHardener
