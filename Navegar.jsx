import React from 'react';
import { Link } from 'react-router-dom';
import './Navegar.css';

const Navegar = ({ cartCount }) => {
  return (
    <nav className="navegar">
      <div className="nav-brand">
        <Link to="/">🌿 Paradise Nursery</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/products" className="nav-link">Plantas</Link>
        <Link to="/cart" className="nav-link cart-link">
          🛒 Carrito
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navegar;
