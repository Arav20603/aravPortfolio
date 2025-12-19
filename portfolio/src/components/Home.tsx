import About from '../pages/About'
import Achievements from '../pages/Achievements'
import ContactForm from '../pages/ContactForm'
import Hero from '../pages/Hero'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
import Footer from './Footer'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <ContactForm />
      <Footer />
      <div className="fixed bottom-10  right-0">
        {/* Floating Contact Button */}
        <a
          href="#contact"
          className="fixed bottom-6 right-6 z-50
             group flex items-center gap-3
             bg-blue-600 hover:bg-blue-700
             text-white
             px-4 py-4 rounded-full
             shadow-lg shadow-blue-600/40
             transition-all duration-300"
        >
          {/* SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            className="w-6 h-6 fill-white"
          >
            <path d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z" />
          </svg>

          {/* Text (expands on hover) */}
          <span
            className="max-w-0 overflow-hidden
               group-hover:max-w-xs
               transition-all duration-300
               whitespace-nowrap font-medium"
          >
            Contact Me
          </span>
        </a>
      </div>
    </>
  )
}

export default Home