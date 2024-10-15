import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";



const TalcumPowder = () => {
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
        <h2 className="product-title">Talcum Powder</h2>
        <p><b>Product Details:</b></p>
        <table>
          <tbody>
          <tr>
              <td>Form</td>
              <td>Powder</td>
            </tr>
            <tr>
              <td>Fragrance</td>
              <td>Sweet</td>
            </tr>
            <tr>
              <td>Type Of Packaging</td>
              <td>50 kg</td>
            </tr>
            <tr>
              <td>90 % brightness</td>
              <td>		Supper fine</td>
            </tr>    
          </tbody>
        </table>
        <br/>
        <p>Sanjeera/Putti/Talcum Powder
        Established in year 2020, Heramb Laboratories the leading Manufacturer and Wholesaler of Cobalt Octoate, FRP Resin and many more.</p>
     
       
      </div>
    </div>
  </div>
  )
}

export default TalcumPowder;
