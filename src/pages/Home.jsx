import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Importamos o contexto

function Home() {
  // Pegamos a função addToCart lá da "Nuvem"
  const { addToCart } = useContext(CartContext);

  // Produtos "fakes" para teste
  const products = [
    { id: 1, name: 'Camiseta React', price: 50 },
    { id: 2, name: 'Caneca JavaScript', price: 30 },
    { id: 3, name: 'Boné CSS', price: 40 },
  ];

  return (
    <div>
      <h1>Vitrine de Produtos</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
            <h3>{product.name}</h3>
            <p>R$ {product.price},00</p>
            {/* Ao clicar, chama a função do contexto passando o produto atual */}
            <button onClick={() => addToCart(product)}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;