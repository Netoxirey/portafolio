import React from 'react'

function Contact() {
  return (
    <section id="contact" className="w-full pt-20 pb-64 bg-[#4ca8cd] mx-auto"> 
    <div className='container-content flex flex-col gap-5'>
        <h2 className='heading-primary text-center'>Contact Me</h2>
        <p className='text-2xl text-center'>Feel free to reach out to me! Whether you have a question, a project in mind, or just want to connect, I'm here to help. You can use the form below to send me a message, and I'll get back to you as soon as possible. Let's collaborate and create something amazing together!</p>
        <div className='flex flex-col items-center text-lg'>
            <p><span>Email:</span>ernestoserna94@gmail.com</p>
            <p><span>Phone:</span> +52 834 254 7065</p>
        </div>
    </div>
    </section>
  )
}

export default Contact