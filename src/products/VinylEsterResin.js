import React from 'react'
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";


const VinylEsterResin = () => {
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
        <h2 className="product-title">Vinyl Ester Resin</h2>

       
        <br/>
        <p>Established in year 2020, Heramb Laboratories the leading Manufacturer and Wholesaler of Cobalt Octoate, FRP Resin and many more.  </p>
      </div>
    </div>
  </div>
  )
}

export default VinylEsterResin;
