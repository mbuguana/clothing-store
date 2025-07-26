'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartItems } = useCart();
  const itemCount = cartItems.length;

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-gray-800">
        🛍 Clothing Store
      </Link>
      <Link href="/cart" className="relative text-gray-700 hover:text-black text-lg">
        🛒 Cart
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {itemCount}
          </span>
        )}
      </Link>
    </header>
  );
}
