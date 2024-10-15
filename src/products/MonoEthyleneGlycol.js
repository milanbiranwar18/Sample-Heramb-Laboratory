import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";



const MonoEthyleneGlycol = () => {
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
        <h2 className="product-title">Mono Ethylene Glycol</h2>
        <p><b>Product Details:</b></p>
        <table>
          <tbody>
          <tr>
              <td>Packaging Size</td>
              <td>25-30,100 Liter</td>
            </tr>
            <tr>
              <td>Grade Standard</td>
              <td>Reagent Grade</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Plastic Barrel</td>
            </tr>
            <tr>
              <td>Purity</td>
              <td>	99 Percent</td>
            </tr>
            <tr>
              <td>Form</td>
              <td>Liquid</td>
            </tr>
           
            
          </tbody>
        </table>
        <br/>
        <p>Due to our enormous understanding and massive knowledge of this business, we are involved in offering <b>Mono Ethylene Glycol.</b></p>
     
        <ul>
            <br/>
  <h3>Other Details :</h3>
  <li> Assay &gt; Equal to 95 Percent</li>
  <li>GAS No-10472-24-9</li>
</ul>
      </div>
    </div>
  </div>
  )
}

export default MonoEthyleneGlycol
