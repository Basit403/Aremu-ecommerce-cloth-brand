"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/Context/CartContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavIcons() {
  const { cart, clearCart, decreaseQuantity, increaseQuantity, removeFromCart } = useCart();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const totalItems = mounted
    ? cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
    : 0;

  return (
    <div className="relative">
      
      <div onClick={() => setOpen(!open)} className="cursor-pointer relative">
        <Image src="/shopping-cart.png" alt="Cart" width={40} height={40} />

        
        {mounted && totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-0.5 rounded-full">
            {totalItems}
          </span>
        )}
      </div>

      {mounted && open && (
        <div className="absolute right-0 mt-3 w-96 bg-white shadow-lg rounded-lg p-4 z-50">
          <h3 className="font-semibold mb-3 text-xl">My Cart</h3>

          {cart.length === 0 ? (
            <p className="text-sm text-gray-500">Your cart is empty</p>
          ) : (
            <>
              <ul className="space-y-3 max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <li key={item.id} className="flex items-center gap-3 border-b pb-2">
                    
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-md object-cover"
                    />

                    
                    <div className="flex-1">
                      <span className="block font-medium">{item.name}</span>
                      <span className="text-sm text-gray-500">₦{item.price}</span>
                    </div>

                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        —
                      </button>
                      <span className="w-6 text-center">{item.quantity || 1}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <button onClick={() => removeFromCart(item.id)}>
                        <Image 
                          src="/trash.png" 
                          alt="Remove"
                          width={20}
                          height={20}
                          className="cursor-pointer"
                        />
                      </button>
                    </div>  
                  </li>
                ))}
              </ul>

              
              <div className="">
                <div className="flex justify-between text-sm font-medium">
                  <span>Total Items:</span>
                  <span className="text-gray-700">
                    {cart.reduce((sum, item) => sum + (item.quantity || 1), 0)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-medium">
                  <span>Total Price:</span>
                  <span className="text-gray-700">
                    ₦
                    {cart.reduce(
                      (sum, item) => sum + item.price * (item.quantity || 1),
                      0
                    )}
                  </span>
                </div>
              </div>

              
              <div className="mt-4 flex gap-2">
                <button
                  onClick={clearCart}
                  className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600"
                >
                  Remove All
                </button>
                <Link href="/checkout">
                  <button className="w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                    Checkout
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      )}

    </div>
  );
}
