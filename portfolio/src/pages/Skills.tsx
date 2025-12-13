import { images } from "../constants/images"
import '../utils/Skill.css'

const Skills = () => {
  return (
    <div id="skills" className="bg-blue-300/20 p-10">
      {/* skills - section */}

      <h1 className="skill-title text-blue-200 ml-10 mb-12 text-6xl share-tech-bold underline">Skills</h1>
      {/* grid-cards */}
      <div className="skill-grid grid grid-cols-4 gap-15 place-self-center mb-10">
        {/* grid-card - c/cpp */}
        <div className="grid-card">
          <img src={images.cpp} alt="" className="w-70 h-40 rounded-xl shadow-2xl shadow-blue-500 hover:scale-101 cursor-pointer transition-all delay-75 duration-200" />
        </div>
        
        {/* grid-card - c/cpp */}
        <div className="grid-card">
          <img src={images.java} alt="" className="w-70 h-40 rounded-xl shadow-2xl shadow-blue-500 hover:scale-101 cursor-pointer transition-all delay-75 duration-200" />
        </div>

        {/* grid-card - c/cpp */}
        <div className="grid-card">
          <img src={images.py} alt="" className="w-70 h-40 rounded-xl shadow-2xl shadow-blue-500 hover:scale-101 cursor-pointer transition-all delay-75 duration-200" />
        </div>

        {/* grid-card - c/cpp */}
        <div className="grid-card">
          <img src={images.dsa} alt="" className="w-70 h-40 rounded-xl shadow-2xl shadow-blue-500 hover:scale-101 cursor-pointer transition-all delay-75 duration-200" />
        </div>
        {/* grid-card - c/cpp */}
        <div className="grid-card">
          <img src={images.html} alt="" className="w-70 h-40 rounded-xl shadow-2xl shadow-blue-500 hover:scale-101 cursor-pointer transition-all delay-75 duration-200" />
        </div>
        {/* grid-card - c/cpp */}
        <div className="grid-card">
          <img src={images.css} alt="" className="w-70 h-40 rounded-xl shadow-2xl shadow-blue-500 hover:scale-101 cursor-pointer transition-all delay-75 duration-200" />
        </div>
        {/* grid-card - c/cpp */}
        <div className="grid-card">
          <img src={images.js} alt="" className="w-70 h-40 rounded-xl shadow-2xl shadow-blue-500 hover:scale-101 cursor-pointer transition-all delay-75 duration-200" />
        </div>
        {/* grid-card - c/cpp */}
        <div className="grid-card">
          <img src={images.mern} alt="" className="w-70 h-40 rounded-xl shadow-2xl shadow-blue-500 hover:scale-101 cursor-pointer transition-all delay-75 duration-200" />
        </div>
        {/* grid-card - c/cpp */}
        <div className="grid-card">
          <img src={images.native} alt="" className="w-70 h-40 rounded-xl shadow-2xl shadow-blue-500 hover:scale-101 cursor-pointer transition-all delay-75 duration-200" />
        </div>

      </div>
    </div>
  )
}

export default Skills
