'use client'
import About from '@/components/About'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Contact from '@/components/Contact'
import Form from '@/components/Form'

function Home() {

  const [skills, setSkills] = useState([])
  useEffect(() => {
    axios.get("https://portafolio-lilac-six.vercel.app/skills")
    .then(res => setSkills(res.data)) // Actualiza el estado skills con los datos recibidos
    .catch(err => console.log(err))
  }, [])
  return (
    <>
      <Hero />
      <About />
      <Skills skills={skills} />
      <Projects skills={skills}/>
      <Contact />
      <Form />
    </>
  )
}

export default Home