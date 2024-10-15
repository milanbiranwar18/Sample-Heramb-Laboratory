import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/polyester_resin.jpeg";



const ThreePercentCobaltOctoate = () => {
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
        <h2 className="product-title">3% Cobalt Octoate</h2>
        <p><b>Product Details:</b></p>
        <table>
          <tbody>  
            <tr>
              <td>Physical State</td>
              <td>Liquid</td>
            </tr>
            <tr>
              <td>Packaging Size</td>
              <td>1-10 L</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Plastic Can</td>
            </tr>
            <tr>
              <td>Grade Standard</td>
              <td>Technical Grade</td>
            </tr>
            <tr>
              <td>pH Value</td>
              <td>7-9</td>
            </tr>
            <tr>
              <td>Flash Point</td>
              <td>104 Degree F</td>
            </tr>
            <tr>
              <td>Molecular Formula</td>
              <td>C16H30CoO4</td>
            </tr>
            <tr>
              <td>Density</td>
              <td>	0.779 g/mL</td>
            </tr>
            <tr>
              <td>Purity</td>
              <td>99%</td>
            </tr>
            
          </tbody>
        </table>
        <br/>
       
        <p>We have on offer for our clients an extensive range of <b>3% Cobalt Octoate </b>that is formulated using high-grade compounds. These products are capable of providing accurate performance, which make it one of the most dependable products in the market. Furthermore, we hold specialization in processing these products in accordance with the detailed compositions of our patrons.</p>
     
        <ul>
            <br/>
            <h3>Features :</h3>
          <li>Highly effective</li>
          <li>Perfectly prepared</li>
          <li>Safe packing</li>
          <li>Exact preparation</li>
          <li>Elevated shelf life</li>
          <li>Reliable</li>
        </ul>

        <ul>
            <br/>
            <h3>Our range is used in the following applications :</h3>
          <li>Paint</li>
          <li>Printing ink</li>
          <li>Varnishes</li>
          <li>White enamels</li>
          <li>Insulating varnishes</li>
          <li>Accelerator for polyesters</li>
          
        </ul>
        

      </div>
    </div>
  </div>
  )
}

export default ThreePercentCobaltOctoate
