"use client";

import { useParams } from "next/navigation";
import Image from "next/image"
import { products } from "@/Data/products";
import { useCart } from "@/Context/CartContext";
import toast from "react-hot-toast";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="text-center text-2xl mt-20">Product not found</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl w-full">
        
        <div className="flex-1 flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-gray-600 mb-6">₦{product.price}</p>
          <p className="text-gray-700 mb-8">
            {product.description}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => {
                addToCart(product);
                toast.success(`${product.name} added to cart`);
              }}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 cursor-pointer">
              Add to Cart
            </button>
            <button
              onClick={() => history.back()}
              className="bg-gray-200 text-black px-6 py-3 rounded-lg hover:bg-gray-300 cursor-pointer"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


