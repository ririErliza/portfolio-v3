import Image from 'next/image'
import React from 'react'
import Skill1 from '../public/assets/skills/1.png'
import Skillspict from '../public/skillspict.json';

const Skills = () => {
  return (
    <div id='skills' className='w-full md:h-screen px-10 flex items-center py-16'>
        <div className='max-w-[1240] mx-auto flex flex-col justify-center h-full'>
            <div>
            <p className='text-center text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='text-center py-4 mb-4'>What I can Do</h2>
    
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-20  justify-center items-center ">
                    
                    {Skillspict.map((skill) => (
                        <div className="hover:scale-110 ease-in duration-300" key={skill.id}>
                            <Image className='rounded-full' src={skill.image} alt='' width='123' height='50'/>
                            <div className='flex justify-center'>
                                <p>{skill.name}</p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
            
        </div>

    </div>
     
  )
}

export default Skills