import '../utils/Footer.css'
import { images } from '../constants/images'
import { icons } from '../constants/icons'
import { links } from '../constants/links'

const Footer = () => {
  return (
    <div className='text-white mt-20 bg-indigo-600/30 pt-8 pb-3'>
      <footer className="grid grid-cols-3 ml-20 gap-35">
        {/* left-box */}
        <div className="">
          <div className="flex items-center gap-1 bg-blue-900 rounded-3xl pr-4 w-fit">
            <img src={images.logo} alt="Logo" className='rounded-full w-11 logo-img' />
            <p className='font-mono text-2xl font-bold text-indigo-50 title'>Aravind Dakshan D</p>
          </div>
          <div className="ml-8 mt-3 share-tech-regular text-indigo-100 address">
            <p>Whitefield, Bangalore - 560067</p>
            <p><span>Email:</span> dakshandaravind@gmail.com</p>
            <p><span>Mobile:</span> 8088276220</p>
          </div>
        </div>

        {/* right-box */}
        <div className="right-box flex gap-10 mt-2">
          <p className='text-xl poppins-regular border-b-2 border-indigo-500 h-fit w-fit text-indigo-300 heading'>Quick Access</p>
            <div className="flex flex-col gap-2 mt-5 text-indigo-50 heading-right-box">
              <a href="#" className='hover:underline transition-all delay-75 duration-200'>Home</a>
              <a href="#about" className='hover:underline transition-all delay-75 duration-200'>About</a>
              <a href="#skills" className='hover:underline transition-all delay-75 duration-200'>Skills</a>
            </div>
            <div className="flex flex-col gap-2 mt-5 text-indigo-50 heading-left-box">
              <a href="#projects" className='hover:underline transition-all delay-75 duration-200'>Projects</a>
              <a href="#achievements" className='hover:underline transition-all delay-75 duration-200'>Achivements</a>
            </div>
        </div>

        {/* links */}
          <div className="flex mt-2 link-box">
            <p className='text-xl poppins-regular border-b-2 border-indigo-500 h-fit text-indigo-300 heading'>Follow us</p>
            <div className="flex gap-4 ml-5 items-center follow-img-box">
              <a href={links.gitHub}><img src={icons.gitHub2} alt="Github" className='link-img w-12 h-12 hover:scale-102 cursor-pointer' /></a>
              <a href={links.linkedIn}><img src={icons.linkedIn2} alt="LinkedIn" className='link-img w-10 h-10 hover:scale-102 cursor-pointer' /></a>
              <a href={links.X}><img src={icons.x} alt="X" className='link-img w-10 h-10 hover:scale-102 cursor-pointer' /></a>
            </div>
          </div>
          
      </footer>
      <p className='text-gray-400 poppins-regular text-center mt-5 text-xs copyright'>© 2025 Aravind Dakshan D. All rights reserved. </p>


    </div>
  )
}

export default Footer
