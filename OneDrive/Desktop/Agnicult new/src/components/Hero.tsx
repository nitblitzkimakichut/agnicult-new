'use client'

import React, { useEffect } from 'react'
import { animateOnScroll, addEmberEffect } from '@/app/animations'

export default function Hero() {
  useEffect(() => {
    // Initialize animations when component mounts
    animateOnScroll();
    addEmberEffect();
  }, []);
  
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Video/Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-black z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute inset-0 bg-[url('/images/dark-fire-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tighter">
          <span className="gradient-text reveal-on-scroll">BECOME</span> <span className="flicker ember-effect">FIRE</span>
          <br />
          <span className="text-4xl md:text-6xl opacity-80 reveal-on-scroll">NOT JUST FIT</span>
        </h1>
        
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 reveal-on-scroll">
          An elite, invite-only transformation ecosystem engineered for those who 
          refuse mediocrity and seek genetic-level change.
        </p>
        
        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center reveal-on-scroll">
          <button className="px-10 py-3 bg-ember text-white font-bold tracking-wide uppercase hover:bg-ember-dark transition-colors ember-glow">
            Enter the Cult
          </button>
          <button className="px-10 py-3 border border-white/20 text-white font-bold tracking-wide uppercase hover:border-ember hover:text-ember transition-colors">
            Discover More
          </button>
        </div>
        
        <div className="mt-20 text-xs uppercase tracking-widest text-gray-500 flex items-center justify-center opacity-0 animate-[fadeIn_1s_ease-in-out_forwards_1.5s]">
          <div className="w-12 h-px bg-ember mr-3"></div>
          Scroll to Initiate
          <div className="w-12 h-px bg-ember ml-3"></div>
        </div>
      </div>
    </section>
  )
} 