'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Close menu when clicking a link
  const handleLinkClick = () => {
    onClose();
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div 
      className={`fixed inset-0 bg-black z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center px-6 py-4 border-b border-ash/20">
          <div className="text-2xl font-bold">
            <span className="gradient-text">Agni</span>Cult
          </div>
          <button 
            onClick={onClose}
            className="text-white p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-6">
          <nav className="flex flex-col space-y-6">
            <Link 
              href="#about" 
              className="text-lg uppercase tracking-wider border-b border-ash/10 pb-4 hover:text-ember transition-colors"
              onClick={handleLinkClick}
            >
              Philosophy
            </Link>
            <Link 
              href="#training" 
              className="text-lg uppercase tracking-wider border-b border-ash/10 pb-4 hover:text-ember transition-colors"
              onClick={handleLinkClick}
            >
              Training + Rituals
            </Link>
            <Link 
              href="#community" 
              className="text-lg uppercase tracking-wider border-b border-ash/10 pb-4 hover:text-ember transition-colors"
              onClick={handleLinkClick}
            >
              Community
            </Link>
            <Link 
              href="#transformation" 
              className="text-lg uppercase tracking-wider border-b border-ash/10 pb-4 hover:text-ember transition-colors"
              onClick={handleLinkClick}
            >
              Transformations
            </Link>
            <Link 
              href="#invite" 
              className="text-lg uppercase tracking-wider border-b border-ash/10 pb-4 hover:text-ember transition-colors"
              onClick={handleLinkClick}
            >
              Join The Cult
            </Link>
          </nav>
        </div>
        
        <div className="p-6 border-t border-ash/20">
          <button className="w-full py-3 bg-ember text-white font-bold tracking-wide uppercase hover:bg-ember-dark transition-colors">
            Enter the Cult
          </button>
        </div>
      </div>
    </div>
  );
} 