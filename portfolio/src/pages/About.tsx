import { images } from "../constants/images"
import '../utils/About.css'

const About = () => {
  return (
    <div className="about text-white flex gap-3 ml-18 mt-40 mb-25" id="about">
      {/* About section */}

      {/* left img part */}
      <div className="">
        <img src={images.profPic3} alt="ProfessionalPic2" className="w-230 rounded-3xl shadow-2xl shadow-blue-500" />
      </div>

      {/* Right content part */}
      <div className="right flex flex-col gap-4 poppins-regular mt-8 ml-10">
        <h1 className="text-5xl about-title border-b-4 text-indigo-300 w-59 font-semibold">About Me</h1>
        <div className="right-sub text-lg/7 text-blue-50 mt-6 ml-2 text-justify mr-25">
          <p>Hi there! I’m <span className="text-blue-500">Aravind</span>, Final year Computer Science Engineering student at
           <span className="text-blue-300"> Gopalan College of Engineering & Management</span>.</p>
          <p className="mt-4">I build things for the web (and sometimes for my own curiosity).
             From full-stack apps with the <span className="text-blue-400">MERN</span> stack to mobile experiments
              with <span className="text-blue-400">React Native</span>, I enjoy turning ideas into clean, functional code.</p>
          <p className="mt-4">I’m also a bit of a problem-solving nerd — you’ll often find me untangling 
            algorithms in <span className="text-blue-400">Java</span> like it’s a puzzle game.</p>
          <p className="mt-4">When I’m not coding, I’m probably learning something new or rewriting a function I just wrote.</p>
          <p>I’m excited to grow through internships and team projects, and I love building things
             that people actually use. Always learning, always improving — and always up for a good challenge.</p>
          <p className="mt-6 text-right">- Let’s create something <span className="text-blue-400">awesome</span>.</p>
        </div>
      </div>
    </div>
  )
}

export default About
