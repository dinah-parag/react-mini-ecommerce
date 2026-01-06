import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext'; // <--- Importe isso
import './App.css';

function App() {
  return (
    <CartProvider> {/* <--- Envelopa TUDO aqui */}
      <BrowserRouter>
        <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <Link to="/" style={{ marginRight: '20px' }}>Vitrine</Link>
                <Link to="/cart">Carrinho</Link>
            </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;