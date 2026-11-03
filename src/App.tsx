import { useEffect } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { SITE_URL } from './data/portfolio'
import { useRevealObserver } from './hooks'

/**
 * Fills in the absolute URL tags that `index.html` cannot know statically.
 *
 * `og:image` is written as a root-relative path in the HTML — every scraper
 * that honours it resolves it against og:url or falls back to the document URL.
 * Setting it absolute here as well removes the reliance on that resolution.
 */
function useCanonicalTags() {
  useEffect(() => {
    const url = `${SITE_URL}${window.location.pathname}`
    const set = (selector: string, attr: string, value: string) => {
      const el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector)
      el?.setAttribute(attr, value)
    }

    set('link[rel="canonical"]', 'href', url)
    set('meta[property="og:url"]', 'content', url)
    set('meta[name="twitter:url"]', 'content', url)
    set('meta[property="og:image"]', 'content', `${SITE_URL}/og-image.png`)
    set('meta[name="twitter:image"]', 'content', `${SITE_URL}/og-image.png`)
  }, [])
}

export default function App() {
  useRevealObserver()
  useCanonicalTags()

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
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
