import React from 'react'
import tesla1 from './images/Vector3.png'
import instagram from './images/instagram.png'

export default function projects() {
  return (
    
        <section className='bg-black text-white pb-10 pt-10 ' id='projects'>
      {/* heading */}
      <div className='flex justify-center pt-6 '>
      <h1 className='text-3xl'>My <span className='text-4xl font-bold'>Projects</span></h1>
      </div>

      {/* component1 */}
      <div className='mt-10 lg:mx-20 lg:flex lg:justify-between lg:items-center lg:space-x-10'>
        <div className='flex justify-center'>
        <img src={tesla1} className='h-60 w-60 lg:h-64 lg:w-64' />
      </div>
       <div className='lg:h-80 lg:w-3/4 '>
       <h1 className='text-3xl font-bold  flex justify-center mt-8 '>Tesla UI</h1>
      <p className='mx-10 text-left mt-6 font-light text-lg'>
      Tesla clone showcasing Tailwind's power for complex designs. Responsive layouts mimic Tesla's minimalist aesthetic. Utility classes style vehicle models, features seamlessly. Smooth page transitions, animations delight users. Modular codebase with composable utilities. Leverages customization options for brand integration. Demonstrates real-world applicability, developer productivity boost.
     </p>
     </div>
    </div>

      {/* component2 */}
      <div className='mt-10 lg:mx-20 lg:flex lg:justify-between lg:items-center lg:space-x-10'>
        <div className='flex justify-center'>
        <img src={instagram} className='h-60 w-60 lg:h-64 lg:w-64' />
      </div>
       <div className='lg:h-80 lg:w-3/4 '>
       <h1 className='text-3xl font-bold  flex justify-center mt-8 '>Instagram Clone</h1>
      <p className='mx-10 text-left mt-6 font-light text-lg'>
      Responsive Instagram clone utilizing Tailwind utility classes. Styled post cards, grid layouts mirroring Instagram's feed. Smooth transitions, animations enhance UX. Clean, maintainable codebase leveraging composable utilities. Demonstrates complex design handling, customization options. Modular, reusable components. Exemplifies streamlined development, real-world applicability.
     </p>
     </div>
    </div>
    </section>
      
    
  )
}
 

