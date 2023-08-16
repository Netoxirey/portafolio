import { useState } from 'react'
import { RevealWrapper } from 'next-reveal';
import axios from 'axios';
import Image from 'next/image';

function Form() {
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    }
    if (data.name === "" || data.email === "" || data.message === "") {
      setError(true);
      return;
    }
    axios.post(process.env.NEXT_PUBLIC_API_URL_MAIL, JSON.stringify(data))
    .then(res => console.log(res))
    .catch(err => console.log(err))
    e.target.reset();
    setError(false);
    setSuccess(true);
};
  return (
    <form className='relative flex items-center container-content md:py-20 py-10 -my-44 rounded-3xl  bg-[#f7faff] shadow-2xl' onSubmit={handleSubmit}>
      <RevealWrapper className="flex flex-col w-full items-center gap-5" interval={60} delay={500}> 
        {error && <p className='text-red-500'>Please fill all the fields</p>}
        <label htmlFor="name" className='w-3/4 text-xl'>Your Name</label>
        <input 
        className='w-3/4 p-3 rounded-lg border-2 border-[#4ca8cd]' 
        type="text" 
        placeholder='Ernesto Serna' 
        name='name'
        />
        <label htmlFor="email" className='w-3/4 text-xl'>Your Email</label>
        <input 
        className='w-3/4 p-3 rounded-lg border-2 border-[#4ca8cd]' 
        type="email" 
        placeholder='example@example.com' 
        name='email'
        />
        <label htmlFor="message" className='w-3/4 text-xl'>Write Your Message</label>
        <textarea 
        className='w-3/4 p-3 rounded-lg border-2 border-[#4ca8cd]' 
        name="message" 
        id="message" 
        cols="30" rows="10" 
        placeholder='I would like to speak to you about my idea for a web project.'>
        </textarea>
        <button 
        className='btn-primary w-3/4 rounded-lg mt-auto text-lg'
        type='submit'
        >Send
        <Image src='/send-email-icon.svg' alt='send email icon'
        width={25} height={25}
        />
        </button>
      </RevealWrapper>
      {success && (
        <div className='flex flex-col gap-5 w-full h-full bg-[#f7faff] rounded-3xl justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <Image src='/check-icon.svg' alt='success' 
          width={200} height={200}  
          />
          <p className='heading-primary text-center'>Message sent successfully</p>
        </div>
      )}
    </form>
  )
}

export default Form