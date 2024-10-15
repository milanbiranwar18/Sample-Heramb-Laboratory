import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";


const MethylEthylKetone = () => {
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
        <h2 className="product-title">Methyl Ethyl Keton Peroxide Hardener</h2>
        <p><b>Product Details:</b></p>
        <table>
          <tbody>
          <tr>
              <td>Packaging Size</td>
              <td>40 - 50 Liters</td>
            </tr>
            <tr>
              <td>Grade Standard</td>
              <td>Bio-Tech Grade</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Plastic Can</td>
            </tr>
            <tr>
              <td>Physical State</td>
              <td>Liquid</td>
            </tr>
            
          </tbody>
        </table>
        <br/>
        <p>In order to meet the needs of our valuable clients, we are offering <b>Methyl Ethyl Ketone Peroxide Hardener </b>which is used to increase the reaction rate. Owing to its precise composition and best quality, these products are widely demanded and acclaimed amongst our precious customers.</p>
      
        <ul>
            <br/>
            <h3>Features -</h3>
          <li>Optimum qualityAccurate compositionNominal rates</li>
         
        </ul>

      </div>
    </div>
  </div>
  )
}

export default MethylEthylKetone;
