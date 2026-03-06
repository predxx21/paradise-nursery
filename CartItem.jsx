import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  removeFromCart, 
  increaseQuantity, 
  decreaseQuantity,
  clearCart 
} from '../features/cart/cartSlice';
import Navbar from './Navbar';
import '../App.css';

const CartItem = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector(state => state.cart);

  const handleCheckout = () => {
    alert('Coming Soon! Our checkout feature is under development.');
  };

  const handleContinueShopping = () => {
    // Navigation handled by Link component
  };

  if (items.length === 0) {
    return (
      <div>
        <Navbar />
        <div className="cart-page">
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any plants to your cart yet.</p>
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        
        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-price">Unit Price: ${item.price.toFixed(2)}</p>
              </div>
              
              <div className="cart-item-quantity">
                <button 
                  className="quantity-btn"
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="quantity-display">{item.quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>
              </div>
              
              <p className="cart-item-total">
                Total: ${item.totalPrice.toFixed(2)}
              </p>
              
              <button 
                className="delete-btn"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        
        <div className="cart-summary">
          <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
          
          <div className="cart-actions">
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
            
            <button 
              className="checkout-btn"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
