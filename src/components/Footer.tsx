import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
      <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-neutral-900 text-white text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <Image src="/aremu.png" alt="logo" width={90} height={90} />
          </Link>
          <p>
            No 2, Central Plaza, Lekki phase 1, Lagos,
            Nigeria.
          </p>
          <span className="font-semibold">hello@aremu.dev</span>
          <span className="font-semibold">+234 70478 03676</span>
          <div className="flex gap-6">
            <Image src="/ff.png" alt="" width={35} height={30} />
            <Image src="/ig.png" alt="" width={35} height={35} />
            <Image src="/twitter.png" alt="" width={30} height={30} />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-bb text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2025 Aremu Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">Nigeria | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">₦ Naira</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
