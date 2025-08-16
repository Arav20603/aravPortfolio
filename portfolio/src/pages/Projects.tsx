import { links } from '../constants/links'
import '../utils/Projects.css'

const projectsData = [
  {
    title: 'FurEverCare – A Pet Care Companion',
    tech: 'React Native • Firebase',
    description: "Manage your pet's needs with reminders, health records, and more.",
    link: links.furEverCare,
  },
  {
    title: 'FitCommunity – Fitness Progress Tracker',
    tech: 'React Native • Firebase',
    description: 'Track workouts, monitor progress, personalized workout and stay consistent.',
    link: links.fitness,
  },
  {
    title: 'MERN App – Referral System (Aug 2025)',
    tech: 'MERN Stack',
    description: 'Built a referral system with auth, unique codes, and MongoDB integration.',
    link: links.referral,
  },
  {
    title: 'Dynamic Web Page Builder (Aug 2025)',
    tech: 'Next.js • Node.js • MongoDB',
    description: 'Custom builder that generates pages based on JSON using scalable APIs.',
    link: links.dynamic,
  },
]

const Projects = () => {
  return (
    <div id='projects' className='p-4 sm:p-8 md:p-10 text-white mb-10 max-w-7xl mx-auto'>
      <h1 className='text-center text-4xl sm:text-5xl poppins-bold text-indigo-200 underline mb-10'>
        Projects
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-10 place-items-center">
        {projectsData.map(({ title, tech, description, link }) => (
          <div
            key={title}
            className="project-card border-2 border-blue-800 rounded-2xl bg-black/80 w-full p-5 sm:p-6 flex flex-col justify-center gap-2 items-center text-center
              hover:scale-105 transition-transform duration-200 hover:border-blue-500 hover:shadow-xl hover:shadow-indigo-500"
          >
            <p className='title text-2xl sm:text-3xl bebas-neue-regular mt-3 text-indigo-400'>
              {title}
            </p>
            <p className='sub-text share-tech-regular text-xl sm:text-2xl text-indigo-300'>
              {tech}
            </p>
            <p className='poppins-regular text-indigo-200 text-sm sm:text-base px-3 mt-2'>
              {description}
            </p>

            {/* Button */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className='font-mono bg-indigo-800 px-5 mt-4 py-2 rounded-2xl mb-2 hover:bg-indigo-700
              transition-all duration-200 text-white'
            >
              🔗 View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
