import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApiProvider } from './Context/ApiContext';
import { CartProvider } from './Context/CartContext';
import { CartApiProvide } from './Context/CartApiContextB';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApiProvider>
    <CartApiProvide>
      <CartProvider>
        <App />
      </CartProvider>
    </CartApiProvide>
  </ApiProvider>
);
