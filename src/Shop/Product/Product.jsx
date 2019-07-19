import React from 'react';
import cardImg from '../../images/roxy_giftcard.jpg';
// import './Product.css';

export default function Product({ onAddToCartClick, price, title}) {
  return (
    <div className="Product">
      <img src={cardImg} alt="card"/>
      <h2 className="Product-title">${price} {title}</h2>
      <button id={"$" + price + " " + title} className="Product-buy-button" onClick={onAddToCartClick}>
        Add to cart
      </button>
    </div>
  );
}