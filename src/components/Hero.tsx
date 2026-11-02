import { Fragment } from 'react'
import { orbitBadges, profile, socials } from '../data/portfolio'
import { navigateToSection } from '../hooks'
import { SocialIcon, TechIcon, UiIcon } from './icons'
import { DotWave } from './DotWave'

/** `</>` glyph shown on the faces of the hero cube. */
function CodeGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.5 8 4.5 12l4 4M15.5 8l4 4-4 4M13.4 6.6l-2.8 10.8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Cube() {
  // glyph on the four lateral faces so it stays readable as the cube spins
  const faces = ['front', 'right', 'back', 'left'] as const
  const all = [...faces, 'top', 'bottom'] as const

  return (
    <div className="cube-stage" aria-hidden="true">
      <div className="cube">
        {all.map((face) => (
          <div key={face} className={`cube__face cube__face--${face}`}>
            {face !== 'top' && face !== 'bottom' && <CodeGlyph />}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__grid">
        <div className="hero__copy reveal">
          <span className="badge">
            <span aria-hidden="true">👋</span> {profile.greeting}
          </span>

          <h1 className="hero__title grad-text">{profile.headline}</h1>

          <div className="hero__roles">
            {profile.roles.map((role, i) => (
              <Fragment key={role}>
                {i > 0 && <span className="dot" aria-hidden="true" />}
                <span>{role}</span>
              </Fragment>
            ))}
          </div>

          <p className="hero__blurb">{profile.blurb}</p>

          <div className="hero__cta">
            <a
              className="btn btn--primary"
              href="#projects"
              onClick={(e) => {
                // same scroll path as the nav, so the landing matches exactly
                e.preventDefault()
                navigateToSection('projects')
              }}
            >
              View My Work
              <UiIcon name="arrowRight" />
            </a>
            {/* drop your CV at public/resume.pdf to make this work */}
            <a className="btn btn--ghost" href="/resume.pdf" download>
              Download Resume
              <UiIcon name="download" />
            </a>
          </div>

          <div className="hero__socials">
            {socials.map((s) => (
              <a
                key={s.id}
                className="social-btn"
                href={s.href}
                aria-label={s.label}
                title={s.label}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noreferrer noopener' : undefined}
              >
                <SocialIcon name={s.id} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="orbit-rings" aria-hidden="true">
            <svg viewBox="0 0 400 400" className="ring-1">
              <ellipse
                cx="200"
                cy="200"
                rx="152"
                ry="58"
                fill="none"
                stroke="rgba(192,132,252,.55)"
                strokeWidth="1.4"
                transform="rotate(-18 200 200)"
              />
            </svg>
            <svg viewBox="0 0 400 400" className="ring-2">
              <ellipse
                cx="200"
                cy="200"
                rx="178"
                ry="66"
                fill="none"
                stroke="rgba(217,70,239,.42)"
                strokeWidth="1.2"
                strokeDasharray="5 9"
                transform="rotate(15 200 200)"
              />
            </svg>
          </div>

          <div className="cube-base" aria-hidden="true" />
          <Cube />

          {orbitBadges.map((b) => (
            <span key={b.id} className={`orbit-badge orbit-badge--${b.position}`}>
              {b.kind === 'tech' ? <TechIcon name={b.icon} /> : <UiIcon name={b.icon} />}
              {b.label}
            </span>
          ))}
        </div>
      </div>

      <DotWave className="dotwave--hero" />
    </section>
  )
}
