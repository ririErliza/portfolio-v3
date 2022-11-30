import React from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'
import Image from 'next/image'
import MyPict from '../public/assets/images/Hero.png'
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io5";
import { DiJavascript1 } from "react-icons/di";
import { GrNode } from "react-icons/gr";
import { HiDatabase } from "react-icons/hi";


const Main = () => {
  return (
    <div id='home' className="w-full h-screen text-center">
        <div className="max-w-[1240] w-full h-full mx-auto px-10 flex justify-center items-center">
            <div>
                <div className='flex justify-center mt-20'>
                    <div className='relative'>
                        

                        <div className='h-100%'>
                            <AiFillHtml5 size={20} className='absolute text-[#4656e4] top-0 left-[42%]'/>
                            <IoLogoCss3 size={20}className='absolute text-[#4656e4] top-[25%] right-0'/>
                            <DiJavascript1 size={20}className='absolute text-[#4656e4]  top-[70%] left-[70%]'/>
                            <GrNode size={20} className='absolute text-[#4656e4] top-[25%] left-0'/>
                            <HiDatabase size={20} className='absolute text-[#4656e4] top-[70%] left-[10%]'/>
                        </div>

                        <Image src={MyPict} alt='/' objectFit='cover' width={200} height={100}/>
                    </div>
                    
                </div>
                
                <h1 className='mt-5 py-4 text-gray-700'>Hello, I am <span className='text-[#4656e4]'>Erliza</span></h1>
                <h1 className='py-2 text-gray-700'>Full-Stack Developer</h1>
                <p className="py-4 text-gray-600 max-w-[75%] m-auto">I can work for frontend and backend development in creating websites and web applications.</p>
                <div className='text-[#4656e4]  flex items-center justify-between max-w-[330px] m-auto py-4'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn/>
                            </div>

                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub/>
                            </div>

                            <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail/>
                            </div>

                            <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlinePhone/>
                            </div>
                </div>
            
            </div>
        </div>
 
    </div>
  )
}

export default Main