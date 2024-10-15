import React from 'react';
import image1 from '../assets/polyester_resin.jpeg'; 
import image2 from '../assets/home2.png';
import image3 from '../assets/home3.png';
import image4 from '../assets/home4.png';
import '../css/GPResin.css';


const products = [
    {
      name: 'Fiberglass CSM Mat',
      imgSrc: image1,
      url: '/fiberglass-csm-mat'
    },
    {
      name: '300GSM Chopped Strand Mat',
      imgSrc: image2,
      url: '/chopped-strand-mat'
    },
    {
      name: 'CSM Mat Emulsion Cut Piece',
      imgSrc: image3,
      url: '/csm-mat-emulsion-cut-piece'
    },
   
  ];
  
  const FiberglassMart = () => {
    return (
      <div className="products-section">
        <h2 className="products-title">Fiberglass Mart</h2>
        <div className="products-container">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image-container">
                <img src={product.imgSrc} alt={product.name} className="product-image" />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <a href={product.url} className="product-link" target="_blank" rel="noopener noreferrer">
                View Product
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FiberglassMart;
  