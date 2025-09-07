"use client"

import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className=' mt-5 xl:mt-10 xl:ml-20'>
      <div className='flex '>
        <div className='w-1/2 xl:pl-30 xl:mt-20 md:text-[30px] md:ml-10 md:mt-10 sm:ml-5 sm:text-[20px] sm:mt-10'>
          <h1 className='xl:text-[50px]'>TRENDING FASHION</h1>
          <h2 className='xl:text-[40px]'>COLLECTIONS</h2>
          <p className='xl:text-[20px]'>Finding your fashion has never been <br />
            easier.Browse the best selection from Aremu.
          </p>
        </div>

        <div className='w-1/2'>
          <Image src='/Banner.png' alt='banner' width={700} height={10} className='rounded-md' />
        </div>
      </div>
    </div>    


  )
}

export default Banner
