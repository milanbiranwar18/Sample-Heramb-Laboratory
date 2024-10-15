import React from 'react';
import '../css/ProductList.css'; 
import image1 from '../assets/home1.png'; 
import image2 from '../assets/home2.png';
import image3 from '../assets/home3.png';
import image4 from '../assets/home4.png';
import image5 from '../assets/home5.png';


const products = [
  {
    name: 'GP Resin',
    imgSrc: image1,  
    url: '/gpresin'
  },
  {
    name: 'Cobalt Octoate',
    imgSrc: image2,
    url: '/cobalt-octoate'
  },
  {
    name: 'Fiberglass',
    imgSrc: image3,
    url: '/fiberglassmart'
  },
  {
    name: 'Polyester Resin',
    imgSrc: image4,
    url: '/polyester-resin'
  },
  {
    name: 'Methyl Ethyl Ketone Peroxide',
    imgSrc: image5,
    url: '/methyl-ethyl-ketone-peroxide'
  },

  {
    name: 'Isophthalic Resins',
    imgSrc: image1,  
    url: '/isophthalic-resins'
  },
  {
    name: 'Hydrogen Peroxide',
    imgSrc: image2,
    url: '/hydrogen-peroxide'
  },
  {
    name: 'FRP Resin',
    imgSrc: image4,
    url: '/frp-resin'
  },
  {
    name: 'Methyl Ethyl Ketone',
    imgSrc: image3,
    url: '/methyl-ethyl-ketone'
  },
 
  {
    name: 'Shoe Rack',
    imgSrc: image5,
    url: '/shoe-rack'
  },

  {
    name: 'Vinyl Ester Resin',
    imgSrc: image1,  
    url: '/vinyl-ester-resin1'
  },
  {
    name: 'Mono Ethylene Glycol',
    imgSrc: image2,
    url: '/mono-ethylene-glycol'
  },
  {
    name: 'Radiator Coolant',
    imgSrc: image3,
    url: '/radiator-coolant'
  },
  {
    name: 'Talcum Powder',
    imgSrc: image4,
    url: '/talcum-powder'
  },
  {
    name: 'Hydrochloric Acid',
    imgSrc: image5,
    url: '/hydrochloric-acid'
  },
];

const ProductList = () => {
  return (
    <div className="products-section">
      <h2 className="products-title">Our Products</h2>
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

export default ProductList;
