import React from 'react';
import image1 from '../assets/polyester_resin.jpeg'; 
import image2 from '../assets/home2.png';
import image3 from '../assets/home3.png';
import image4 from '../assets/home4.png';
import '../css/ProductList.css'; // Ensure the correct CSS file is imported

const products = [
    {
      name: 'General Purpose Polyester Resin',
      imgSrc: image1,
      url: '/gppolyesterresin'
    },
    {
      name: 'Liquid Methyl Ethyl Ketone Peroxide',
      imgSrc: image2,
      url: '/LMEKPeroxide'
    },
    {
      name: 'GP Resin',
      imgSrc: image3,
      url: '/GPResinProduct'
    },
    {
      name: 'MEKP Catalyst',
      imgSrc: image4,
      url: '/MEKPCatalyst'
    }
];
  
const GPResin = () => {
    return (
      <div className="new-products-section">
        <h2 className="new-products-title">GP Resin</h2>
        <div className="new-products-container">
          {products.map((product, index) => (
            <div className="new-product-card" key={index}>
              <div className="new-product-image-container">
                <img src={product.imgSrc} alt={product.name} className="new-product-image" />
              </div>
              <h3 className="new-product-name">{product.name}</h3>
              <a href={product.url} className="new-product-link" target="_blank" rel="noopener noreferrer">
                View Product
              </a>
            </div>
          ))}
        </div>
      </div>
    );
};
  
export default GPResin;
