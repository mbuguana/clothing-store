import React from 'react';

const products = [
  {
    id: 1,
    name: 'White T-Shirt',
    price: '$20',
    image: '/images/white-tshirt.jpg',
  },
  {
    id: 2,
    name: 'Denim Jeans',
    price: '$40',
    image: '/images/denim-jeans.jpg',
  },
  {
    id: 3,
    name: 'Black Hoodie',
    price: '$60',
    image: '/images/black-hoodie.jpg',
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg shadow p-4 text-center">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-700">{product.price}</p>
        </div>
      ))}
    </div>
  );
}
