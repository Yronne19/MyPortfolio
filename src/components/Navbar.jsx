import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle.jsx'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-stone-200/80 bg-stone-50/85 backdrop-blur-lg dark:border-zinc-800/80 dark:bg-zinc-950/80'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 font-mono text-sm font-bold text-zinc-950 shadow-sm shadow-amber-500/30 transition group-hover:bg-amber-400">
            <span>{'{}'}</span>
          </span>
          <span className="font-mono text-sm font-medium tracking-tight text-stone-700 dark:text-zinc-300">
            yronne<span className="text-amber-500">.env</span>
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="flex items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-2.5 py-2 text-sm font-medium text-stone-600 transition hover:bg-stone-200/60 hover:text-stone-900 sm:px-3.5 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
        </div>
      </nav>
    </header>
  )
}
