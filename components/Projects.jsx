import ProjectItem from "./ProjectItem"
import img1 from '../public/assets/projects/web-reviver.png'
import img2 from '../public/assets/projects/reviveradmin-page.png'



const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240] mx-auto px-10 py-16'>
            <p className='text-xl uppercase tracking-widest text-[#5651e5]'>Projects</p>
            <h2>What I have Built</h2>
            <div className="grid md:grid-cols-2 gap-8">

                
            <ProjectItem title='NGO Web App' bgImg={img1} projectUrl='/reviverngo'/>
            <ProjectItem title='Admin Panel' bgImg={img2} projectUrl='/ngoadmin'/>
            </div>

        </div>
        
    </div>
  )
}

export default Projects