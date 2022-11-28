import Image from 'next/image'
import React from 'react'
import MyPict from '../public/assets/images/Hero.png'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-4 flex items-center py-16'>
                
        <div className='max-w-[1240] m-auto md:grid grid-cols-3 gap-8'>
                
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>about</p>
                <h2 className='py-4'>Who I Am</h2>
                
                <p className='py-2 text-gray-600'>I am not your normal developer</p>
                <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis id consequuntur mollitia aliquam sed suscipit quo, non maiores enim quae molestiae nostrum quos deleniti, aut omnis repellat illum dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatibus deserunt sed velit modi. Dicta omnis incidunt debitis voluptatum quidem magni accusantium facere optio suscipit corporis, laboriosam sequi ipsam dolorum?</p>
                <p className='py-2 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est adipisci deserunt repellendus quae id tempora animi eius eligendi libero qui. Ratione dolore nostrum tempore labore quas odio, cumque ad nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, assumenda sint. Adipisci sit nulla nemo quibusdam beatae doloremque, illo accusamus fuga distinctio totam, natus ducimus ipsum facilis perspiciatis maxime voluptatibus?</p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-6 hover:scale-105 ease-in duration-300'>
                <Image src={MyPict} alt='' objectFit='cover'/>
            </div>
        </div>
    
    </div>
  )
}

export default About