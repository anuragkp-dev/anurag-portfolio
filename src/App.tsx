import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { useRevealObserver } from './hooks'

export default function App() {
  useRevealObserver()

  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <Contact />
    </div>
  )
}
