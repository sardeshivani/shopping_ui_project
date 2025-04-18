
import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

const mockProducts = [
  { id: 1, name: 'T-shirt', price: 20, image: '/images/Tshirt.webp' },
  { id: 2, name: 'Jeans', price: 40, image: '/images/Jeans.webp' },
  { id: 3, name: 'Sneakers', price: 60, image: '/images/Sneakers.webp' },
  { id: 4, name: 'HandBag', price: 25, image: '/images/HandBag.png' },
  { id: 5, name: 'Accessories', price: 45, image: '/images/Korean-cliffs.png' },
  { id: 6, name: 'Laptop', price: 70, image: '/images/Electronics.png' },
];

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Explore Our Products</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}
