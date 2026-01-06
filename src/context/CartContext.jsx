// src/context/CartContext.jsx
import { createContext, useState } from 'react';

// 1. Criamos o contexto (a "nuvem")
export const CartContext = createContext();

// 2. Criamos o Provedor (o componente que vai envolver o app)
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // O estado global do carrinho

  // Função para adicionar item
  const addToCart = (product) => {
    // Pegamos o que já tinha no carrinho (...cart) e adicionamos o novo
    setCart([...cart, product]);
  };

  // Função para remover item (pelo ID)
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    // 3. Compartilhamos as variáveis e funções com quem estiver dentro
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children} 
    </CartContext.Provider>
  );
};