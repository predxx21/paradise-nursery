import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from '../features/cart/CartSlice';
import Navegar from './Navegar';
import './CartItem.css';

const CartItem = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  // Función para calcular el total del carrito
  const calculateCartTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Función para calcular el costo total por artículo
  const calculateItemTotal = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

  const handleIncrease = (id) => {
    const item = items.find(item => item.id === id);
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  const handleDecrease = (id) => {
    const item = items.find(item => item.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    } else if (item && item.quantity === 1) {
      // Eliminar el artículo si la cantidad llega a cero
      dispatch(removeItem(id));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Próximamente - Funcionalidad de pago en desarrollo');
  };

  const cartTotal = calculateCartTotal();

  if (items.length === 0) {
    return (
      <div>
        <Navegar cartCount={totalQuantity} />
        <div className="empty-cart">
          <h2>Tu carrito está vacío</h2>
          <p>¡Explora nuestras plantas y encuentra la perfecta para ti!</p>
          <Link to="/products" className="continue-shopping-btn">
            Continuar Comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navegar cartCount={totalQuantity} />
      
      <div className="cart-container">
        <h1>Carrito de Compras</h1>
        
        <div className="cart-header">
          <p>Total de artículos: <strong>{totalQuantity}</strong></p>
          <p>Total del carrito: <strong>${cartTotal.toFixed(2)}</strong></p>
        </div>

        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="item-unit-price">Precio unitario: ${item.price.toFixed(2)}</p>
                <p className="item-total-price">
                  Costo total: ${calculateItemTotal(item)}
                </p>
              </div>

              <div className="cart-item-actions">
                <div className="quantity-controls">
                  <button 
                    onClick={() => handleDecrease(item.id)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    onClick={() => handleIncrease(item.id)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>

                <button 
                  onClick={() => handleRemove(item.id)}
                  className="remove-btn"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          
          <div className="summary-row">
            <span>Envío:</span>
            <span>Calculado en el pago</span>
          </div>
          
          <div className="summary-row total">
            <span>Total:</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>

          <button onClick={handleCheckout} className="checkout-btn">
            Proceder al Pago
          </button>

          <Link to="/products" className="continue-shopping-link">
            ← Continuar Comprando
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
