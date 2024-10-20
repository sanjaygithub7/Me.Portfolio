import React from 'react';
import image1 from './images/main.jpg';
import icon1 from './images/LinkedIn.svg';
import icon3 from './images/whatsapp.svg';
import github from './images/github.svg';

export default function Content() {
  return (
    <section
      id='Hero'
      className='mt-24 md:mt-20  lg:flex lg:flex-row-reverse lg:space-x-10 md:mt-16 relative'>
      
      {/* Image Component */}
      <img
        src={image1}
        alt='Main'
        className='h-60 w-120 lg:size-3/6 md:size-10/12 lg:mr-12 ' />

      {/* Text and Links Component */}
      <div className='ml-4 pt-2 mt-10 inline-block md:mx-20 lg:ml-16'>
        
        {/* Name and Title Animation */}
        <p className='text-2xl md:text-4xl lg:text-3xl font-light'>
          Hello I&apos;m{' '}
          <span className='font-extrabold text-3xl md:text-5xl lg:text-4xl ml-2'>
            Sanjay Kumar
          </span>
        </p>

        <div className='flex space-x-4 mt-3 '>
          <p className='text-2xl md:text-4xl lg:text-4xl font-extrabold mt-1'>
            Frontend{' '}
            <span className='text-3xl md:text-4xl lg:text-4xl'>DEVELOPER</span>
          </p>
        </div>

        <p className='mt-5 mr-6 flex justify-center lg:font-light md:font-normal md:text-xl lg:text-base lg:w-full md:mt-4 lg:pr-10 lg:text-left '>
          Front-End Developer specializing in crafting interactive user experiences with HTML, CSS, and JavaScript. Passionate about modern frameworks and delivering visually stunning, highly functional websites.
        </p>

        {/* Social Icons */}
        <div className='flex justify-center items-center mr-5 space-x-5 mt-10 md:mr-20 '>
          {/* LinkedIn Icon */}
          <div className='size-20 md:size-24 border-2 border-black rounded-md relative'>
            <a href='https://www.linkedin.com/in/s-sanjay-kumar7777/'>
              <img
                src={icon1}
                alt='LinkedIn'
                className='mx-auto w-1/2 absolute top-[26%] left-5 md:left-6'
              />
            </a>
          </div>

          {/* GitHub Icon */}
          <div className='size-20 md:size-24 border-2 border-black rounded-md relative'>
            <a href='https://github.com/sanjaygithub7'>
              <img
                src={github}
                alt='GitHub'
                className='mx-auto w-1/2 absolute top-[26%] left-5 md:left-6'
              />
            </a>
          </div>

          {/* WhatsApp Icon */}
          <div className='size-20 md:size-24 border-2 border-black rounded-md relative'>
            <a href='https://wa.me/917418523055'>
              <img
                src={icon3}
                alt='WhatsApp'
                className='mx-auto w-1/2 absolute top-[26%] left-5 md:left-6'
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
