// src/components/ProductGrid.tsx
import React from 'react';

const products = [
  {
    name: 'White T-Shirt',
    price: '$19.99',
    image: '/images/white-tshirt.jpg',
  },
  {
    name: 'Denim Jeans',
    price: '$39.99',
    image: '/images/denim-jeans.jpg',
  },
  {
    name: 'Black Hoodie',
    price: '$29.99',
    image: '/images/black-hoodie.jpg',
  },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div key={index} className="border rounded p-4 shadow">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
          <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
          <p className="text-gray-600">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
