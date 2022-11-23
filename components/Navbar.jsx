import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../public/assets/images/Logo.png'

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
        <div className="flex justify-between items-center w-full h-full px-2
        2xl:px-16">
            <Image src={Logo} alt='' width='123' height='50'></Image>


            <div>
            <ul className='hidden md:flex'>
                <Link href='/'>
                 <li className="ml-10 text-sm uppercase hover:border-b">Home</li> 
                </Link>

                <Link href='/'>
                 <li className="ml-10 text-sm uppercase hover:border-b">About</li> 
                </Link>

                <Link href='/'>
                 <li className="ml-10 text-sm uppercase hover:border-b">Skills</li> 
                </Link>

                <Link href='/'>
                 <li className="ml-10 text-sm uppercase hover:border-b">Projects</li> 
                </Link>

                <Link href='/'>
                 <li className="ml-10 text-sm uppercase hover:border-b">Contact</li> 
                </Link>
            </ul>
        </div>

        
        </div>
        
    </div>
  )
}

export default Navbar