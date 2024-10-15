import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";


const LiquidMethylEthylKetone = () => {
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
        <h2 className="product-title">Liquid Methyl Ethyl Ketone</h2>
        <p><b>Product Details:</b></p>
        <table>
          <tbody>
          <tr>
              <td>Minimum Order Quantity</td>
              <td>30 Kg</td>
            </tr>
            <tr>
              <td>Purity %</td>
              <td>AO 9.2%</td>
            </tr>
            <tr>
              <td>CAS No</td>
              <td>	78-93-3</td>
            </tr>
            <tr>
              <td>Packaging Size</td>
              <td>30 kg</td>
            </tr>
            <tr>
              <td>Grade Standard</td>
              <td>Technical Grade</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>30kg HDPE Can</td>
            </tr>
            <tr>
              <td>Usage</td>
              <td>Industrial</td>
            </tr>
            <tr>
              <td>Physical State</td>
              <td>Liquid</td>
            </tr>
            <tr>
              <td>EC No.</td>
              <td>201-159-0</td>
            </tr>
            <tr>
              <td>Density</td>
              <td>1.09 kg/m2</td>
            </tr>
            
            
          </tbody>
        </table>
        <br/>
        <p>Established in year 2020, Heramb Laboratories the leading Manufacturer and Wholesaler of Cobalt Octoate, FRP Resin and many more.</p>
     
       

      </div>
    </div>
  </div>
  );
};

export default LiquidMethylEthylKetone
