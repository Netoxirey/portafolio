import About from '@/components/About'
import Hero from '@/components/Hero'
import Skills from '@/models/skill'
import React from 'react'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
    </>
  )
}

export default Home