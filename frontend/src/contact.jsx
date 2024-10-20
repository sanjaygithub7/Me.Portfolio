import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z1pcdmi', 'template_8uds61u', form.current, {
        publicKey: 'benmFp2cTFFVW5dqv',

      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Thank you")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };

  return (
    <section id='contact'>
       <form ref={form} onSubmit={sendEmail} className='mx-4 mt-4 pt-14 pb-14'>
      <h6 className='flex justify-center text-3xl font-bold'>Contact Me</h6>
      
      <label className='font-medium text-lg'>Name</label><br />
      <input type="text" name="from_name" className='border border-black w-full py-2 rounded-md mt-2 mb-3' /><br />
      <label className='font-medium text-lg'>Email</label><br />
      <input type="email" name="from_email"  className='border border-black w-full py-2 rounded-md  mt-2  mb-3' /><br />
      <label className='font-medium text-lg'>Message</label><br />
      <textarea name="message"  className='border border-black w-full py-2 rounded-md  mt-2' /><br />
      <div className='flex justify-center'>
      <input type="submit" value="Send" className='flex justify-center cursor-pointer mt-4 mb-6 bg-black text-md text-white px-8 py-3 rounded-lg active:bg-black active:text-white hover:bg-white hover:border-2 hover:text-md border-black hover:text-black ' />
      </div>
     
    </form>

    </section>
   
  )
}
