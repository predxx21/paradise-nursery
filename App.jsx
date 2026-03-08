import React, { useState } from 'react';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  // Estado para controlar qué página mostrar
  const [showProductList, setShowProductList] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'about', 'products', 'cart'

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setCurrentPage('products');
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page === 'products') {
      setShowProductList(true);
    } else {
      setShowProductList(false);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutUs />;
      case 'products':
        return <ProductList />;
      case 'cart':
        return <CartItem />;
      default:
        return null;
    }
  };

  // Si estamos en la página de inicio
  if (currentPage === 'home') {
    return (
      <div className="App">
        <div className="background-image">
          <nav className="navbar">
            <div className="navbar-brand">
              <span onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
                🌿 Paradise Nursery
              </span>
            </div>
            <div className="navbar-menu">
              <span onClick={() => navigateTo('home')} className="nav-link">Inicio</span>
              <span onClick={() => navigateTo('about')} className="nav-link">Sobre Nosotros</span>
              <span onClick={() => navigateTo('products')} className="nav-link">Plantas</span>
              <span onClick={() => navigateTo('cart')} className="cart-icon nav-link">
                🛒
                <span>0</span>
              </span>
            </div>
          </nav>
          
          <div className="home-content">
            <h1>Bienvenido a Paradise Nursery</h1>
            <p>Descubre la mejor selección de plantas de interior para tu hogar</p>
            <button className="start-button" onClick={handleGetStartedClick}>
              Comenzar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Para todas las demás páginas (about, products, cart)
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">
          <span onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
            🌿 Paradise Nursery
          </span>
        </div>
        <div className="navbar-menu">
          <span onClick={() => navigateTo('home')} className="nav-link">Inicio</span>
          <span onClick={() => navigateTo('about')} className="nav-link">Sobre Nosotros</span>
          <span onClick={() => navigateTo('products')} className="nav-link">Plantas</span>
          <span onClick={() => navigateTo('cart')} className="cart-icon nav-link">
            🛒
            <span>0</span>
          </span>
        </div>
      </nav>
      
      <div className="page-content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
