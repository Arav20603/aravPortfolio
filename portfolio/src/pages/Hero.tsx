import { images } from "../constants/images"

const Hero = () => {
  return (
    <div className="text-white poppins-regular mt-20">
      {/* Hero section */}

      {/* Left text part */}
      <div className="ml-15 flex flex-col gap-3 border-rose-900 border-l-4 h-120 justify-center px-5">
        <p className="mb-1 text-green-100">Hi, my name is</p>
        <h1 className="text-6xl ml-3 mb-1 font-semibold">Aravind Dakshan D. <span>👋</span></h1>
        <p className="ml-4 mb-5 text-md text-gray-400">Pre-final Year CSE Student @ <span className="text-indigo-200 font-semibold">Gopalan College of Engineering & Management</span></p>
        <p className="text-3xl mb-4 text-purple-200">MERN Stack Developer | React Native Enthusiast <br /> | Problem Solver</p>
        <p className="text-xl/8 w-1/2">Passionate about building web and mobile applications, 
        skilled in DSA, C++, Python, and full-stack development.
        </p>

        {/* btn - section */}
        <div className="flex gap-10 mt-3 font-semibold ml-5">
          <a href="#" className="p-2 bg-red-800 w-1/8 text-center rounded-xl hover:bg-red-700 transition-all delay-75 duration-200">View Resume</a>
          <a href="#" className="p-2 bg-indigo-900 w-1/8 text-center rounded-xl hover:bg-indigo-800 transition-all delay-75 duration-200">Contact Me</a>
        </div>
      </div>

      {/* right img part */}
      <div className="">
        <img src={images.profPic} alt="ProfessionalPic" className="absolute top-40 left-230 rounded-t-[80%] rounded-b-[75%] border-10 border-red-800 bg-red-600 shadow-2xl shadow-red-600/50" />
      </div>
    </div>
  )
}

export default Hero
