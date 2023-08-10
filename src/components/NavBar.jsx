'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'

function NavBar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header className='border py-2 sticky top-0 z-50 bg-white'>
        <nav className='flex justify-between items-center container-content mx-auto'>
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
            <ul className='md:flex items-center gap-5 hidden '>
                <li>
                    <Link href="/" className='link-primary'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="#about" className='link-primary'>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="#projects" className='link-primary'>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href="#contact">
                        <button className='btn-primary rounded-full'>Contact <Image src='/mail-icon.svg' width={20} height={20} alt='mail icon'/></button>
                    </Link>
                </li>
            </ul>
            <button className='md:hidden z-50' onClick={() => setNavbarOpen((prevState) => !prevState)}>
                <Image src={`${navbarOpen ? "/cross-icon.svg": "menu-icon.svg"}`} alt="sun icon" width={40} height={40} />
            </button>
        </nav>
        <nav className={`mobile-menu ${navbarOpen && "mobile-menu-active"}`}>
            <Link href="/" className='link-primary'>
                Home
            </Link>
            <Link href="#about" className='link-primary'>
                About
            </Link>
            <Link href="#projects" className='link-primary'>
                Projects
            </Link>
            <Link href="#contact">
                <button className='btn-primary rounded-full'>Contact <Image src='/mail-icon.svg' width={20} height={20} alt='mail icon'/></button>
            </Link>
        </nav>
    </header>
  )
}

export default NavBar