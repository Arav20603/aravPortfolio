import React from 'react'
import { icons } from '../constants/icons'
import { links } from '../constants/links'
import '../utils/Projects.css'

const Projects = () => {
  return (
    <div id='projects' className='p-10 text-white mb-10'>
      <h1 className='text-center text-5xl poppins-bold text-indigo-200 underline'>Projects</h1>

      {/* grid-section */}
      <div className="project-cards grid grid-cols-2 place-self-center gap-40 mt-10">
        {/* card-1 */}
        <div className="project-card border-5 border-blue-800 rounded-2xl w-140 p-3 flex flex-col justify-center gap-2 items-center text-center
          hover:scale-101 transition-all delay-75 duration-200
        ">
          <img src={icons.paws} alt="" className='w-20 border-4 border-indigo-500 p-3 rounded-full' />
          <p className='title text-3xl bebas-neue-regular mt-5 text-indigo-400'>FurEverCare – A Pet Care Companion</p>
          <p className='sub-text share-tech-regular text-2xl text-indigo-300'>React Native</p>
          <p className='poppins-regular text-indigo-200 px-4'>Manage your pet's needs with reminders, health records, and more.</p>

          {/* btn */}
          <a href={links.furEverCare} className='font-mono bg-indigo-800 px-5 mt-2 py-2 rounded-2xl mb-2 hover:bg-indigo-700
            transition-all delay-75 duration-200
          '>🔗 View on GitHub</a>
        </div>


        {/* card-2 */}
        <div className="project-card border-5 border-blue-800 rounded-2xl w-140 p-3 flex flex-col justify-center gap-2 items-center text-center
          hover:scale-101 transition-all delay-75 duration-200
        ">
          <img src={icons.paws} alt="" className='w-20 border-4 border-indigo-500 p-3 rounded-full' />
          <p className='title text-3xl bebas-neue-regular mt-5 text-indigo-400'>FitCommunity – Fitness Progress Tracker</p>
          <p className='sub-text share-tech-regular text-2xl text-indigo-300'>React Native</p>
          <p className='poppins-regular text-indigo-200 px-4'>Track workouts, monitor progress, personalized workout and stay consistent.</p>

          {/* btn */}
          <a href={links.fitness} className='font-mono bg-indigo-800 px-5 mt-2 py-2 rounded-2xl mb-2 hover:bg-indigo-700
            transition-all delay-75 duration-200
          '>🔗 View on GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default Projects
