/**
 * All site copy and content, kept in one place so it can be edited without
 * touching component markup.
 */

export const profile = {
  name: 'Anurag K P',
  greeting: 'Hello, I’m',
  roles: ['AI & DS Student', 'App Developer', 'Problem Solver'],
  headline: 'Anurag K P',
  blurb:
    'I’m pursuing a B.Tech in Artificial Intelligence & Data Science at CMSCET. I build AI-powered apps, web platforms, and practical tools that turn technology into real-world impact.',
  aboutTitle: 'A Bit About Me',
  aboutBody:
    'I’m Anurag K P, a B.Tech student in Artificial Intelligence & Data Science at CMSCET. I’m passionate about building useful products with technology, and I enjoy solving real-world problems, exploring AI, and developing scalable apps and web platforms.',
  email: 'anuragkaruthodi@gmail.com',
  location: 'Palakkad, Kerala',
}

export const socials = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/anuragkp-dev' },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anurag-k-p-70a3873b5/',
  },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/ig_anuragkp/' },
  { id: 'mail', label: 'Email', href: `mailto:${profile.email}` },
] as const

export const githubProfile = 'https://github.com/anuragkp-dev'

export const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

/** Orbit badges floating around the hero cube. `kind` picks the icon family. */
export const orbitBadges = [
  { id: 'ai', label: 'AI & ML', icon: 'brain', kind: 'ui', position: 'top' },
  { id: 'flutter', label: 'Flutter', icon: 'flutter', kind: 'tech', position: 'left' },
  { id: 'web', label: 'Web Dev', icon: 'globe', kind: 'ui', position: 'right' },
  { id: 'data', label: 'Data Science', icon: 'chart', kind: 'ui', position: 'bottomLeft' },
  { id: 'uiux', label: 'UI / UX', icon: 'cursor', kind: 'ui', position: 'bottomRight' },
] as const

export const aboutFacts = [
  { id: 'degree', icon: 'cap', title: 'B.Tech AI & DS', subtitle: 'CMSCET, Coimbatore' },
  { id: 'sem', icon: 'calendar', title: '3rd Semester', subtitle: '' },
  { id: 'place', icon: 'pin', title: 'Palakkad, Kerala', subtitle: '' },
  { id: 'goal', icon: 'target', title: 'Aspiring', subtitle: 'Software Engineer' },
]

export type SkillGroup = 'dev' | 'ai' | 'tools'

export const skillFilters: { id: 'all' | SkillGroup; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'dev', label: 'Development' },
  { id: 'ai', label: 'AI / Data' },
  { id: 'tools', label: 'Tools' },
]

export const skills: { id: string; name: string; group: SkillGroup }[] = [
  { id: 'flutter', name: 'Flutter', group: 'dev' },
  { id: 'python', name: 'Python', group: 'ai' },
  { id: 'java', name: 'Java', group: 'dev' },
  { id: 'c', name: 'C', group: 'dev' },
  { id: 'sql', name: 'SQL', group: 'ai' },
  { id: 'react', name: 'React', group: 'dev' },
  { id: 'firebase', name: 'Firebase', group: 'tools' },
  { id: 'html5', name: 'HTML5', group: 'dev' },
  { id: 'css3', name: 'CSS3', group: 'dev' },
  { id: 'javascript', name: 'JavaScript', group: 'dev' },
  { id: 'github', name: 'GitHub', group: 'tools' },
  { id: 'vscode', name: 'VS Code', group: 'tools' },
  { id: 'jupyter', name: 'Jupyter', group: 'ai' },
  { id: 'figma', name: 'Figma', group: 'tools' },
]

export const skillsIntro = 'The technologies I use to design, build, and ship projects.'

/**
 * Slides for the featured-project carousel. Today only MenuAashan has a public
 * URL; add more entries (with `url` / `repo`) and the carousel controls appear
 * automatically.
 */
export const featuredProjects = [
  {
    id: 'menuaashan',
    name: 'MenuAashan',
    tag: 'Featured',
    kicker: 'Modern Restaurant OS & Digital QR Menus',
    description:
      'A zero-commission restaurant platform with instant QR table menus, a Gemini AI scanner that digitizes paper menus in seconds, live out-of-stock tracking, and real-time kitchen order sync.',
    tech: ['React', 'Firebase', 'Gemini AI', 'Razorpay'],
    mockBrand: 'MenuAashan',
    mockSub: 'Digital Menu for Modern Restaurants',
    url: 'https://menuaashan.vercel.app/',
    // The repo referenced by menuaashan.vercel.app's JSON-LD
    // (github.com/sreerag-kp/menu-platform) returns 404 for anonymous
    // visitors, so "View Project" stays hidden. Put a public repo URL here
    // and the button reappears.
    repo: '',
  },
]

/** `url` empty means there is no public destination yet — the card renders unlinked. */
export const projects = [
  {
    id: 'menu-scanner',
    icon: 'scan',
    title: 'AI Menu Scanner',
    description: 'Extracts menu items from photos of printed menus using AI.',
    tech: ['Python', 'OpenCV'],
    url: '',
  },
  {
    id: 'student-portal',
    icon: 'school',
    title: 'Student Portal',
    description: 'An academic and placement management platform for students.',
    tech: ['Flutter', 'Firebase'],
    url: '',
  },
  {
    id: 'weather',
    icon: 'cloud',
    title: 'Weather Insights',
    description: 'Local weather analysis and visualization.',
    tech: ['Python', 'Data'],
    url: '',
  },
  {
    id: 'portfolio',
    icon: 'sparkle',
    title: 'Personal Portfolio',
    description: 'This animated portfolio, built with React and TypeScript.',
    tech: ['React', 'TypeScript'],
    url: '',
  },
]

export const experience = [
  {
    id: 'dev',
    icon: 'briefcase',
    title: 'Project Developer',
    subtitle: 'MenuAashan — Personal Project',
    period: '2025 – Present',
  },
  {
    id: 'hack',
    icon: 'code',
    title: 'Hackathon & Innovation',
    subtitle: 'College-level hackathons',
    period: '2025',
  },
  {
    id: 'learn',
    icon: 'users',
    title: 'Technical Learner',
    subtitle: 'AI, data science & app development',
    period: 'Ongoing',
  },
]

export const highlights = [
  {
    id: 'deployed',
    icon: 'trophy',
    title: 'Built & Deployed Real-World Projects',
    subtitle: 'MenuAashan, web & mobile apps',
  },
  {
    id: 'ai',
    icon: 'star',
    title: 'Hands-on with AI & Data Science',
    subtitle: 'College-level hackathons',
  },
  {
    id: 'dsa',
    icon: 'bolt',
    title: 'Strong Foundation in DSA & Core CS',
    subtitle: 'Data structures, algorithms & systems',
  },
  {
    id: 'learning',
    icon: 'chart',
    title: 'Continuously Learning & Building',
    subtitle: 'Always shipping something new',
  },
]

export const contact = {
  title: 'Let’s Build Something Together',
  blurb:
    'Have an idea or a project, or just want to connect? I’m always open to new opportunities and collaborations.',
}