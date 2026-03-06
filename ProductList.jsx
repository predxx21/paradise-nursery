import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
import Navbar from './Navbar';
import '../App.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedProducts, setAddedProducts] = useState(new Set());
  const cartItems = useSelector(state => state.cart.items);

  const products = {
    indoor: [
      {
        id: 1,
        name: "Snake Plant",
        description: "Hard to kill, perfect for beginners",
        price: 25.99,
        image: "/images/plants/snake-plant.jpg",
        category: "Indoor"
      },
      {
        id: 2,
        name: "Monstera Deliciosa",
        description: "Large, tropical leaves with natural holes",
        price: 45.99,
        image: "/images/plants/monstera.jpg",
        category: "Indoor"
      },
      {
        id: 3,
        name: "Peace Lily",
        description: "Elegant white flowers, purifies air",
        price: 29.99,
        image: "/images/plants/peace-lily.jpg",
        category: "Indoor"
      },
      {
        id: 4,
        name: "Fiddle Leaf Fig",
        description: "Popular, large glossy leaves",
        price: 55.99,
        image: "/images/plants/fiddle-leaf.jpg",
        category: "Indoor"
      },
      {
        id: 5,
        name: "ZZ Plant",
        description: "Low maintenance, waxy leaves",
        price: 35.99,
        image: "/images/plants/zz-plant.jpg",
        category: "Indoor"
      },
      {
        id: 6,
        name: "Pothos",
        description: "Trailing vine, easy to propagate",
        price: 19.99,
        image: "/images/plants/pothos.jpg",
        category: "Indoor"
      }
    ],
    outdoor: [
      {
        id: 7,
        name: "Lavender",
        description: "Fragrant purple flowers, attracts bees",
        price: 15.99,
        image: "/images/plants/lavender.jpg",
        category: "Outdoor"
      },
      {
        id: 8,
        name: "Rose Bush",
        description: "Classic red roses, fragrant blooms",
        price: 39.99,
        image: "/images/plants/rose.jpg",
        category: "Outdoor"
      },
      {
        id: 9,
        name: "Hydrangea",
        description: "Large colorful flower clusters",
        price: 34.99,
        image: "/images/plants/hydrangea.jpg",
        category: "Outdoor"
      },
      {
        id: 10,
        name: "Boxwood Shrub",
        description: "Evergreen, perfect for hedges",
        price: 49.99,
        image: "/images/plants/boxwood.jpg",
        category: "Outdoor"
      },
      {
        id: 11,
        name: "Japanese Maple",
        description: "Ornamental tree with red leaves",
        price: 89.99,
        image: "/images/plants/japanese-maple.jpg",
        category: "Outdoor"
      },
      {
        id: 12,
        name: "Azalea",
        description: "Vibrant pink spring flowers",
        price: 29.99,
        image: "/images/plants/azalea.jpg",
        category: "Outdoor"
      }
    ],
    succulents: [
      {
        id: 13,
        name: "Echeveria",
        description: "Rosette-forming succulent",
        price: 12.99,
        image: "/images/plants/echeveria.jpg",
        category: "Succulents"
      },
      {
        id: 14,
        name: "Aloe Vera",
        description: "Medicinal, easy to grow",
        price: 16.99,
        image: "/images/plants/aloe.jpg",
        category: "Succulents"
      },
      {
        id: 15,
        name: "Jade Plant",
        description: "Symbol of good luck",
        price: 19.99,
        image: "/images/plants/jade.jpg",
        category: "Succulents"
      },
      {
        id: 16,
        name: "String of Pearls",
        description: "Trailing succulent with bead-like leaves",
        price: 22.99,
        image: "/images/plants/string-of-pearls.jpg",
        category: "Succulents"
      },
      {
        id: 17,
        name: "Haworthia",
        description: "Small, striped succulent",
        price: 14.99,
        image: "/images/plants/haworthia.jpg",
        category: "Succulents"
      },
      {
        id: 18,
        name: "Sedum Morganianum",
        description: "Burro's tail, trailing succulent",
        price: 24.99,
        image: "/images/plants/sedum.jpg",
        category: "Succulents"
      }
    ]
  };

  const handleAddToCart = (product) => {
  dispatch(addItem(product));  // Cambiado de addToCart a addItem
  setAddedProducts(prev => new Set(prev).add(product.id));
};

  const isProductInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <div>
      <Navbar />
      <div className="products-page">
        <h1>Our Plants Collection</h1>
        
        <section className="category-section">
          <h2>Indoor Plants</h2>
          <div className="products-grid">
            {products.indoor.map(plant => (
              <div key={plant.id} className="product-card">
                <img src={plant.image} alt={plant.name} className="product-image" />
                <div className="product-info">
                  <h3>{plant.name}</h3>
                  <p className="product-description">{plant.description}</p>
                  <p className="product-price">${plant.price.toFixed(2)}</p>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(plant)}
                    disabled={isProductInCart(plant.id)}
                  >
                    {isProductInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="category-section">
          <h2>Outdoor Plants</h2>
          <div className="products-grid">
            {products.outdoor.map(plant => (
              <div key={plant.id} className="product-card">
                <img src={plant.image} alt={plant.name} className="product-image" />
                <div className="product-info">
                  <h3>{plant.name}</h3>
                  <p className="product-description">{plant.description}</p>
                  <p className="product-price">${plant.price.toFixed(2)}</p>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(plant)}
                    disabled={isProductInCart(plant.id)}
                  >
                    {isProductInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="category-section">
          <h2>Succulents</h2>
          <div className="products-grid">
            {products.succulents.map(plant => (
              <div key={plant.id} className="product-card">
                <img src={plant.image} alt={plant.name} className="product-image" />
                <div className="product-info">
                  <h3>{plant.name}</h3>
                  <p className="product-description">{plant.description}</p>
                  <p className="product-price">${plant.price.toFixed(2)}</p>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(plant)}
                    disabled={isProductInCart(plant.id)}
                  >
                    {isProductInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductList;
