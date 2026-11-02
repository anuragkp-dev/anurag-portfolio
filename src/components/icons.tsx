import type { ReactElement } from 'react'

/**
 * Icons are grouped into three families so each can share a consistent style:
 *  - UiIcon    — stroked line glyphs, inherit `currentColor`
 *  - SocialIcon — filled brand marks, inherit `currentColor`
 *  - TechIcon  — filled brand marks wearing their official colours
 */

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const svgProps = {
  viewBox: '0 0 24 24',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
  focusable: false,
} as const

const paths: Record<string, ReactElement> = {
  moon: <path {...stroke} d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5z" />,
  sun: (
    <>
      <circle {...stroke} cx="12" cy="12" r="4" />
      <path
        {...stroke}
        d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4"
      />
    </>
  ),
  arrowUpRight: <path {...stroke} d="M7 17 17 7M9 7h8v8" />,
  arrowRight: <path {...stroke} d="M5 12h14M13 6l6 6-6 6" />,
  arrowLeft: <path {...stroke} d="M19 12H5M11 18l-6-6 6-6" />,
  download: <path {...stroke} d="M12 4v11m0 0 4-4m-4 4-4-4M5 19h14" />,
  menu: <path {...stroke} d="M4 7h16M4 12h16M4 17h16" />,
  close: <path {...stroke} d="M6 6l12 12M18 6L6 18" />,
  brain: (
    <>
      <path
        {...stroke}
        d="M9.5 4.5A2.5 2.5 0 0 0 7 7a2.5 2.5 0 0 0-1.4 4.5A2.5 2.5 0 0 0 7 16a2.5 2.5 0 0 0 2.5 2.5zM14.5 4.5A2.5 2.5 0 0 1 17 7a2.5 2.5 0 0 1 1.4 4.5A2.5 2.5 0 0 1 17 16a2.5 2.5 0 0 1-2.5 2.5z"
      />
      <path {...stroke} d="M12 4.5v15M9.5 9.5h2.5M14.5 13.5H12" />
    </>
  ),
  globe: (
    <>
      <circle {...stroke} cx="12" cy="12" r="9" />
      <path {...stroke} d="M3.5 9.5h17M3.5 14.5h17" />
      <path {...stroke} d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
    </>
  ),
  chart: <path {...stroke} d="M4 20h16M7.5 20v-5.5M12 20V8.5M16.5 20v-8.5M4 8h.01" />,
  cursor: <path {...stroke} d="M6 3.5 18.5 10l-5.4 1.7L10.5 17z" />,
  cap: (
    <>
      <path {...stroke} d="M3 9l9-4 9 4-9 4z" />
      <path {...stroke} d="M7 11v4.6c0 1 2.2 1.9 5 1.9s5-.9 5-1.9V11" />
    </>
  ),
  calendar: (
    <>
      <rect {...stroke} x="4" y="6" width="16" height="14" rx="2.2" />
      <path {...stroke} d="M8 3.5V6M16 3.5V6M4 10.5h16" />
    </>
  ),
  pin: (
    <>
      <path {...stroke} d="M12 21s6.5-5.4 6.5-10.4a6.5 6.5 0 0 0-13 0C5.5 15.6 12 21 12 21z" />
      <circle {...stroke} cx="12" cy="10.5" r="2.2" />
    </>
  ),
  target: (
    <>
      <circle {...stroke} cx="12" cy="12" r="8.5" />
      <circle {...stroke} cx="12" cy="12" r="4.3" />
      <circle fill="currentColor" cx="12" cy="12" r="1.4" />
    </>
  ),
  scan: (
    <>
      <path {...stroke} d="M4 8.5V6a2 2 0 0 1 2-2h2.5M15.5 4H18a2 2 0 0 1 2 2v2.5M20 15.5V18a2 2 0 0 1-2 2h-2.5M8.5 20H6a2 2 0 0 1-2-2v-2.5" />
      <path {...stroke} d="M8 12h8" />
    </>
  ),
  school: (
    <>
      <path {...stroke} d="M12 4 3 8.5 12 13l9-4.5z" />
      <path {...stroke} d="M6.5 10.9V16c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-5.1" />
    </>
  ),
  cloud: <path {...stroke} d="M7.2 18a4 4 0 0 1-.5-8A5.5 5.5 0 0 1 17.2 9.6 3.8 3.8 0 0 1 16.6 18z" />,
  sparkle: (
    <>
      <path {...stroke} d="M11 3.5l1.7 4.8 4.8 1.7-4.8 1.7L11 16.5 9.3 11.7 4.5 10l4.8-1.7z" />
      <path {...stroke} d="M18 15l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" />
    </>
  ),
  briefcase: (
    <>
      <rect {...stroke} x="3.5" y="7.5" width="17" height="12" rx="2.2" />
      <path {...stroke} d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3.5 12.5h17" />
    </>
  ),
  code: <path {...stroke} d="M9 8.5 5 12l4 3.5M15 8.5 19 12l-4 3.5" />,
  users: (
    <>
      <circle {...stroke} cx="9" cy="8" r="3.4" />
      <path {...stroke} d="M2.8 20a6.2 6.2 0 0 1 12.4 0" />
      <path {...stroke} d="M16.2 5.1a3.4 3.4 0 0 1 0 6.6M17.6 14.4A6.2 6.2 0 0 1 21.2 20" />
    </>
  ),
  trophy: (
    <>
      <path {...stroke} d="M8 4h8v5.2a4 4 0 0 1-8 0z" />
      <path {...stroke} d="M8 5.4H5.6a2.6 2.6 0 0 0 2.6 4.7M16 5.4h2.4a2.6 2.6 0 0 1-2.6 4.7" />
      <path {...stroke} d="M12 13.2V16M9.6 20h4.8M10.3 16h3.4l.5 4h-4.4z" />
    </>
  ),
  star: <path {...stroke} d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z" />,
  bolt: <path {...stroke} d="M13.2 3 5.8 13.4h5.2l-.6 7.6L18.2 10.6H13z" />,
  envelope: (
    <>
      <rect {...stroke} x="3.2" y="5.5" width="17.6" height="13" rx="2.4" />
      <path {...stroke} d="M4 7.5l8 5.2 8-5.2" />
    </>
  ),
  utensils: (
    <>
      <path {...stroke} d="M8 3.2v6.4a2.2 2.2 0 0 0 4.4 0V3.2M10.2 12v9" />
      <path {...stroke} d="M16.4 3c-1.6 1.1-2.2 3.1-2.2 5s.6 3 2.2 3v10" />
    </>
  ),
  external: <path {...stroke} d="M14 4.5h5.5V10M19.5 4.5 11 13M17.5 14v4.2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8.8a2 2 0 0 1 2-2h4.2" />,
  check: <path {...stroke} d="M5 12.5l4.6 4.5L19 7" />,
}

export function UiIcon({ name, className }: { name: string; className?: string }): ReactElement | null {
  const d = paths[name]
  if (!d) return null
  return (
    <svg {...svgProps} className={className}>
      {d}
    </svg>
  )
}

const socials: Record<string, ReactElement> = {
  github: (
    <path
      fill="currentColor"
      d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.2 4.6 18.2 5 18.2 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"
    />
  ),
  linkedin: (
    <path
      fill="currentColor"
      d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zm1.78 13.02H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"
    />
  ),
  instagram: (
    <path
      fill="currentColor"
      d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56-.79.3-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14c-.3.76-.5 1.63-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.63.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"
    />
  ),
  mail: (
    <>
      <rect {...stroke} x="2.6" y="5.5" width="18.8" height="13" rx="2.4" />
      <path {...stroke} d="M3.4 7.5l8.6 5.6 8.6-5.6" />
    </>
  ),
}

export function SocialIcon({ name, className }: { name: string; className?: string }): ReactElement | null {
  const d = socials[name]
  if (!d) return null
  return (
    <svg {...svgProps} className={className}>
      {d}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Tech logos — approximations of each brand's mark in its brand colour */
/* ------------------------------------------------------------------ */

const tech: Record<string, ReactElement> = {
  flutter: (
    <>
      <path fill="#47C5FB" d="M14.314 0 2.3 12 6 15.7 21.684.013h-7.357z" />
      <path fill="#02569B" d="m14.328 11.072-6.47 6.458 6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.372z" />
    </>
  ),
  python: (
    <>
      <path
        fill="#3776AB"
        d="M11.9 0C5.9 0 6.1 2.6 6.1 2.6l.01 2.7h5.9v.8H3.8S0 5.7 0 11.9c0 6.2 3.3 6 3.3 6h2v-2.9s-.1-3.3 3.2-3.3h5.6s3.1.05 3.1-3V3.2S17.7 0 11.9 0zM8.6 1.9a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z"
      />
      <path
        fill="#FFD43B"
        d="M12.1 24c6 0 5.8-2.6 5.8-2.6l-.01-2.7h-5.9v-.8h8.2S24 18.3 24 12.1c0-6.2-3.3-6-3.3-6h-2v2.9s.1 3.3-3.2 3.3H9.9s-3.1-.05-3.1 3v5.5S6.3 24 12.1 24zm3.3-1.9a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z"
      />
    </>
  ),
  java: (
    <>
      <g fill="none" stroke="#E76F00" strokeWidth="1.5" strokeLinecap="round">
        <path d="M8.4 6.6c-1.5-1.6 1.5-2.8 0-4.4" />
        <path d="M12 7.6c-1.5-1.6 1.5-2.8 0-4.4" />
        <path d="M15.6 6.6c-1.5-1.6 1.5-2.8 0-4.4" />
      </g>
      <path fill="#5382A1" d="M4.4 10.4h12.4v5.1a4.8 4.8 0 0 1-4.8 4.8h-2.8a4.8 4.8 0 0 1-4.8-4.8z" />
      <path fill="#5382A1" d="M17.4 11.6h1.1a2.6 2.6 0 0 1 0 5.2h-1.1z" />
      <ellipse fill="#5382A1" cx="10.6" cy="21.7" rx="7.4" ry="1.1" />
    </>
  ),
  c: (
    <path
      d="M16.6 6.6A7.4 7.4 0 1 0 16.6 17.4"
      fill="none"
      stroke="#659AD2"
      strokeWidth="3.6"
      strokeLinecap="round"
    />
  ),
  sql: (
    <>
      <path fill="#4479A1" d="M4 4.3C4 3 7.6 1.9 12 1.9s8 1.1 8 2.4v15.4c0 1.3-3.6 2.4-8 2.4s-8-1.1-8-2.4z" />
      <ellipse cx="12" cy="4.3" rx="8" ry="2.4" fill="#74A9CC" />
      <g stroke="#fff" strokeWidth="1.15" fill="none" opacity=".9">
        <path d="M4 9.4c0 1.3 3.6 2.4 8 2.4s8-1.1 8-2.4" />
        <path d="M4 14.4c0 1.3 3.6 2.4 8 2.4s8-1.1 8-2.4" />
      </g>
    </>
  ),
  react: (
    <>
      <g fill="none" stroke="#61DAFB" strokeWidth="1.15">
        <ellipse cx="12" cy="12" rx="10.2" ry="4.1" />
        <ellipse cx="12" cy="12" rx="10.2" ry="4.1" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10.2" ry="4.1" transform="rotate(120 12 12)" />
      </g>
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
    </>
  ),
  firebase: (
    <>
      <path fill="#FFA000" d="M4.6 18.2 7.4 2.5c.06-.33.52-.4.68-.1l2.6 4.9z" />
      <path fill="#F57C00" d="M4.6 18.2 6.7 7.7c.04-.26.4-.33.52-.1l2.4 3.6z" />
      <path fill="#FFCA28" d="M4.6 18.2 9.8 7l9.6 11.2-6.7 3.9z" />
    </>
  ),
  html5: (
    <>
      <path fill="#E34F26" d="M3.2 2h17.6l-1.6 17.9L12 22l-7.2-2.1z" />
      <path fill="#F06529" d="M12 3.7v16.6l5.8-1.7L19.2 3.7z" />
      <text
        x="12.2"
        y="16.6"
        textAnchor="middle"
        fontSize="11.5"
        fontWeight="800"
        fill="#fff"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
      >
        5
      </text>
    </>
  ),
  css3: (
    <>
      <path fill="#1572B6" d="M3.2 2h17.6l-1.6 17.9L12 22l-7.2-2.1z" />
      <path fill="#33A9DC" d="M12 3.7v16.6l5.8-1.7L19.2 3.7z" />
      <text
        x="12.2"
        y="16.6"
        textAnchor="middle"
        fontSize="11.5"
        fontWeight="800"
        fill="#fff"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
      >
        3
      </text>
    </>
  ),
  javascript: (
    <>
      <rect width="24" height="24" rx="3.2" fill="#F7DF1E" />
      <text
        x="14.6"
        y="19"
        textAnchor="middle"
        fontSize="10"
        fontWeight="800"
        fill="#111"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
      >
        JS
      </text>
    </>
  ),
  github: (
    <path
      fill="#fff"
      d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.2 4.6 18.2 5 18.2 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"
    />
  ),
  vscode: (
    <path fill="#007ACC" d="M18 3.1 22 5v14l-4 1.9-9.3-6.7L4.4 17 2 15.5l3.4-3.5L2 8.5 4.4 7l4.3 2.8zm0 4.4-5.6 4.5L18 16.5z" />
  ),
  jupyter: (
    <>
      <circle cx="12" cy="13.4" r="6.2" fill="#F37626" />
      <ellipse cx="12" cy="12.6" rx="6.2" ry="1.5" fill="#fff" opacity=".55" />
      <circle cx="4.6" cy="4.6" r="1.6" fill="#F37626" />
      <circle cx="12" cy="3.2" r="1.6" fill="#F37626" />
      <circle cx="19.4" cy="4.6" r="1.6" fill="#F37626" />
    </>
  ),
  figma: (
    <>
      <path fill="#0ACF83" d="M8 24a4 4 0 0 0 4-4v-4H8a4 4 0 0 0 0 8z" />
      <path fill="#A259FF" d="M4 12a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" />
      <path fill="#F24E1E" d="M4 4a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" />
      <path fill="#FF7262" d="M12 0h4a4 4 0 0 1 0 8h-4z" />
      <path fill="#1ABCFE" d="M20 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
    </>
  ),
}

export function TechIcon({ name, className }: { name: string; className?: string }): ReactElement | null {
  const d = tech[name]
  if (!d) return null
  return (
    <svg {...svgProps} className={className}>
      {d}
    </svg>
  )
}
