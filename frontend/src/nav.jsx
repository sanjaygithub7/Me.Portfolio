import React, { useState } from 'react';
import logo1 from './images/logo2.svg';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900 fixed w-full top-0 z-30">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
        {/* Logo on the left */}

        <a href="/"><img src={logo1} className="h-10" alt="Logo" /></a>
        

        {/* Centered menud items (hidden on mobile) */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="font-medium flex flex-row space-x-8">
            <li>
              <a href="#skills" className="text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-white" aria-current="page">Skills</a>
            </li>
            <li>
              <a href="#projects" className="text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
            </li>
            <li>
              <a href="#about" className="text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>

        {/* Hamburger button on the right */}
        <div className="flex md:hidden">
          <button 
            data-collapse-toggle="navbar-default" 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-default" 
            aria-expanded={isOpen} 
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

        {/* Dropdown menu for mobile */}
        <div 
          className={`${isOpen ? 'block' : 'hidden'} absolute left-0 w-full md:hidden z-20 bg-white dark:bg-gray-900`} 
          style={{ top: '100%' }} 
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <li>
              <a href="#skills" className="block py-2 px-3 text-white rounded hover:bg-gray-700 dark:text-white" onClick={closeMenu}>Skills</a>
            </li>
            <li>
              <a href="#projects" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={closeMenu}>Projects</a>
            </li>
            <li>
              <a href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={closeMenu}>About</a>
            </li>
            <li>
              <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={closeMenu}>Contact</a>
            </li>
            <li>
              <button 
                className="w-full mt-2 bg-black border-2 border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={closeMenu}
              >
                Resume
              </button>
            </li>
          </ul>
        </div>

        {/* Resume button for desktop view */}
        <button className="hidden md:inline lg:inline bg-black text-white rounded-sm px-3 py-2  mb-1 border-2 border-white hover:bg-white hover:text-black active:text-white active:bg-black">
          Resume
        </button>
      </div>
    </nav>
  );
}
