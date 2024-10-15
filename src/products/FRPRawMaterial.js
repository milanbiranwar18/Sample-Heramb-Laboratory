import React from 'react'
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";


const FRPRawMaterial = () => {
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
        <h2 className="product-title">FRP Raw Material</h2>
        <p><b>Product Details:</b></p>
        <table>
          <tbody>
         
            
            <tr>
              <td>Usage/Application</td>
              <td>For making FRP products</td>
            </tr>
           
          </tbody>
        </table>
        <h3>Fiber Reinforced Plastic Raw Material.</h3>
        <br/>
        <p>Heramb Laboratories the leading Manufacturer and Wholesaler of Cobalt Octoate, FRP Resin and many more. </p>
        
      </div>
    </div>
  </div>
  )
}

export default FRPRawMaterial
