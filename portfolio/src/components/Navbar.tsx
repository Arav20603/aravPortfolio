import { icons } from '../constants/icons'
import { images } from '../constants/images'

const Navbar = () => {
  return (
    <div className='text-white sticky top-0 z-999 bg-black/100 backdrop-blur-2xl'>
      <nav className='flex flex-row items-center justify-between mx-13 border-b-4 rounded-b-2xl border-red-900'>
        {/* logo */}
        <a href="#"><img src={images.logo} alt="Logo" className='w-20 ml-3 rounded-2xl' /></a>

        {/* nav-link */}
        <ul className='flex gap-10 items-center text-xl share-tech-regular'>
          <a href="#" className='hover:text-red-400 transition-all delay-75 duration-200 hover:border-b-2 rounded-b-sm border-red-400 hover:scale-103'>
            <li>Home</li>
          </a>
          <a href="#" className='hover:text-red-400 transition-all delay-75 duration-200 hover:border-b-2 rounded-b-sm border-red-400 hover:scale-103'>
            <li>About</li>
          </a>
          <a href="#" className='hover:text-red-400 transition-all delay-75 duration-200 hover:border-b-2 rounded-b-sm border-red-400 hover:scale-103'>
            <li>Skills</li>
          </a>
          <a href="#" className='hover:text-red-400 transition-all delay-75 duration-200 hover:border-b-2 rounded-b-sm border-red-400 hover:scale-103'>
            <li>Projects</li>
          </a>
          <a href="#" className='hover:text-red-400 transition-all delay-75 duration-200 hover:border-b-2 rounded-b-sm border-red-400 hover:scale-103'>
            <li>Achievements</li>
          </a>
          {/* <a href="#" className='hover:text-red-400 transition-all delay-75 duration-200 hover:border-b-2 rounded-b-sm border-red-400'>
            <li>Contact</li>
          </a> */}
        </ul>

        {/* icon-link */}
        <div className="flex gap-8 items-center">
          <a href="#"><img src={icons.gitHub2} alt="GitHub" className='w-13 hover:scale-103 transition-all delay-75 duration-200' /></a>
          <a href="#"><img src={icons.linkedIn2} alt="LinkedIn" className='w-11 mr-3 hover:scale-103 transition-all delay-75 duration-200' /></a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
