import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  increaseQuantity, 
  decreaseQuantity, 
  removeFromCart,
  clearCart 
} from '../features/cart/CartSlice';
import './CartItem.css';

const CartItem = () => {
  const dispatch = useDispatch();
  const { items, totalAmount, totalQuantity } = useSelector(state => state.cart);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    alert('Próximamente - Funcionalidad de pago en desarrollo');
  };

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Tu carrito está vacío</h2>
        <p>¡Explora nuestras plantas y encuentra la perfecta para ti!</p>
        <Link to="/products" className="continue-shopping-btn">
          Ver Plantas
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Carrito de Compras</h1>
        <p>{totalQuantity} artículo{totalQuantity !== 1 ? 's' : ''}</p>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-price">${item.price.toFixed(2)} c/u</p>
                
                <div className="item-actions">
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
              
              <div className="item-total">
                <p>Subtotal:</p>
                <p className="total-price">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Resumen de Compra</h2>
          
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          
          <div className="summary-row">
            <span>Envío:</span>
            <span>Calculado en el pago</span>
          </div>
          
          <div className="summary-row total">
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>

          <button 
            onClick={handleCheckout}
            className="checkout-btn"
          >
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
