import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartWishlistProvider } from './context/CartWishlistContext';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartWishlistProvider>
        <App />
      </CartWishlistProvider>
    </BrowserRouter>
  </StrictMode>
);
