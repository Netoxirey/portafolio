'use client'
import Image from "next/image"
import Link from "next/link"
import { RevealList, RevealWrapper } from "next-reveal"
function Hero() {
  return (
    <section className="w-full md:py-40 py-10 bg-image">
        <div className="container-content md:grid-two-columns flex flex-col gap-10">
              <RevealList className="flex flex-col gap-5" interval={60} delay={500}>
              <h1 className="heading-primary">Ernesto Serna - <span className="color-effect">Full Stack Developer</span></h1>
              <p className="heading-secondary">Building innovative and scalable solutions for the digital world. Discover my full stack portfolio and see how I can help you achieve your tech goals!</p>
              <div className="flex md:justify-normal justify-center gap-3">
                <Link href="https://github.com/Netoxirey">
                  <Image src="/github-icon.svg" alt="html" width={80} height={80} className="hover:scale-110 transition-transform" />
                </Link>
                <Link href="https://www.linkedin.com/in/ernesto-serna-guerrero/">
                  <Image src="/linkedin-icon.svg" alt="html" width={80} height={80} className="hover:scale-110 transition-transform" />
                </Link>
              </div>
              <div className="flex gap-3 mt-auto">
                <a href="/Ernesto Serna Guerrero Resume.pdf" download="ErnestoSernaResume.pdf" target="_blank" className="btn-primary rounded">
                Download CV 
                <Image src="/arrow-down.svg" width={30} height={30} alt="arrow down"/>
                </a>
                <button className="btn-secondary rounded">
                  Contact Me
                  <Image src="/mail-icon.svg" width={30} height={30} alt="mail icon"/>
                  </button>
              </div>
              </RevealList>
              <RevealWrapper rotate={{x:  12,y:40,z:0}} origin='bottom' delay={200} duration={1000} distance='500px' viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>
              <Image src="/hero-image.svg" alt="logo" width={600} height={600} />
              </RevealWrapper>
        </div>
    </section>
  )
}

export default Hero