import React from 'react'
import '../utils/Footer.css'
import { images } from '../constants/images'
import { icons } from '../constants/icons'
import { links } from '../constants/links'

const Footer = () => {
  return (
    <div className='text-white mt-20 bg-indigo-600/30 py-8'>
      <div className="flex ml-20 gap-35">
        {/* left-box */}
        <div className="">
          <div className="flex items-center gap-1 bg-blue-900 rounded-3xl pr-4">
            <img src={images.logo} alt="Logo" className='rounded-full w-11' />
            <p className='font-mono text-2xl font-bold text-indigo-50'>Aravind Dakshan D</p>
          </div>
          <div className="ml-8 mt-3 share-tech-regular text-indigo-100">
            <p>Whitefield, Bangalore - 560067</p>
            <p><span>Email:</span> dakshandaravind@gmail.com</p>
            <p><span>Mobile:</span> 8088276220</p>
          </div>
        </div>

        {/* right-box */}
        <div className="flex gap-10 mt-2">
          <p className='text-xl poppins-regular border-b-2 border-indigo-500 h-fit text-indigo-300'>Quick Access</p>
            <div className="flex flex-col gap-2 mt-5 text-indigo-50">
              <a href="#" className='hover:underline transition-all delay-75 duration-200'>Home</a>
              <a href="#about" className='hover:underline transition-all delay-75 duration-200'>About</a>
              <a href="#skills" className='hover:underline transition-all delay-75 duration-200'>Skills</a>
            </div>
            <div className="flex flex-col gap-2 mt-5 text-indigo-50">
              <a href="#projects" className='hover:underline transition-all delay-75 duration-200'>Projects</a>
              <a href="#achievements" className='hover:underline transition-all delay-75 duration-200'>Achivements</a>
            </div>
        </div>

        {/* links */}
          <div className="flex mt-2">
            <p className='text-xl poppins-regular border-b-2 border-indigo-500 h-fit text-indigo-300'>Follow us</p>
            <div className="flex gap-4 ml-5 items-center">
              <a href={links.gitHub}><img src={icons.gitHub2} alt="Github" className='w-12 h-12 hover:scale-102 cursor-pointer' /></a>
              <a href={links.linkedIn}><img src={icons.linkedIn2} alt="LinkedIn" className='w-10 h-10 hover:scale-102 cursor-pointer' /></a>
              <a href={links.X}><img src={icons.x} alt="X" className='w-10 h-10 hover:scale-102 cursor-pointer' /></a>
            </div>
          </div>
      </div>


    </div>
  )
}

export default Footer
