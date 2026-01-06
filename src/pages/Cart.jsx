import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  // Agora pegamos o ARRAY do carrinho e a função de remover
  const { cart, removeFromCart } = useContext(CartContext);

  // Cálculo simples do total
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h1>Meu Carrinho</h1>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              // Usamos index aqui apenas porque podemos ter itens repetidos
              <li key={index} style={{ marginBottom: '10px' }}>
                {item.name} - R$ {item.price},00 
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  style={{ marginLeft: '10px', background: 'red' }}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: R$ {total},00</h3>
        </>
      )}
    </div>
  );
}

export default Cart;