import { useState } from 'react'
import { icons } from '../constants/icons'
import { images } from '../constants/images'
import '../utils/Navbar.css'
import { links } from '../constants/links'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<String>('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='nav text-white sticky top-0 z-999 bg-black/100 backdrop-blur-2xl'>
      <nav className='nav-bar flex flex-row items-center justify-between mx-13 border-b-4 rounded-b-2xl border-blue-800'>
        {/* logo */}
        <a href="#"><img src={images.logo} alt="Logo" className='w-20 ml-3 rounded-b-2xl' /></a>

        {/* nav-link */}
        <ul className='nav-link flex gap-10 items-center text-xl share-tech-regular text-blue-100'>
          <a href="#" onClick={() => setActiveLink('home')} className={`${activeLink == 'home' ? 'text-blue-400 border-b-2' : 'hover:text-blue-400 hover:border-b-2'} transition-all delay-75 duration-200 rounded-b-sm border-blue-400 hover:scale-103`}>
            <li>Home</li>
          </a>
          <a href="#about" onClick={() => setActiveLink('about')} className={`${activeLink == 'about' ? 'text-blue-400 border-b-2' : 'hover:text-blue-400 hover:border-b-2'} transition-all delay-75 duration-200 rounded-b-sm border-blue-400 hover:scale-103`}>
            <li>About</li>
          </a>
          <a href="#skills" onClick={() => setActiveLink('skills')} className={`${activeLink == 'skills' ? 'text-blue-400 border-b-2' : 'hover:text-blue-400 hover:border-b-2'} transition-all delay-75 duration-200 rounded-b-sm border-blue-400 hover:scale-103`}>
            <li>Skills</li>
          </a>
          <a href="#projects" onClick={() => setActiveLink('projects')} className={`${activeLink == 'projects' ? 'text-blue-400 border-b-2' : 'hover:text-blue-400 hover:border-b-2'} transition-all delay-75 duration-200 rounded-b-sm border-blue-400 hover:scale-103`}>
            <li>Projects</li>
          </a>
          <a href="#achievements" onClick={() => setActiveLink('achievements')} className={`${activeLink == 'achievements' ? 'text-blue-400 border-b-2' : 'hover:text-blue-400 hover:border-b-2'} transition-all delay-75 duration-200 rounded-b-sm border-blue-400 hover:scale-103`}>
            <li>Achievements</li>
          </a>
        </ul>
        
        {/* nav-link responsive */}
        {isMenuOpen && (
          <ul className={`absolute left-0 top-0 w-full  h-280 pt-6 flex flex-col gap-10 items-center text-xl share-tech-regular text-blue-100
            z-999 bg-black/70 backdrop-blur-2xl
          `}>
            <a onClick={() => setIsMenuOpen(false)} className={`text-3xl hover:text-blue-400 transition-all delay-75 duration-200 rounded-b-sm border-blue-400 hover:scale-103`}>
              <li className='text-2xl'>❌</li>
            </a>
            <a href="#" onClick={() => {
              setActiveLink('home')
              setIsMenuOpen(false)
            }} className={`${activeLink == 'home' ? 'text-blue-400 border-b-2' : 'hover:text-blue-400 hover:border-b-2'} transition-all delay-75 duration-200 rounded-b-sm border-blue-400 hover:scale-103`}>
              <li className='text-2xl'>Home</li>
            </a>
            <a href="#about" onClick={() => {
              setActiveLink('about')
              setIsMenuOpen(false)
            }} className={`${activeLink == 'about' ? 'text-blue-400 border-b-2' : 'hover:text-blue-400 hover:border-b-2'} transition-all delay-75 duration-200 rounded-b-sm border-blue-400 hover:scale-103`}>
              <li className='text-2xl'>About</li>
            </a>
            <a href="#skills" onClick={() => {
              setActiveLink('skills')
              setIsMenuOpen(false)
            }} className={`${activeLink == 'skills' ? 'text-blue-400 border-b-2' : 'hover:text-blue-400 hover:border-b-2'} transition-all delay-75 duration-200 rounded-b-sm border-blue-400 hover:scale-103`}>
              <li className='text-2xl'>Skills</li>
            </a>
            <a href="#projects" onClick={() => {
              setActiveLink('projects')
              setIsMenuOpen(false)
            }} className={`${activeLink == 'projects' ? 'text-blue-400 border-b-2' : 'hover:text-blue-400 hover:border-b-2'} transition-all delay-75 duration-200 rounded-b-sm border-blue-400 hover:scale-103`}>
              <li className='text-2xl'>Projects</li>
            </a>
            <a href="#achievements" onClick={() => {
              setActiveLink('achievements')
              setIsMenuOpen(false)
            }} className={`${activeLink == 'achievements' ? 'text-blue-400 border-b-2' : 'hover:text-blue-400 hover:border-b-2'} transition-all delay-75 duration-200 rounded-b-sm border-blue-400 hover:scale-103`}>
              <li className='text-2xl'>Achievements</li>
            </a>
            <div className="flex gap-8 items-center justify-center">
              <a href={links.gitHub}><img src={icons.gitHub} alt="GitHub" className='w-12 hover:scale-103 transition-all delay-75 duration-200 link-icon2' /></a>
              <a href={links.linkedIn}><img src={icons.linkedIn} alt="LinkedIn" className='w-11 hover:scale-103 transition-all delay-75 duration-200 link-icon2' /></a>
            </div>
          </ul>
        )}
          
          { !isMenuOpen && (
          <a onClick={() => setIsMenuOpen(true)} className={`menu-icon mr-6 hover:text-red-400 transition-all delay-75 duration-200 hover:border-b-2 rounded-b-sm border-red-400`}>
            <img src={icons.menu} alt="MenuIcon" className='w-10' />
          </a>
          )}
        {/* icon-link */}
        <div className="flex gap-8 items-center nav-last">
          <a href={links.gitHub}><img src={icons.gitHub} alt="GitHub" className='w-12 hover:scale-103 transition-all delay-75 duration-200 link-icon' /></a>
          <a href={links.linkedIn}><img src={icons.linkedIn} alt="LinkedIn" className='w-11 mr-3 hover:scale-103 transition-all delay-75 duration-200 link-icon' /></a>
          
        </div>
      </nav>
    </div>
  )
}

export default Navbar
