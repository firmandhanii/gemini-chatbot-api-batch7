'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Fasilitas', id: 'features' },
    { label: 'Spesifikasi', id: 'specs' },
    { label: 'Lokasi', id: 'location' },
    { label: 'Galeri', id: 'gallery' },
    { label: 'Agen', id: 'agent' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center -my-3">
            <span 
              className="text-4xl md:text-5xl font-black tracking-wide drop-shadow-md"
              style={{ 
                color: 'var(--property-green)',
                fontFamily: '"Poppins", "Arial", sans-serif',
                letterSpacing: '-0.5px',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Yan Property
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-lg font-medium text-white transition-colors"
              style={{ backgroundColor: 'var(--property-green)' }}
            >
              Hubungi Kami
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full px-4 py-2 rounded-lg font-medium text-white transition-colors"
              style={{ backgroundColor: 'var(--property-green)' }}
            >
              Hubungi Kami
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
