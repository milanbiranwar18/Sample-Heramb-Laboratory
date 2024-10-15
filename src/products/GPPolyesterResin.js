import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";


const GPPolyesterResin = () => {
  return (
    <div className="product-container">
      <div className="product-details">
        <div className="product-image-container">
          <img
            className="product-image"
            alt="General Purpose Polyester Resin"
            src={Image1}
          />
        </div>

        <div className="product-info">
          <h2 className="product-title">General Purpose Polyester Resin</h2>
          <p><b>Product Details:</b></p>
          <table>
            <tbody>
              <tr>
                <td>Packaging Size</td>
                <td>25 - 30  Litre</td>
              </tr>
              <tr>
                <td>Form</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Plastic Can</td>
              </tr>
              <tr>
                <td>Purity</td>
                <td>99 Percent</td>
              </tr>
              
            </tbody>
          </table>
          <br/>
          <p>With vast industrial experience, we are involved in offering a wide range of <b>General Purpose Polyester Resin.</b></p>
        </div>
      </div>
    </div>
  );
};

export default GPPolyesterResin;
