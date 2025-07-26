import Link from "next/link"
import { Product } from "@/data/products"

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition">
      <Link href={`/products/${product.id}`}>
        <div className="w-full h-64 overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="mt-4 text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <p className="text-lg font-bold mt-2">Ksh {product.price}</p>
      </Link>
    </div>
  )
}
