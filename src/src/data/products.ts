export interface Product {
  id: number
  name: string
  description: string
  image: string
  price: number
}

export const products: Product[] = [
  {
    id: 1,
    name: "White T-Shirt",
    description: "Classic white cotton t-shirt",
    image: "/images/white-tshirt.jpg",
    price: 1500
  },
  {
    id: 2,
    name: "Denim Jeans",
    description: "Blue slim-fit jeans",
    image: "/images/denim-jeans.jpg",
    price: 2500
  },
  {
    id: 3,
    name: "Black Hoodie",
    description: "Comfy black hoodie for all seasons",
    image: "/images/black-hoodie.jpg",
    price: 3000
  }
]
