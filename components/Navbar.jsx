import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from '../public/assets/images/Logo.png'
import {AiOutlineClose,AiOutlineMenu, AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav]= useState(false)
    const [shadow,setShadow] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }

    useEffect(()=>{
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll',handleShadow)
    },[])

  return (
    <div className={shadow? "fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]" : "fixed w-full h-20 z-[100] bg-[#ecf0f3]"}>
        <div className="flex justify-between items-center w-full h-full px-4
        2xl:px-16">
            <Link href='/'>
                <Image src={Logo} alt='' width='125' height='50'/>
            </Link>
            


            <div>
            <ul className='hidden md:flex'>
                <Link href='/'>
                 <li className="ml-10 text-sm uppercase hover:border-b">Home</li> 
                </Link>

                <Link href='/#about'>
                 <li className="ml-10 text-sm uppercase hover:border-b">About</li> 
                </Link>

                <Link href='/#skills'>
                 <li className="ml-10 text-sm uppercase hover:border-b">Skills</li> 
                </Link>

                <Link href='/#projects'>
                 <li className="ml-10 text-sm uppercase hover:border-b">Projects</li> 
                </Link>

                <Link href='/#contact'>
                 <li className="ml-10 text-sm uppercase hover:border-b">Contact</li> 
                </Link>
            </ul>

            <div onClick={handleNav} className='md:hidden cursor-pointer'>
                
                <AiOutlineMenu size={25}/>
            </div>
        </div>
        </div>


{/* small screen menu */}

        <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ''}>
            
            <div className={nav? 
            "md:hidden fixed flex flex-col justify-between left-0 top-0 w-[75%] sm:w-[60%] m:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            :
            "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>

                {/* top */}
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Link href='/'>
                            <Image src={Logo} alt='/' width='97' height='45'/>
                        </Link>
                        

                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                        <AiOutlineClose/>
                        </div>
                    </div>
                </div>

                {/* middle */}
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Home</li>
                        </Link>

                        <Link href='/'>
                            <li className='py-4 text-sm'>About</li>
                        </Link>

                        <Link href='/'>
                            <li className='py-4 text-sm'>Skills</li>
                        </Link>

                        <Link href='/'>
                            <li className='py-4 text-sm'>Projects</li>
                        </Link>

                        <Link href='/'>
                            <li className='py-4 text-sm'>Contact</li>
                        </Link>
                    </ul>

                    
                </div>

                {/* bottom */}

                <div>
                        <p className='uppercase tracking-widest text-[#5651e5]'>Let´s connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn/>
                            </div>

                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaGithub/>
                            </div>

                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <AiOutlineMail/>
                            </div>

                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <AiOutlinePhone/>
                            </div>
                            
                        </div>
                    </div>

            </div>

        </div>
    </div>
  )
}

export default Navbar