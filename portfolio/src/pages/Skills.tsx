import { images } from "../constants/images"
import '../utils/Skill.css'

const Skills = () => {
  return (
    <div id="skills" tabIndex={0} className="text-white bg-blue-900/40 p-4 border-t-2 mt-30 border-indigo-500 pb-10">
      {/* Skills section */}
      <h1 className="share-tech-bold border-b-2 ml-13 border-indigo-400 w-30 text-6xl text-indigo-300 mt-7">Skills</h1>

      {/* grid-skills */}
      <div className="grid-section grid grid-cols-3 mx-10 mt-10 place-items-center gap-15">
        {/* html */}
        <div className="w-90 relative group flex justify-center grid-card transition-all delay-75 duration-200 ">
          <img src={images.html} alt="HTML" className="img rounded-xl w-90 h-50 object-fit shadow-2xl shadow-indigo-600" />

          {/* overlap-content */}
          <div className="p-3 overlap absolute w-90 cursor-pointer bg-black/65 h-50 rounded-xl flex justify-center items-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all delay-75 duration-200">
            <p className="text-md poppins-regular text-indigo-200 text-center">
              <span className="border-b-3 text-blue-300 poppins-bold text-2xl/15">HTML</span> 
              <br />Structures the content of web pages using semantic markup.</p>
          </div>
        </div>
        
        {/* css */}
        <div className="w-90 relative group flex justify-center grid-card transition-all delay-75 duration-200">
          <img src={images.css} alt="HTML" className="img rounded-xl w-90 h-50 object-fit shadow-2xl shadow-indigo-600" />

          {/* overlap-content */}
          <div className="p-3 overlap absolute w-90 cursor-pointer bg-black/70 h-50 rounded-xl flex justify-center items-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all delay-75 duration-200">
            <p className="text-md poppins-regular text-indigo-200 text-center">
              <span className="border-b-3 text-blue-300 poppins-bold text-2xl/15">CSS</span>
               <br />Styles websites with layouts, colors, and responsive design.</p>
          </div>
        </div>

        {/* js */}
        <div className="w-90 relative group flex justify-center grid-card transition-all delay-75 duration-200">
          <img src={images.js} alt="HTML" className="img rounded-xl w-90 h-50 object-fit shadow-2xl shadow-indigo-600" />

          {/* overlap-content */}
          <div className="p-3 overlap absolute w-90 cursor-pointer bg-black/70 h-50 rounded-xl flex justify-center items-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all delay-75 duration-200">
            <p className="text-md poppins-regular text-indigo-200 text-center">
              <span className="border-b-3 text-blue-300 poppins-bold text-2xl/15">JAVASCRIPT</span>
               <br />Adds interactivity and dynamic behavior to web pages.</p>
          </div>
        </div>

        {/* c/cpp */}
        <div className="w-90 relative group flex justify-center grid-card transition-all delay-75 duration-200">
          <img src={images.cpp} alt="HTML" className="img rounded-xl w-90 h-50 object-fit shadow-2xl shadow-indigo-600" />

          {/* overlap-content */}
          <div className="p-3 overlap absolute w-90 cursor-pointer bg-black/65 h-50 rounded-xl flex justify-center items-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all delay-75 duration-200">
            <p className="text-md poppins-regular text-indigo-200 text-center">
              <span className="border-b-3 text-blue-300 poppins-bold text-2xl/15">C/C++</span>
               <br />Low-level languages for system programming and performance-critical apps.</p>
          </div>
        </div>

        {/* java */}
        <div className="w-90 relative group flex justify-center grid-card transition-all delay-75 duration-200">
          <img src={images.java} alt="HTML" className="img rounded-xl w-90 h-50 object-fit shadow-2xl shadow-indigo-600" />

          {/* overlap-content */}
          <div className="p-3 overlap absolute w-90 cursor-pointer bg-black/80 h-50 rounded-xl flex justify-center items-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all delay-75 duration-200">
            <p className="text-md poppins-regular text-indigo-200 text-center">
              <span className="border-b-3 text-blue-300 poppins-bold text-2xl/15">JAVA</span>
               <br />Object-oriented language used in backend systems and Android apps.</p>
          </div>
        </div>

        {/* py */}
        <div className="w-90 relative group flex justify-center grid-card transition-all delay-75 duration-200">
          <img src={images.py} alt="HTML" className="img rounded-xl w-90 h-50 object-fit shadow-2xl shadow-indigo-600" />

          {/* overlap-content */}
          <div className="p-3 overlap absolute w-90 cursor-pointer bg-black/65 h-50 rounded-xl flex justify-center items-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all delay-75 duration-200">
            <p className="text-md poppins-regular text-indigo-200 text-center">
              <span className="border-b-3 text-blue-300 poppins-bold text-2xl/15">PYTHON</span>
               <br />Simple and powerful language for scripting, automation, and backend.</p>
          </div>
        </div>

        {/* mern */}
        <div className="w-90 relative group flex justify-center grid-card transition-all delay-75 duration-200">
          <img src={images.mern} alt="HTML" className="img rounded-xl w-90 h-50 object-fit shadow-2xl shadow-indigo-600" />

          {/* overlap-content */}
          <div className="p-3 overlap absolute w-90 cursor-pointer bg-black/65 h-50 rounded-xl flex justify-center items-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all delay-75 duration-200">
            <p className="text-md poppins-regular text-indigo-200 text-center">
              <span className="border-b-3 text-blue-300 poppins-bold text-2xl/15">MERN STACK</span>
               <br />Full-stack development with MongoDB, Express, React, and Node.js.</p>
          </div>
        </div>
        
        {/* native */}
        <div className="w-90 relative group flex justify-center grid-card transition-all delay-75 duration-200">
          <img src={images.native} alt="HTML" className="img rounded-xl w-90 h-50 object-fit shadow-2xl shadow-indigo-600" />

          {/* overlap-content */}
          <div className="p-3 overlap absolute w-90 cursor-pointer bg-black/65 h-50 rounded-xl flex justify-center items-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all delay-75 duration-200">
           <p className="text-md poppins-regular text-indigo-200 text-center">
            <span className="border-b-3 text-blue-300 poppins-bold text-2xl/15">REACT NATIVE</span>
             <br />Build native mobile apps for Android & iOS using React.</p>
          </div>
        </div>

        {/* dsa */}
        <div className="w-90 relative group flex justify-center grid-card transition-all delay-75 duration-200">
          <img src={images.dsa} alt="HTML" className="img rounded-xl w-90 h-50 object-fit shadow-2xl shadow-indigo-600" />

          {/* overlap-content */}
          <div className="p-3 overlap absolute w-90 cursor-pointer bg-black/80 h-50 rounded-xl flex justify-center items-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all delay-75 duration-200">
            <p className="text-md poppins-regular text-indigo-200 text-center">
              <span className="border-b-3 text-blue-300 poppins-bold text-2xl/15">DSA</span>
               <br />Core coding concepts for solving problems efficiently.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills
