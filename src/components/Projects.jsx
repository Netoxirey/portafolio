'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { RevealWrapper } from 'next-reveal'
import Link from 'next/link'
function Projects({skills}) {
  const [projects, setProjects] = useState([])
  const [modal, setModal] = useState(false)
  const [projectId , setProjectId] = useState('')
  const [singleProject, setSingleProject] = useState({})
  useEffect(() => {
    axios.get()
      .then(res => {
        setProjects(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_PROJECTS_URL}${projectId}`)
      .then(res => {
        setSingleProject(res.data)
      })
      .catch(err => console.log(err))
  }, [projectId])
  const handleClick = (id) => {
    setProjectId(id)
    setModal(true)
  }
  const skillsImages = {}
  skills.forEach(skill => {
    skillsImages[skill.name] = skill.imageUrl
  })
  return (
    <section className="my-64 container-content" id='projects'>
        <h2 className="heading-primary text-center">My Projects</h2>
        <div className="md:grid-two-columns grid grid-cols-1 gap-5 mt-10">
          {projects.map(project => (
            <RevealWrapper key={project._id} className="shadow-xl overflow-hidden relative group">
              <Image width={600} height={600} src={project.imageUrl} alt={project.name} className='w-full group-hover:scale-125 transition-transform' />
              <div className="overlay group-hover:scale-100">
                <h2 className='heading-secondary text-center text-white'>{project.name}</h2>
                <div className='flex justify-center mt-5 gap-3'>
                  <Link href={project.demoUrl} target='_blank'><button className="btn-primary bg-transparent text-white border rounded-full">Visit Demo</button></Link>
                  <button className='btn-primary bg-transparent text-white border rounded-full' onClick={() =>{handleClick(project._id)}}>More Info</button>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
        <div className={`modal ${modal &&"modal-active"}`}>
          <div className={`flex flex-col relative gap-5 justify-center container-content rounded-3xl overflow-hidden bg-[#f7faff] shadow-2xl transition-transform ${ modal ? "scale-100": "scale-0"}`}>
            <button className="bg-white absolute top-10 right-10 rounded-full p-2" onClick={() => setModal(false)}><Image src="/cross-icon.svg" width={30} height={30} alt='cross icon'/></button>
            <Image width={1300} height={1300} src={singleProject.imageUrl} alt={singleProject.name} className='w-full' />
            <div className=' flex flex-col  gap-3 py-10'>
              <h2 className='uppercase heading-secondary text-center'>{singleProject.name}</h2>
              <div className='flex flex-wrap justify-center gap-3'>
                {singleProject.tags?.map(skill => (
                    <Image key={skill} src={skillsImages[skill]} alt={skill} width={50} height={50} />
                ))}
              </div>
              <p>{singleProject.description}</p>
              <div className='flex justify-center gap-3 mt-auto'>
              {singleProject.demoUrl && <Link href={singleProject.demoUrl} target='_blank'><button className='btn-primary rounded'>Visit Demo</button></Link>}
              {singleProject.githubUrl && <Link href={singleProject.githubUrl} target='_blank'><button className='btn-secondary rounded'>Visit Github</button></Link>}
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Projects