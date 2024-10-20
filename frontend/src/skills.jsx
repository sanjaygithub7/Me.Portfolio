import React from 'react'
import js from './program/icon-javscript.svg'
import go from './program/go.svg'
import post from './program/postgres.svg'
import python from './program/Python.svg'
import tailwind from './program/icon-tailwindcss.svg'
import react from './program/icon-react.svg'

export default function skills() {
  return (
  <section className="bg-white mt-24 md:mt-16 lg:mt-24 pt-16 pb-10 md:mt-52 lg:mt-20 relative" id='skills'>
  <div className="container mx-auto "> 
  <div className="flex justify-center items-center ">
      <h2 className="text-3xl font-normal">My <span className='text-4xl font-bold'>Skills</span></h2>
    </div>
    <div className="flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-6 md:gap-4 lg:gap-10 mt-12">

        <div className='bg-white size-36 sm:size-24 md:size-28 lg:size-36 border-2 border-black rounded-lg flex flex-col items-center justify-center relative '>
          <img src={js}  className='mx-auto w-1/2 absolute top-[28%] left-8 ' />

        </div>
        <div className='bg-white size-36 sm:size-24 md:size-28 lg:size-36 border-2 border-black rounded-lg flex flex-col items-center justify-center relative'>
          <img src={tailwind}  className='mx-auto w-1/2 absolute top-[38%] left-8' />

        </div>
        <div className='bg-white size-36 sm:size-24 md:size-28 lg:size-36 border-2 border-black rounded-lg flex flex-col items-center justify-center relative'>
          <img src={react}  className='mx-auto w-1/2 absolute top-[28%] left-8' />

        </div>
        <div className='bg-white size-36 sm:size-24 md:size-28 lg:size-36 border-2 border-black rounded-lg flex flex-col items-center justify-center relative'>
          <img src={python}  className='mx-auto w-1/2 absolute top-[28%] left-8' />

        </div>
        <div className='bg-white size-36 sm:size-24 md:size-28 lg:size-36 border-2 border-black rounded-lg flex flex-col items-center justify-center relative'>
          <img src={post}  className='mx-auto w-1/2 absolute top-[28%] left-8' />

        </div>
        <div className='bg-white size-36 sm:size-24 md:size-28 lg:size-36 border-2 border-black rounded-lg flex flex-col items-center justify-center relative'>
          <img src={go}  className='mx-auto w-1/2 absolute top-[28%] left-8' />

        </div>

      </div>
    </div>
  </div>
</section>

  )
}
