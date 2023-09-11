import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApiProvider } from './Context/ApiContext';
import { CartProvider } from './Context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider>
      <CartProvider>
      <App />
      </CartProvider>
    </ApiProvider>
  </React.StrictMode>
);
