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
        <a href="#contact" className='bg-indigo-700 pl-6 pr-2 py-3
       hover:bg-indigo-600 transition-all delay-75 duration-200 text-xl exo-2 rounded-l-3xl text-white'>
        Contact Me 📞</a>
      </div>
    </>
  )
}

export default Home