import { useId } from 'react'

/**
 * The halftone dot-matrix wave that sits along the bottom of the hero and
 * contact sections. Two wave bands are drawn as masks over a dot pattern.
 */
export function DotWave({ className = '' }: { className?: string }) {
  const uid = useId().replace(/:/g, '')
  const gradId = `dw-grad-${uid}`
  const dotsId = `dw-dots-${uid}`
  const maskId = `dw-mask-${uid}`

  return (
    <svg
      className={`dotwave ${className}`}
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6d28d9" />
          <stop offset="42%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#d946ef" />
        </linearGradient>

        <pattern id={dotsId} width="13" height="13" patternUnits="userSpaceOnUse">
          <circle cx="2.2" cy="2.2" r="1.55" fill={`url(#${gradId})`} />
        </pattern>

        <mask id={maskId}>
          <path
            d="M0 128 C 210 74 400 168 660 126 C 920 84 1080 174 1440 116 L1440 200 L0 200 Z"
            fill="#fff"
            opacity="0.95"
          />
          <path
            d="M0 162 C 250 112 450 188 715 158 C 985 128 1185 190 1440 156 L1440 200 L0 200 Z"
            fill="#fff"
            opacity="0.7"
          />
          <path
            d="M0 186 C 300 156 520 200 780 182 C 1040 164 1220 200 1440 186 L1440 200 L0 200 Z"
            fill="#fff"
            opacity="0.5"
          />
        </mask>
      </defs>

      <rect width="1440" height="200" fill={`url(#${dotsId})`} mask={`url(#${maskId})`} />
    </svg>
  )
}
