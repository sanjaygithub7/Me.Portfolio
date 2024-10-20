import React from 'react'
import Nav from './nav.jsx'
import Content1 from './content.jsx'
import Skills from './skills.jsx'
import About from './aboutme.jsx'
import Projects from './projects.jsx'
import Contact from './contact.jsx'


export default function portfolio() {
 
  return (
    <main className='font-sora'>
    <Nav/>
    <Content1/>
    <Skills/>
    <About/>
    <Projects/>
    <Contact/>
    </main>
    )
}
