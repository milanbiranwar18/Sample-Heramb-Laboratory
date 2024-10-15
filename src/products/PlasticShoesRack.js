import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";



const PlasticShoesRack = () => {
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
        <h2 className="product-title">Plastic Shoes Rack</h2>
        <p><b>Product Details:</b></p>
        <table>
          <tbody>
          <tr>
              <td>No Of Racks</td>
              <td>As Per Requirements</td>
            </tr>
            <tr>
              <td>Number Of Compartment</td>
              <td>As Per Requirements</td>
            </tr>
            <tr>
              <td>Shoe Rack Capacity</td>
              <td>	As Per Requirements</td>
            </tr>
            <tr>
              <td>Storage Type</td>
              <td>Closed Storage</td>
            </tr>

            <tr>
              <td>Color</td>
              <td>All Colors Available</td>
            </tr>

            <tr>
              <td>Height</td>
              <td>As Per Requirements</td>
            </tr>

            <tr>
              <td>Adjustable Rack</td>
              <td>	No</td>
            </tr>
            
            <tr>
              <td>Width</td>
              <td>As Per Requirements</td>
            </tr>
            <tr>
              <td>Door Type</td>
              <td>Hinged Door</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>	As Per Requirements</td>
            </tr>
            <tr>
              <td>Length</td>
              <td>As Per Requirements</td>
            </tr>

            <tr>
              <td>Usage/Application</td>
              <td>All</td>
            </tr>

            <tr>
              <td>Shape</td>
              <td>Rectangular</td>
            </tr>

            <tr>
              <td>Product Type</td>
              <td>	Plastic Storage Drawer</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <p>Heramb Laboratories the leading Manufacturer and Wholesaler of Cobalt Octoate, FRP Resin and many more. </p>

      </div>
    </div>
  </div>
  )
}

export default PlasticShoesRack;
