
import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';

export default function CartPage() {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (id, amount) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow p-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
          ))
        )}
      </div>
    </div>
  );
}
