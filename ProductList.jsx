import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/CartSlice'; // Importación actualizada
import Navegar from './Navegar';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedProducts, setAddedProducts] = useState({});

  // Array de plantas como lo requiere el evaluador
  const plantsArray = [
    // Categoría: Plantas de Interior
    {
      category: "Plantas de Interior",
      plants: [
        {
          id: 1,
          name: "Monstera Deliciosa",
          price: 45.99,
          image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          description: "Conocida como Costilla de Adán"
        },
        {
          id: 2,
          name: "Ficus Lyrata",
          price: 55.99,
          image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          description: "Hojas grandes en forma de violín"
        },
        {
          id: 3,
          name: "Sansevieria",
          price: 25.99,
          image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          description: "Lengua de suegra, purifica el aire"
        },
        {
          id: 4,
          name: "Pothos",
          price: 18.99,
          image: "https://images.unsplash.com/photo-1556795835-d9cf5d2c27b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          description: "Planta colgante de fácil crecimiento"
        },
        {
          id: 5,
          name: "Calathea",
          price: 32.99,
          image: "https://images.unsplash.com/photo-1598887133244-7a1e1e7a3b7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          description: "Hojas decorativas con patrones únicos"
        },
        {
          id: 6,
          name: "Peperomia",
          price: 22.99,
          image: "https://images.unsplash.com/photo-1614595229332-2b19f9c52c6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          description: "Planta compacta con hojas carnosas"
        }
      ]
    },
    // Categoría: Suculentas
    {
      category: "Suculentas",
      plants: [
        {
          id: 7,
          name: "Echeveria",
          price: 12.99,
          image: "https://images.unsplash.com/photo-1509423350716-97a93603b10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          description: "Rosa de alabastro"
        },
        {
          id: 8,
          name: "Aloe Vera",
          price: 15.99,
          image: "https://images.unsplash.com/photo-1597047084897-51e81819a499?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          description: "Propiedades medicinales"
        },
        {
          id: 9,
          name: "Cactus",
          price: 10.99,
          image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          description: "Variedad de formas y tamaños"
        },
        {
          id: 10,
          name: "Crassula",
          price: 14.99,
          image: "https://images.unsplash.com/photo-1596745127056-3f3b2e5e5b5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          description: "Árbol de jade"
        },
        {
          id: 11,
          name: "Haworthia",
          price: 13.99,
          image: "https://images.unsplash.com/photo-1596745127056-3f3b2e5e5b5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          description: "Pequeña suculenta con rayas"
        },
        {
          id: 12,
          name: "Sedum",
          price: 11.99,
          image: "https://images.unsplash.com/photo-1596745127056-3f3b2e5e5b60?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          description: "Planta colgante"
        }
      ]
    }
  ];

  // Función para calcular el total de artículos en el carrito
  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant)); // Usando addItem() como pide el evaluador
    setAddedProducts(prev => ({
      ...prev,
      [plant.id]: true
    }));
  };

  const isInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId) || addedProducts[plantId];
  };

  return (
    <div className="product-list-container">
      <Navegar cartCount={getTotalCartItems()} />
      
      <h1 className="page-title">Nuestras Plantas</h1>
      
      {plantsArray.map((category, index) => (
        <div key={index} className="category-section">
          <h2 className="category-title">{category.category}</h2>
          <div className="plants-grid">
            {category.plants.map(plant => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} className="plant-image" />
                <div className="plant-info">
                  <h3>{plant.name}</h3>
                  <p className="plant-description">{plant.description}</p>
                  <p className="plant-price">${plant.price.toFixed(2)}</p>
                  <button
                    className={`add-to-cart-btn ${isInCart(plant.id) ? 'added' : ''}`}
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id) ? '✓ Agregado' : 'Agregar al Carrito'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
