import { aboutFacts, profile } from '../data/portfolio'
import { navigateToSection } from '../hooks'
import { UiIcon } from './icons'

export function About() {
  return (
    <section className="section-pad" id="about">
      <div className="container">
        <article className="card card--pad reveal">
          <div className="about__grid">
            <div>
              <span className="badge">
                <UiIcon name="sparkle" />
                About Me
              </span>

              <h2 className="sec-title">{profile.aboutTitle}</h2>
              <p className="about__body">{profile.aboutBody}</p>

              <div className="facts">
                {aboutFacts.map((f) => (
                  <div className="fact" key={f.id}>
                    <span className="fact__icon">
                      <UiIcon name={f.icon} />
                    </span>
                    <span>
                      <span className="fact__title">{f.title}</span>
                      {f.subtitle && <span className="fact__sub">{f.subtitle}</span>}
                    </span>
                  </div>
                ))}
              </div>

              <div className="about__cta">
                <a
                  className="btn btn--primary"
                  href="#experience"
                  onClick={(e) => {
                    e.preventDefault()
                    navigateToSection('experience')
                  }}
                >
                  See My Experience
                  <UiIcon name="arrowRight" />
                </a>
              </div>
            </div>

            {/* CSS stand-in for the workspace photo in the design — swap the
                .scene block for a real <img> when you have one. */}
            <div className="frame">
              <div className="frame__screen">
                <div className="scene" aria-hidden="true">
                  <div className="scene__glow" />
                  <div className="scene__monitor">
                    <span>A</span>
                  </div>
                  <div className="scene__stand" />
                  <div className="scene__plant" />
                </div>

                <div className="frame__caption">
                  <UiIcon name="target" />
                  <span>
                    Aspiring
                    <small>Software Engineer</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
