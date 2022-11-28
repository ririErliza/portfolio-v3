import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import phone from '../public/assets/images/contact.png'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                Contact
            </p>
            <h2 >Get In Touch</h2>

            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full  p-4'>
                    <div className="lg:p-4">
                        <div>
                            <Image className='rounded-xl hover:scale-105' src={phone} alt='/'/>
                        </div>
                    </div>
                </div>

                {/* right */}

                <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                    <div className="p-4">

                        <form>
                            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                <div className="flex flex-col">
                                    <label className='uppercase text-sm py-2' >Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                                <div className="flex flex-col">
                                    <label className='uppercase text-sm py-2' >Phone Number</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' />
                            </div>

                            <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                        </form>
                    </div>

                </div>

            </div>

            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 hover:scale-110 ease-in duration-300'> 
                        <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Contact