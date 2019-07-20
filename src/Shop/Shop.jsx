import React, { useState } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import items from '../Api/api';
import Product from './Product/Product';
import Cart from './Cart/Cart';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import shopRoxy from '../images/shop_roxy.png';
// import logo from './logo.svg';
// import './App.css';

export default function App() {
  const [itemsInCart, setItemsInCart] = useState([]);

  const handleAddToCartClick = id => {
    setItemsInCart(itemsInCart => {
      const itemInCart = itemsInCart.find(item => item.id === id);

      // if item is already in cart, update the quantity
      if (itemInCart) {
        return itemsInCart.map(item => {
          if (item.id !== id) return item;
          return { ...itemInCart, quantity: item.quantity + 1 };
        });
      }

      // otherwise, add new item to cart
      const item = items.find(item => item.id.toString().toLowerCase() === id.toString().toLowerCase());
      
      return [...itemsInCart, { ...item, quantity: 1 }];
      
    });
  };

  const handleRemoveFromCart = (e) => {
    e.preventDefault();  
    const id = e.target.id;

    setItemsInCart(itemsInCart => {
        const itemToRemove = itemsInCart.find(item => item.id.toString().toLowerCase() === id.toString().toLowerCase());
        //if item is already in cart, update the quantity
        if (itemToRemove.quantity > 1) {
            return itemsInCart.map(item => {
            if (item.id.toString().toLowerCase() !== id.toString().toLowerCase()) return item;
            return { ...item, quantity: item.quantity - 1 };
            });
        }
  
        // //otherwise, remove item from cart
        const newCart = itemsInCart.filter(item => item.id.toString().toLowerCase() !== id.toString().toLowerCase());
        console.log(newCart);
        return newCart;

    })
  };

  const totalCost = itemsInCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  
  let mapMetaData = itemsInCart.map((item) => {
    const newPair = item.price + ' ' + item.title + ' : ' + item.quantity;
    return newPair;
  });

  let metaData = '';
  mapMetaData.forEach((item) => {
    metaData = metaData !== '' ? metaData = metaData + ', $' + item.toString() : metaData = '$' + item.toString();
  })


  console.log(metaData);

  return (
    <div id="shop" className="App">
      <header className="App-header">
        <img src={shopRoxy} className="shop-logo" alt="logo" />
      </header>
      <main className="App-shop">
        <div className="App-products">
          {items.map(item => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              onAddToCartClick={() => handleAddToCartClick(item.id)}
              
            />
          ))}
        </div>
        <Cart itemsInCart={itemsInCart} totalCost={totalCost} remove={handleRemoveFromCart}/>
        {itemsInCart.length > 0 && (
        <StripeProvider apiKey="pk_live_aoLFcNRL16XnqmLZX0U6TTKS">
            <Elements>
            <CheckoutForm totalCost={totalCost} metaData={metaData}/>
            </Elements>
        </StripeProvider>
        )}
      </main>
    </div>
  );
}