import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function NavBar() {
  return (
    <header className='border'>
        <nav className='flex justify-between items-center container-content mx-auto py-5'>
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <ul className='md:flex items-center gap-5 hidden '>
                <li>
                    <Link href="/" className='link-primary'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" className='link-primary'>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/projects" className='link-primary'>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <button className='btn-primary rounded-full'>Contact</button>
                    </Link>
                </li>
            </ul>
            <button className='md:hidden'>
                <Image src="/menu-icon.svg" alt="sun icon" width={40} height={40} />
            </button>
        </nav>
    </header>
  )
}

export default NavBar