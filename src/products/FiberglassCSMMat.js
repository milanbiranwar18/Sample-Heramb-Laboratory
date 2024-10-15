import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";



const FiberglassCSMMat = () => {
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
        <h2 className="product-title">Fiberglass CSM Mat</h2>
        <p><b>Product Details:</b></p>
        <table>
          <tbody>
          <tr>
              <td>Minimum Order Quantity</td>
              <td>30 Kg</td>
            </tr>
            
            <tr>
              <td>Thickness</td>
              <td>300 gsm</td>
            </tr>
            <tr>
              <td>Material</td>
              <td>Fiberglass</td>
            </tr>
            <tr>
              <td>Roll Width</td>
              <td>1 m</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>	Roll</td>
            </tr>
            <tr>
              <td>Roll Length</td>
              <td>30 Meter</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>White</td>
            </tr>
            <tr>
              <td>Roll Weight</td>
              <td>30 kg</td>
            </tr>
            
          </tbody>
        </table>
        
        <br/>
        
        <p>Established in year 2020, Heramb Laboratories the leading Manufacturer and Wholesaler of Cobalt Octoate, FRP Resin and many more. </p>
     
        

      </div>
    </div>
  </div>
  )
}

export default FiberglassCSMMat
