"use client"

import React from 'react'
import Link from 'next/link'
import NavIcons from './NavbarIcons'
import Image from 'next/image'
import { useState } from 'react'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
    <nav>
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
            {/* MOBILE */}
            <div className="h-full flex items-center justify-between md:hidden relative">
                <button
                    className="p-2 cursor-pointer"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <Image src="/burger-menu.png" alt="menu" width={50} height={50} />
                </button>

                <Link
                    href="/"
                    className="absolute left-1/2 transform -translate-x-1/2"
                >
                    <Image
                    src="/aremu.png"
                    alt="logo"
                    width={90}
                    height={90}
                    className="mt-2"
                    />
                </Link>

                <NavIcons />
            </div>
            {menuOpen && (
                <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-40 flex flex-col items-center py-4 space-y-4">
                    <Link href="/" onClick={() => setMenuOpen(false)}>
                    HOMEPAGE
                    </Link>
                    <Link href="/products" onClick={() => setMenuOpen(false)}>
                    ALL PRODUCTS
                    </Link>
                    <Link href="#about" onClick={() => setMenuOpen(false)}>
                    ABOUT
                    </Link>
                </div>
            )}

            {/* BIGGER SCREENS */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                
                <div className="flex items-center gap-12">
                    <Image src="/aremu.png" alt="banner" width={105} height={105} className="mt-5" />

                    <div className="hidden xl:flex ml-50 gap-10">
                        <Link href="/">HOMEPAGE</Link>
                        <Link href="/products">ALL PRODUCTS</Link>
                        <Link href="#about">ABOUT</Link>
                    </div>    
                </div>

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
