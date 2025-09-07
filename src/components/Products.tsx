"use client"

import Image from "next/image";
import { useCart } from "@/Context/CartContext";


type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  { id: 1, name: "Hoodie Green", price: 15000, image: "/green hoodie.png" },
  { id: 2, name: "Cap Black", price: 5000, image: "/face cap.png" },
  { id: 3, name: "Male Polo Black", price: 8000, image: "/male polo.png" },
  { id: 4, name: "Male Polo Cream", price: 6000, image: "/male polo cream.png" },
  { id: 5, name: "Aremu White", price: 30000, image: "/creaml.png"},
  { id: 6, name: "Hat Cream", price: 10000, image: "/unisex hat.png"},
  { id: 7, name: "Female Cream Top", price: 25000, image: "/female.png"},
  { id: 8, name: "Female Black Top", price: 20000, image: "/female black.png"},
];

export default function ProductList() {

    const { addToCart } = useCart();

  return (
    <div className="p-6">
        <h2 className="text-5xl font-normal text-center mb-8">
            <span className="text-orange-500">Our</span>{" "}
            <span className="text-black">Products</span>
        </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">₦{product.price}</p>
            <button onClick={() => addToCart(product)} className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 cursor-pointer">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
