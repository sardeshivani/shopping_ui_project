
import React from 'react';

export default function ProductItem({ product, addToCart }) {
  return (
    <div className="border border-gray-200 p-6 rounded-xl shadow-sm bg-white hover:shadow-md transition flex flex-col items-center">
      <img src={product.image} alt={product.name} className="h-40 object-contain mb-4" />
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h2>
      <p className="text-gray-600 mb-4">${product.price}</p>
      <button 
        onClick={() => addToCart(product)} 
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
