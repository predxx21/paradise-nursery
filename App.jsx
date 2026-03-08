import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div className="home-page">
              <nav className="navbar">
                <div className="navbar-brand">
                  <Link to="/">🌿 Paradise Nursery</Link>
                </div>
                <div className="navbar-menu">
                  <Link to="/">Inicio</Link>
                  <Link to="/about">Sobre Nosotros</Link>
                  <Link to="/products">Plantas</Link>
                </div>
              </nav>
              <div className="home-content">
                <h1>Bienvenido a Paradise Nursery</h1>
                <p>Descubre la mejor selección de plantas de interior para tu hogar</p>
                <Link to="/products" className="start-button">
                  Comenzar
                </Link>
              </div>
            </div>
          } />
          <Route path="/about" element={
            <>
              <Navbar />
              <AboutUs />
            </>
          } />
          <Route path="/products" element={
            <>
              <Navbar />
              <ProductList />
            </>
          } />
          <Route path="/cart" element={
            <>
              <Navbar />
              <CartItem />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

// Componente Navbar separado para reutilización
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">🌿 Paradise Nursery</Link>
      </div>
      <div className="navbar-menu">
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre Nosotros</Link>
        <Link to="/products">Plantas</Link>
        <Link to="/cart" className="cart-icon">
          🛒
          <span>0</span>
        </Link>
      </div>
    </nav>
  );
};

export default App;
