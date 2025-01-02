import './card.css';
import ReactStars from 'react-stars';
import { useState, useEffect } from 'react';
import axios from 'axios';


export const Card = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    axios('https://api.escuelajs.co/api/v1/products')
      .then((response) => {
        setProducts(response.data); 
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); 

  return (
    <div className="product-list">
      {products.slice(0, 4).map((product) => (
        <div key={product.id} className="product">
          <div className="item">
            <img className="image" src={product.images[0]} alt={product.title} />
          </div>
          <div className="description">
            <h3>{product.title}</h3>
            <div className="rating">
              <ReactStars count={5} value={product.rating || 4.5} />
            </div>
            <p>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
