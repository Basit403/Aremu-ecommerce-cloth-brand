"use client"

import { useCart } from "@/Context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const { cart, totalPrice, totalItems } = useCart();

  const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

  if (!mounted) {
    return <p className="text-center p-8">Loading...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-600">Your cart is empty.</p>
          <Link href="/#products">
            <button className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
              Shop Now
            </button>
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >

              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md object-cover"
              />

              <div className="flex-1 px-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">₦{item.price}</p>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              </div>

              <p className="font-bold">₦{item.price * item.quantity}</p>
            </div>
          ))}

          <div className="flex justify-between text-lg font-semibold pt-4 border-t">
            <span>Total Items:</span>
            <span>{totalItems}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold">
            <span>Total Price:</span>
            <span>₦{totalPrice}</span>
          </div>

          <div className="text-center mt-8">
            <Link href="/payment">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600">
                Proceed to Payment
              </button>
            </Link> 
          </div>
        </div>
      )}
    </div>
  );
}
