
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="flex justify-between mb-4">
          <Link to="/" className="text-xl font-bold">ShopEasy</Link>
          <Link to="/cart" className="text-lg">Cart</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}
