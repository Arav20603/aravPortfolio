import { images } from "../constants/images"
import { links } from "../constants/links"
import '../utils/Hero.css'

const Hero = () => {
  return (
    <div className="hero text-white poppins-regular mt-20 h-135 flex flex-row-reverse gap-10 self-center justify-between ">
      {/* Hero section */}

      {/* right img part */}
      <div className="right mr-20">
        <img src={images.profPic} alt="ProfessionalPic" className="rounded-full w-130 ring-5 ring-blue-800 shadow-2xl shadow-blue-500" />
      </div>

      {/* Left text part */}
      <div className="left ml-15 w-200 flex flex-col gap-4 border-indigo-800 border-l-4 h-120 justify-center px-5">
        <p className="mb-1 name text-blue-200 text-sm ml-4">Hi, my name is</p>
        <h1 className="text-7xl ml-3 mb-1 font-semibold text-blue-600 name">Aravind Dakshan D.</h1>
        <p className="ml-4 mb-5 text-md text-blue-200">Final Year CSE Student @ <span className="text-blue-400 font-semibold">Gopalan College of Engineering & Management</span></p>
        <p className="text text-3xl mb-4 ml-2 text-blue-400 left-text4">MERN Stack Developer | React Native</p>
        <p className="text text-xl/8 ml-2 text-blue-200">Passionate about building web and mobile applications, 
        skilled in Java, C/C++, Python, and full-stack development.
        </p>

        {/* btn - section */}
        <div className="btn flex gap-10 mt-3 font-semibold ml-5">
          <a href={links.CV} className="p-2 bg-blue-700 px-7 text-center rounded-xl hover:bg-blue-800 transition-all delay-75 duration-200">View Resume</a>
          <a href="#contact" className="p-2 bg-indigo-800 px-7 text-center rounded-xl hover:bg-indigo-900 transition-all delay-75 duration-200">Contact Me</a>
        </div>
      </div>

      
    </div>
  )
}

export default Hero
