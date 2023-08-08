'use client'
import Image from 'next/image'
import { RevealList } from 'next-reveal'

function About() {
  return (
    <section className='md:py-40 py-10 bg-[#f7faff]'>
        <h2 className='heading-primary text-center'>About</h2>
        <RevealList className='container-content md:grid-two-columns flex flex-col gap-3 items-center mt-10' interval={60} delay={500}>
          <Image src="/profile-image.png" alt="profile" width={300} height={300} className='rounded-full w-full' />
          <div>
          <p className="text-lg leading-relaxed">
            Hello there! I'm <span className="color-effect">Ernesto Serna</span>, a passionate and dedicated full-stack developer with a strong foundation in both front-end and back-end technologies. With a keen eye for detail and a creative mindset, I specialize in crafting seamless digital experiences that blend functionality with aesthetics.
            <br /><br />
            My journey into the world of web development began when I discovered my love for turning ideas into interactive and user-friendly websites. Through continuous learning and hands-on experience, I've honed my skills in HTML, CSS, JavaScript, and various front-end frameworks. On the back end, I thrive in creating robust server-side solutions using technologies like Node.js and databases like MongoDB.
            <br /><br />
            What truly excites me is the opportunity to bring innovative ideas to life. I enjoy tackling challenges head-on and finding elegant solutions that enhance user engagement and satisfaction. My goal is to create web applications that not only meet the technical requirements but also provide an enjoyable and memorable user experience.
            <br /><br />
            Whether it's turning a concept into reality, optimizing performance, or troubleshooting complex issues, I'm committed to delivering high-quality results that exceed expectations. If you're looking for a passionate full-stack developer to join your team or collaborate on exciting projects, I'd love to connect and discuss how we can work together to bring your vision to life.
          </p>
          </div>
        </RevealList>
    </section>
  )
}

export default About