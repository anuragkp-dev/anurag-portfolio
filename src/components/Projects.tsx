import { useCallback, useState, type KeyboardEvent } from 'react'
import { featuredProjects, githubProfile, projects } from '../data/portfolio'
import { UiIcon } from './icons'

/** Laptop + phone mockup. The on-screen text follows the active slide. */
function DeviceMock({ brand, sub }: { brand: string; sub: string }) {
  return (
    <div className="mock" aria-hidden="true">
      <div className="mock__laptop">
        <div className="mock__screen">
          <div className="mock__topbar">
            <i />
            <i />
            <i />
          </div>
          <div className="mock__brand">
            {brand}
            <small>{sub}</small>
          </div>
          <div className="mock__btns">
            <i />
            <i />
          </div>
          <div className="mock__dishes">
            <div className="mock__dish" />
            <div className="mock__dish" />
            <div className="mock__dish" />
          </div>
        </div>
      </div>

      <div className="mock__phone">
        <div className="mock__phone-screen">
          <b>{brand}</b>
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const [index, setIndex] = useState(0)
  const total = featuredProjects.length
  const slide = featuredProjects[index]

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + total) % total),
    [total],
  )

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') go(1)
    if (e.key === 'ArrowLeft') go(-1)
  }

  return (
    <section className="section-pad" id="projects">
      <div className="container">
        <div className="projects__head reveal">
          <div>
            <span className="badge">
              <UiIcon name="briefcase" />
              Projects
            </span>
            <h2 className="sec-title">Featured Projects</h2>
            <p className="sec-sub">Real-world projects I’ve built, from idea to deployment.</p>
          </div>

          <a
            className="btn btn--ghost"
            href={githubProfile}
            target="_blank"
            rel="noreferrer noopener"
          >
            View All Projects
            <UiIcon name="arrowRight" />
          </a>
        </div>

        <div
          className="featured reveal"
          role="group"
          aria-roledescription="carousel"
          aria-label="Featured projects"
          tabIndex={total > 1 ? 0 : undefined}
          onKeyDown={total > 1 ? onKeyDown : undefined}
        >
          <div>
            {slide.tag && <span className="featured__tag">{slide.tag}</span>}

            <h3 className="featured__title">
              <UiIcon name="utensils" />
              {slide.name}
            </h3>
            <p className="featured__kicker">{slide.kicker}</p>
            <p className="featured__desc">{slide.description}</p>

            <div className="featured__tech">
              {slide.tech.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>

            <div className="featured__cta">
              {slide.repo && (
                <a
                  className="btn btn--primary"
                  href={slide.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View Project
                  <UiIcon name="arrowUpRight" />
                </a>
              )}
              {slide.url && (
                <a
                  className="btn btn--ghost"
                  href={slide.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Live Demo
                  <UiIcon name="external" />
                </a>
              )}
            </div>
          </div>

          <DeviceMock brand={slide.mockBrand} sub={slide.mockSub} />

          {total > 1 && (
            <div className="featured__nav">
              <button
                type="button"
                className="round-btn"
                onClick={() => go(-1)}
                aria-label="Previous project"
              >
                <UiIcon name="arrowLeft" />
              </button>
              <button
                type="button"
                className="round-btn"
                onClick={() => go(1)}
                aria-label="Next project"
              >
                <UiIcon name="arrowRight" />
              </button>

              <div className="dots" role="tablist" aria-label="Choose project">
                {featuredProjects.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    className={`dots__item ${i === index ? 'on' : ''}`}
                    aria-selected={i === index}
                    aria-label={p.name}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="proj-grid">
          {projects.map((p, i) => {
            const inner = (
              <>
                <span className="proj__icon">
                  <UiIcon name={p.icon} />
                </span>
                <h3 className="proj__title">{p.title}</h3>
                <p className="proj__desc">{p.description}</p>
                <div className="proj__tech">
                  {p.tech.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </>
            )

            const style = { transitionDelay: `${i * 60}ms` }

            return p.url ? (
              <a
                className="proj reveal"
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                style={style}
              >
                {inner}
              </a>
            ) : (
              <div className="proj proj--static reveal" key={p.id} style={style}>
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}