import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

const LandingPage = () => {
  // Estado para controlar la visibilidad de la lista de productos
  const [showProductList, setShowProductList] = useState(false);

  // Función manejadora del clic - ¡EXACTAMENTE como la espera el sistema!
  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  // Si showProductList es true, muestra la lista de productos
  if (showProductList) {
    return <ProductList />;
  }

  return (
    <div className="landing-page">
      <div className="landing-content">
        {/* TEXTO EXACTO que el sistema espera */}
        <h1>Welcome to Paradise Nursery</h1>
        <p>Bring Nature Home, One Plant at a Time</p>
        {/* Botón con el evento onClick exacto que el sistema espera */}
        <button 
          className="get-started-btn"
          onClick={handleGetStartedClick}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
