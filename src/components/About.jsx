'use client'
import Image from 'next/image'
import { RevealList } from 'next-reveal'
import Skills from './Skills'

function About() {
  return (
    <section className='pt-20 pb-64 bg-[#4ca8cd]' id='about'>
       <Image src='about-me.svg' alt='me icon'
        width={100} height={100}
        className='mx-auto mb-10'
      />
        <h2 className='heading-primary text-center'>About Me</h2>
        <RevealList className='container-content md:grid-two-columns flex flex-col items-center gap-10 mt-10' interval={60} delay={500}>
          <Image src="/profile-image.png" alt="profile" width={300} height={300} className='rounded-full w-full' />
          <div>
          <p className="text-xl leading-relaxed">
            Hello there! I&apos;m <span>Ernesto Serna</span>, a passionate and dedicated full-stack developer with a strong foundation in both front-end and back-end technologies. With a keen eye for detail and a creative mindset, I specialize in crafting seamless digital experiences that blend functionality with aesthetics.
            <br /><br />
            My journey into the world of web development began when I discovered my love for turning ideas into interactive and user-friendly websites. Through continuous learning and hands-on experience, I&apos;ve honed my skills in HTML, CSS, JavaScript, and various front-end frameworks. On the back end, I thrive in creating robust server-side solutions using technologies like Node.js and databases like MongoDB.
            </p>

          </div>
        </RevealList>
    </section>
  )
}

export default About