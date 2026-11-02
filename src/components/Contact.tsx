import { contact, profile, socials } from '../data/portfolio'
import { SocialIcon, UiIcon } from './icons'
import { DotWave } from './DotWave'

export function Contact() {
  const year = new Date().getFullYear()

  return (
    <footer className="contact" id="contact">
      <DotWave />

      <div className="container">
        <div className="contact__grid">
          <div className="contact__art reveal">
            <div className="contact__pedestal" aria-hidden="true" />
            <div className="contact__envelope" aria-hidden="true">
              <UiIcon name="envelope" />
            </div>
          </div>

          <div className="reveal">
            <span className="badge">
              <UiIcon name="mail" />
              Contact
            </span>

            <h2 className="contact__title">{contact.title}</h2>
            <p className="contact__blurb">{contact.blurb}</p>

            <div className="contact__rows">
              <a className="contact__row" href={`mailto:${profile.email}`}>
                <span className="fact__icon">
                  <UiIcon name="envelope" />
                </span>
                <span>
                  <b>{profile.email}</b>
                  <small>Email</small>
                </span>
              </a>

              <div className="contact__row">
                <span className="fact__icon">
                  <UiIcon name="pin" />
                </span>
                <span>
                  <b>{profile.location}</b>
                  <small>Location</small>
                </span>
              </div>
            </div>

            <div className="contact__btn">
              <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                Get in Touch
                <UiIcon name="arrowUpRight" />
              </a>
            </div>
          </div>
        </div>

        <div className="foot">
          <span>
            © {year} {profile.name}. Built with React &amp; Vite.
          </span>

          <div className="foot__socials">
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
      </div>
    </footer>
  )
}
