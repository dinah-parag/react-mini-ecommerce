import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar Fixa: aparece em todas as páginas */}
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '20px' }}>Home (Vitrine)</Link>
        <Link to="/cart">Carrinho</Link>
      </nav>

      {/* Área que muda de acordo com a URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;