import About from '../pages/About'
import Achievements from '../pages/Achievements'
import ContactForm from '../pages/ContactForm'
import Hero from '../pages/Hero'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
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
    </>
  )
}

export default Home