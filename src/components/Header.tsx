import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Clothing Store</h1>
      <nav>
        <Link href="/cart">
          <span className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 cursor-pointer">
            🛒 Cart
          </span>
        </Link>
      </nav>
    </header>
  );
}
