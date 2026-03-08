import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/CartSlice'; // Ajusta la ruta según tu estructura

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
