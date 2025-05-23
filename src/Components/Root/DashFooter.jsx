import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const DashFooter = () => {
  return (

        <footer className="footer flex flex-col md:flex-row justify-between bg-slate-200  items-center p-4  md:px-9">
  <aside className="grid-flow-col items-center">

    <p className='text-gray-800 font-semibold'>All Right's Deserves by Odemy © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="https://github.com/opar2043">
      <FaGithub size={20}></FaGithub>
    </a>
      <a href="https://www.linkedin.com/in/rijoan-rashid-opar/">
      <FaLinkedin size={20}>
      </FaLinkedin>
      </a>

  </nav>
</footer>
  
  )
}

export default DashFooter