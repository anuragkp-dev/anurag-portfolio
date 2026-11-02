import { useCallback, useEffect, useState } from 'react'
import { navLinks, profile } from '../data/portfolio'
import { useActiveSection, useScrolled } from '../hooks'
import { UiIcon } from './icons'

const NAV_IDS = navLinks.map((l) => l.id)

function BrandMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 19 12 4l8 15"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.6 14.4h6.8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

type Theme = 'dark' | 'light'

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark'
    return window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return {
    theme,
    toggle: useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []),
  }
}

export function Nav() {
  const scrolled = useScrolled(14)
  const [active, select] = useActiveSection(NAV_IDS)
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`nav ${scrolled || open ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a
          className="brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            select('home')
          }}
        >
          <span className="brand__mark">
            <BrandMark />
          </span>
          {profile.name}
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className={`nav__link ${active === link.id ? 'nav__link--active' : ''}`}
              href={link.href}
              aria-current={active === link.id ? 'page' : undefined}
              onClick={(e) => {
                // We do the scrolling ourselves so all six links land on the
                // same offset; let the browser do it too and it fights us.
                e.preventDefault()
                select(link.id)
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <button
            type="button"
            className="icon-btn"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            <UiIcon name={theme === 'dark' ? 'moon' : 'sun'} />
          </button>

          <a
            className="btn btn--primary btn--sm nav__cta"
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              select('contact')
            }}
          >
            Let’s Connect
            <UiIcon name="arrowUpRight" />
          </a>

          <button
            type="button"
            className="icon-btn nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <UiIcon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav__drawer" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className={`nav__link ${active === link.id ? 'nav__link--active' : ''}`}
              href={link.href}
              aria-current={active === link.id ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault()
                select(link.id)
                setOpen(false)
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
