import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../App.css';

const Navbar = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Paradise Nursery</Link>
      </div>
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/about">About</Link>
        <Link to="/cart" className="cart-icon">
          🛒
          {totalQuantity > 0 && (
            <span className="cart-count">{totalQuantity}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
