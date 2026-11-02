import { useCallback, useEffect, useRef, useState } from 'react'

/** Adds `.is-in` to every `.reveal` element once it scrolls into view. */
export function useRevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -70px 0px' },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/** True once the window has scrolled past `offset` pixels. */
export function useScrolled(offset = 12) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return scrolled
}

/**
 * Space left between the sticky nav and a section's first content block.
 *
 * Sections carry ~92px of decorative top padding. Scrolling to the section box
 * would leave every bit of that padding as dead space under the nav, so the
 * scroll aims at the content inside it instead.
 */
const CONTENT_GAP = 32

/** Fired after a programmatic section scroll so the nav can follow along. */
const NAVIGATE_EVENT = 'portfolio:navigate'

type NavigateDetail = { id: string; top: number }

/** Height of the sticky nav, read from the `--nav-h` token in styles.css. */
function navHeight() {
  const fallback = 78
  if (typeof window === 'undefined') return fallback
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
  const height = Number.parseFloat(raw)
  return Number.isFinite(height) ? height : fallback
}

function maxScrollY() {
  return Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
}

/**
 * Document-Y of the first thing the visitor actually reads in a section.
 *
 * Skips out-of-flow children: the footer opens with its decorative `DotWave`,
 * which is `position: absolute` and hangs off the *bottom* of the section, so
 * measuring `firstElementChild` there aimed the scroll nearly 500px past the
 * content and the contact block ended up hidden behind the nav.
 */
function contentTop(el: HTMLElement) {
  for (const child of Array.from(el.children)) {
    const node = child as HTMLElement
    const position = getComputedStyle(node).position
    if (position === 'absolute' || position === 'fixed') continue
    return node.getBoundingClientRect().top + window.scrollY
  }
  return el.getBoundingClientRect().top + window.scrollY
}

/**
 * Scrolls a section's content under the sticky nav and returns the exact scroll
 * offset it aimed for, so the caller can tell when the animation has arrived.
 *
 * Done here rather than left to the browser's fragment navigation so that every
 * entry point — nav link, brand, CTA, drawer, a reload on `#hash` — lands on
 * precisely the same offset, and so that offset is knowable up front.
 */
export function scrollToSection(id: string, behavior?: ScrollBehavior) {
  if (typeof window === 'undefined') return null
  const el = document.getElementById(id)
  if (!el) return null

  const nav = navHeight()
  const boxTop = el.getBoundingClientRect().top + window.scrollY

  // The first section sits directly under the nav in normal flow, so scrolling
  // to it means going to the top of the page rather than to a negative offset.
  const raw = boxTop <= nav ? 0 : contentTop(el) - nav - CONTENT_GAP
  const top = Math.min(Math.max(0, raw), maxScrollY())

  const reduced =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  window.scrollTo({ top, behavior: behavior ?? (reduced ? 'auto' : 'smooth') })

  // Keep the URL shareable without letting the browser do a second, differently
  // offset scroll of its own.
  if (window.location.hash !== `#${id}`) {
    window.history.replaceState(null, '', `#${id}`)
  }

  return top
}

/** Scrolls to a section and tells the nav to move its highlight along. */
export function navigateToSection(id: string) {
  const top = scrollToSection(id)
  if (top === null) return null
  window.dispatchEvent(new CustomEvent<NavigateDetail>(NAVIGATE_EVENT, { detail: { id, top } }))
  return top
}

/**
 * Tracks which section currently sits under the sticky nav and returns
 * `[activeId, select]`.
 *
 * Three things had to be true for every button to behave like every other:
 *
 * 1. The active section is computed from real document positions on each scroll
 *    frame, not from an IntersectionObserver. An IO callback only receives the
 *    entries whose state *changed*, so picking "the most visible entry" from
 *    that subset reads stale data and leaves the highlight stuck on whichever
 *    section was active first.
 * 2. Clicking sets the highlight immediately and then holds it until the smooth
 *    scroll actually arrives, so it neither lags the click nor flickers through
 *    the sections it passes on the way.
 * 3. Scrolling happens in one place — `scrollToSection` — shared by the nav and
 *    by the in-page CTAs, so they cannot drift apart.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? '')
  // the destination we are currently scrolling to, and the offset it wants
  const pending = useRef<NavigateDetail | null>(null)
  const lockUntil = useRef(0)
  const kick = useRef<() => void>(() => {})
  const kickTimer = useRef(0)

  const select = useCallback((id: string) => {
    navigateToSection(id)
  }, [])

  // Any navigation, whoever started it, holds the highlight until arrival.
  useEffect(() => {
    const onNavigate = (event: Event) => {
      const detail = (event as CustomEvent<NavigateDetail>).detail
      if (!detail) return
      pending.current = detail
      lockUntil.current = Date.now() + 1400
      setActive(detail.id)

      // Belt and braces: scroll events should clear the lock on arrival, but if
      // the browser ends the animation without firing another one, re-evaluate
      // anyway so the highlight can never stay frozen on a stale section.
      window.clearTimeout(kickTimer.current)
      kickTimer.current = window.setTimeout(() => kick.current(), 1500)
    }

    window.addEventListener(NAVIGATE_EVENT, onNavigate)
    return () => {
      window.removeEventListener(NAVIGATE_EVENT, onNavigate)
      window.clearTimeout(kickTimer.current)
    }
  }, [])

  // Loading the page on `#about` should land where clicking About lands. The
  // browser's own hash jump measures the section box, so redo it against the
  // section's content.
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash || !ids.includes(hash)) return
    const frame = requestAnimationFrame(() => scrollToSection(hash, 'auto'))
    return () => cancelAnimationFrame(frame)
  }, [ids])

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    let frame = 0

    const compute = () => {
      // Hold the highlight on a clicked destination until we get there.
      const target = pending.current
      if (target) {
        const arrived = Math.abs(window.scrollY - target.top) < 2
        if (!arrived && Date.now() < lockUntil.current) return
        pending.current = null
      }

      // probe just past where a landed section's content sits
      const probe = window.scrollY + navHeight() + CONTENT_GAP + 8
      let current = sections[0].id

      for (const section of sections) {
        const top = section.getBoundingClientRect().top + window.scrollY
        if (top <= probe) current = section.id
      }

      // the last section can never reach the top, so pin it at page bottom
      if (window.scrollY >= maxScrollY() - 2) current = sections[sections.length - 1].id

      setActive(current)
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(compute)
    }

    kick.current = compute
    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frame)
      kick.current = () => {}
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])

  return [active, select] as const
}
