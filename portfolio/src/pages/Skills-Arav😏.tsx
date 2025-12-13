import '../utils/Skill.css'

const skillsData = [
  { name: 'Java', description: 'Object-oriented programming and software design' },
  { name: 'Python', description: 'Scripting, automation, and data science' },
  { name: 'C/C++', description: 'Efficient algorithms and low-level programming' },
  { name: 'DSA', description: 'Data structures and algorithm problem solving' },
  { name: 'HTML', description: 'Semantic markup and structuring web pages' },
  { name: 'CSS', description: 'Styling and responsive web design' },
  { name: 'JavaScript', description: 'Dynamic web interactions and logic' },
  { name: 'MERN Stack', description: 'Full-stack web development' },
  { name: 'React Native', description: 'Cross-platform mobile app development' },
]

const Skills = () => {
  return (
    <div id="skills" className="bg-blue-300/20 px-4 py-10 sm:px-8 md:px-14 lg:px-20">
      <h1 className="share-tech-bold text-blue-200 ml-4 sm:ml-10 mb-10 text-4xl sm:text-5xl md:text-6xl underline">
        Skills
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 justify-items-center">
        {skillsData.map(({ name, description }) => (
          <div
            key={name}
            className="bg-black bg-opacity-90 rounded-xl p-6 sm:p-8 md:p-8
              shadow-lg shadow-blue-900 border-2 border-blue-700
              hover:border-blue-400 cursor-default transform transition duration-300 ease-in-out
              hover:scale-105 hover:shadow-xl hover:shadow-blue-500
              w-full max-w-xs sm:max-w-sm md:max-w-md"
          >
            <h3 className="share-tech-bold text-center text-blue-400 text-xl sm:text-2xl mb-3 sm:mb-4">
              {name}
            </h3>
            <p className="hidden xl:block share-tech-regular text-blue-200 text-sm sm:text-base md:text-lg leading-relaxed text-center px-2">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
