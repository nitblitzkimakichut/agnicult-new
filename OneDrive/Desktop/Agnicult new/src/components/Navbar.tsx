'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Lock scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  
  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          <div className="text-2xl font-bold">
            <span className="gradient-text">Agni</span>Cult
          </div>
          
          <div className="hidden md:flex space-x-6 text-sm uppercase tracking-wider">
            <Link href="#about" className="hover:text-ember transition-colors">Philosophy</Link>
            <Link href="#training" className="hover:text-ember transition-colors">Training</Link>
            <Link href="#community" className="hover:text-ember transition-colors">Community</Link>
            <Link href="#invite" className="hover:text-ember transition-colors">Enter the Cult</Link>
          </div>
          
          <button 
            className="hidden md:block px-4 py-2 border border-ember text-ember hover:bg-ember hover:text-white transition-all"
            aria-label="Join the Fire"
          >
            Join the Fire
          </button>
          
          {/* Mobile menu toggle */}
          <button 
            className="md:hidden text-white p-2 flex items-center justify-center" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
} 