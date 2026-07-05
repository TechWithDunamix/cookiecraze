import { useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-warm-200/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-10">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Cookie Craze" className="h-10 w-auto" />
          <span className="font-display text-2xl tracking-wide text-warm-900">Cookie <span className="text-brand-500">Craze</span></span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link key={l.href} to={l.href} className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${pathname === l.href ? 'text-brand-500' : 'text-warm-800/50 hover:text-warm-900'}`}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="relative z-20 flex md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-0 border-b border-warm-200/50 bg-white pt-20 pb-6 shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center gap-2 px-6">
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={`w-full rounded-xl px-5 py-3 text-center font-display text-2xl tracking-wide transition-all ${
                    pathname === l.href ? 'bg-brand-500 text-white' : 'text-warm-800/60 hover:bg-warm-100'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
