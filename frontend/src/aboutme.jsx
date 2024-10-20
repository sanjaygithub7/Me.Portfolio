import React from 'react'
import about from './images/aboutme.jpg'

export default function aboutme() {
  return (
    <section className=' mt-16 pt-20 pb-10 md:mt-32 lg:mt-32 mx-12 md:flex md:space-x-20 lg:flex lg:space-x-20' id='about'>
     <img src={about} className='h-80 w-80 md:h-96 md:w-96 lg:h-96 lg:w-96'/>

      <div className='mt-0'>

      <div className="flex justify-center items-center sm:inline  md:inline lg:inline ">
      <h2 className='text-2xl font-normal inline'>About <span className='text-3xl font-bold inline'>Me</span></h2>
      </div>
       
      <div className='mt-6'>
        <p class="mb-4 text-base">I am a passionate frontend developer with expertise in Tailwind CSS, React, Python, and SQL. My journey in web development has equipped me with the skills to create dynamic and responsive user interfaces. Additionally, I also learning Golang and Nodejs for enhancing my backend capabilities.</p>
        <p class="mb-4 text-base hidden lg:inline ">I am always eager to learn new technologies and expand my knowledge base. My dedication to continuous improvement and staying updated with the latest industry trends drives my enthusiasm for web development. I am committed to delivering high-quality, efficient, and scalable solutions. Let's build something amazing together!</p>
        </div>
       
       </div>
       
   </section>
  )
}
