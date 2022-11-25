import Image from 'next/image'
import React from 'react'
import phone from '../public/assets/images/contact.png'

const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
        <div className='max-w-[1240] mx-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                Contact
            </p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
            {/* left */}
            <div className='col-span-3 lg:col-span-2 w-full h-full  p-4'>
                <div className="lg:p-4 h-full">
                    <div>
                        <Image className='rounded-xl hover:scale-105' src={phone} alt='/' height={200} width={100}/>
                    </div>

                </div>

            </div>

            {/* right */}

            </div>
        </div>
        
    </div>
  )
}

export default Contact