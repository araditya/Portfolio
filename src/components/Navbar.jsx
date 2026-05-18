import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (section) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span
          className="text-xl font-bold text-slate-800 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Aditya<span className="text-blue-600">.</span>
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleNav(link)}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-slate-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="text-slate-700 hover:text-blue-600 font-medium text-left"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
