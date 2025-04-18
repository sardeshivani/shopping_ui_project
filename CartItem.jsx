
import React from 'react';

export default function CartItem({ item, updateQuantity }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-200">
      <div>
        <span className="text-gray-800 font-medium">{item.name}</span>
        <div className="text-sm text-gray-600">${item.price} x {item.quantity}</div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
      </div>
    </div>
  );
}
