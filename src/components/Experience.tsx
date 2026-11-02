import { experience, highlights } from '../data/portfolio'
import { UiIcon } from './icons'

export function Experience() {
  return (
    <section className="section-pad" id="experience">
      <div className="container">
        <div className="exp__grid">
          <div className="panel reveal">
            <span className="badge">
              <UiIcon name="briefcase" />
              Experience
            </span>
            <h2 className="panel__title">Experience &amp; Involvement</h2>

            <div className="timeline">
              {experience.map((item) => (
                <div className="tl-item" key={item.id}>
                  <span className="tl-item__icon">
                    <UiIcon name={item.icon} />
                  </span>
                  <span>
                    <span className="tl-item__title">{item.title}</span>
                    <span className="tl-item__sub">{item.subtitle}</span>
                  </span>
                  <span className="tl-item__period">{item.period}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel reveal">
            <span className="badge">
              <UiIcon name="trophy" />
              Achievements
            </span>
            <h2 className="panel__title">Highlights</h2>

            <div className="hl-list">
              {highlights.map((h) => (
                <div className="hl" key={h.id}>
                  <span className="hl__icon">
                    <UiIcon name={h.icon} />
                  </span>
                  <span>
                    <span className="hl__title">{h.title}</span>
                    <span className="hl__sub">{h.subtitle}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
