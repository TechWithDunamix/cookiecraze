import { Link, useLocation } from '@tanstack/react-router'

const links = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const { pathname } = useLocation()
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-warm-200/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-10">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-white text-xl">🍪</span>
          <span className="font-display text-2xl tracking-wide text-warm-900">Cookie <span className="text-brand-500">Craze</span></span>
        </Link>
        <div className="flex items-center gap-1">
          {links.map((l) => (
            <Link key={l.href} to={l.href} className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${pathname === l.href ? 'text-brand-500' : 'text-warm-800/50 hover:text-warm-900'}`}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
