import Head from "next/head"
import { products } from "@/data/products"
import ProductCard from "@/components/ProductCard"

export default function Home() {
  return (
    <>
      <Head>
        <title>Clothing Store</title>
      </Head>
      <main className="min-h-screen p-8 bg-gray-50">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Clothing Store</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  )
}
