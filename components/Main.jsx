import React from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'

const Main = () => {
  return (
    <div id='home' className="w-full h-screen text-center">
        <div className="max-w-[1240] w-full h-full mx-auto p-4 flex justify-center items-center">
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let`s build something together</p>
                <h1 className='py-4 text-gray-700'>Hi, I am <span className='text-[#5651e5]'>Erliza</span></h1>
                <h1 className='py-2 text-gray-700'>A Web Developer & UX Engineer</h1>
                <p className="py-4 text-gray-600 max-w-[75%] m-auto">I am a web developer specializing in building (and occasionally designing) exeptional digital experiences. Currently, I am focused on building responsive front-end web applications while learning back-end technologies.</p>
                <div className='text-[#5651e5]  flex items-center justify-between max-w-[330px] m-auto py-4'>
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