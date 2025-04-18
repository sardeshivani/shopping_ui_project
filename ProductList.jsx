
import React from 'react';
import ProductItem from './ProductItem';

export default function ProductList({ products, addToCart }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}
