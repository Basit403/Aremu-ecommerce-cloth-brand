"use client"

import React from 'react'
import Link from 'next/link'
import NavIcons from './NavbarIcons'
import Image from 'next/image'

const Navbar = () => {
    return (
    <nav>
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
            {/* MOBILE */}
            <div className="h-full flex items-center justify-between md:hidden">
                <Link href="/">
                    <Image src="/aremu.png" alt="logo" width={90} height={90} className="mt-2" />
                </Link>
                <NavIcons />
            </div>

            {/* BIGGER SCREENS */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
            {/* LEFT */}
            <div className="flex items-center gap-12">
                <Image src="/aremu.png" alt="banner" width={105} height={105} className="mt-5" />

                <div className="hidden xl:flex ml-50 gap-10">
                    <Link href="/">HOMEPAGE</Link>
                    <Link href="/products">ALL PRODUCTS</Link>
                    <Link href="#about">ABOUT</Link>
                </div>    
            </div>

            {/* RIGHT */}
            <div className="flex items-center justify-end gap-8">
                <NavIcons />
            </div>
            </div>
        </div>

        <div className="w-full border-t-2 border-black mt-6"></div>
    </nav>
    )
}

export default Navbar
