"use client"

import React from 'react'
import ReactConfetti from 'react-confetti'
import { useWindowSize } from 'react-use'

const PaymentPage = () => {

  const { width, height } = useWindowSize();
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-[calc(100vh-180px)]">
      <ReactConfetti width={width} height={height} />
      <h1 className="text-6xl lg:text-9xl text-green-700">Successful</h1>
      <h2 className="text-xl font-medium">
        Thanks for choosing Aremu.
      </h2>
    </div>
  )
}

export default PaymentPage
