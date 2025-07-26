import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'White T-Shirt',
    price: 19.99,
    image: '/images/white_tshirt.jpg',
  },
  {
    id: 2,
    name: 'Black Hoodie',
    price: 39.99,
    image: '/images/black-hoodie.jpeg',
  },
  {
    id: 3,
    name: 'Denim Jeans',
    price: 49.99,
    image: '/images/denim-jeans.jpg',
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
