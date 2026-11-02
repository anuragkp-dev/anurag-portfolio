import { useMemo, useState } from 'react'
import { skillFilters, skills, skillsIntro, type SkillGroup } from '../data/portfolio'
import { TechIcon, UiIcon } from './icons'

export function Skills() {
  const [filter, setFilter] = useState<'all' | SkillGroup>('all')

  const visible = useMemo(
    () => (filter === 'all' ? skills : skills.filter((s) => s.group === filter)),
    [filter],
  )

  return (
    <section className="section-pad" id="skills">
      <div className="container">
        <div className="skills__head reveal">
          <div>
            <span className="badge">
              <UiIcon name="bolt" />
              My Skills
            </span>
            <h2 className="sec-title">Tech Stack &amp; Tools</h2>
            <p className="sec-sub">{skillsIntro}</p>
          </div>

          <div className="filters" role="tablist" aria-label="Filter skills">
            {skillFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                className={`filter ${filter === f.id ? 'filter--active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="skill-grid reveal">
          {visible.map((s, i) => (
            <div
              key={`${filter}-${s.id}`}
              className="skill"
              title={s.name}
              style={{ animationDelay: `${i * 28}ms` }}
            >
              <TechIcon name={s.id} />
              <span className="sr-only">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
