"use client"

import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
   <div className="mt-5 xl:mt-10 xl:ml-20">
      <div className="flex flex-col md:flex-row items-center gap-5">    
        <div className="w-full md:w-1/2 xl:pl-30 xl:mt-20 md:text-[30px] md:ml-10 md:mt-10 sm:ml-5 sm:text-[20px] sm:mt-10 text-center md:text-left">
          <h1 className="text-3xl md:text-[30px] xl:text-[50px] font-bold">TRENDING FASHION</h1>
          <h2 className="text-2xl md:text-[25px] xl:text-[40px]">COLLECTIONS</h2>
          <p className="text-base md:text-lg xl:text-[20px] mt-2">
            Finding your fashion has never been <br />
            easier. Browse the best selection from Aremu.
          </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/Banner.png"
          alt="banner"
          width={700}
          height={500}
          className="rounded-md w-full h-auto object-contain"
        />
      </div>
    </div>
  </div>


  )
}

export default Banner
