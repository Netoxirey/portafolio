'use client'
import { useEffect, useState } from "react"
import axios from "axios"
import { RevealList,RevealWrapper } from "next-reveal"
import Image from "next/image"

function Skills({skills}) {


    return (
        <RevealList  interval={60} delay={500} className="flex flex-col mx-auto container-content md:py-20 py-10 -my-44 rounded-3xl  bg-[#f7faff] shadow-2xl">
            <Image src="/knowledge.svg" alt="book icon" 
            width={100} height={100} 
            className="mx-auto" 
            />
            <h2 className="heading-primary text-center mt-10">Skills</h2>
            <div className="mt-10 flex flex-wrap justify-center gap-10 items-center"> 
            {skills?.map(skill => (
                <div key={skill._id} className="flex flex-col items-center">
                    <Image src={skill.imageUrl} alt={skill.name} width={100} height={100} />
                </div>
            ))}
            </div>
        </RevealList>
    )
}

export default Skills
