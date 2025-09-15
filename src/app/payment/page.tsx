"use client"

import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

export default function PaymentPage() {
  const [mounted, setMounted] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setMounted(true);
    setSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null; // don't render on the server

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-[calc(100vh-180px)]">
      <ReactConfetti width={size.width} height={size.height} />
      <h1 className="text-6xl lg:text-9xl text-green-700">Successful</h1>
      <h2 className="text-xl font-medium">
        Thanks for choosing Aremu.
      </h2>
    </div>
  );
}
