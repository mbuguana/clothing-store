import Head from 'next/head';
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  return (
    <>
      <Head>
        <title>Clothing Store</title>
        <meta name="description" content="Browse and shop trendy clothes" />
      </Head>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Clothing Store</h1>
        <ProductGrid />
      </main>
    </>
  );
}
