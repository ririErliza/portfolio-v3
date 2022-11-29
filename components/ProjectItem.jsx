import Image from 'next/image'
import Link from 'next/link'


const ProjectItem = ({title,bgImg, projectUrl}) => {
  return (
    <>
        <div className='group relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={bgImg} alt='/'/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                        <p className='pb-4 pt-2 text-white text-center'>React JS</p>
                       
                        <Link href={projectUrl}>
                            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold mb-3'>Link</p>
                        </Link>
                        <Link href={projectUrl}>
                            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold'>Code</p>
                        </Link>
                        
                        
                    </div>
                </div>
    </>
  )
}

export default ProjectItem