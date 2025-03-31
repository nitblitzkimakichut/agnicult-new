'use client'

export default function TrainingSection() {
  return (
    <section id="training" className="relative w-full py-20 md:py-32 bg-black">
      <div className="absolute left-0 top-0 w-full h-full bg-[url('/images/sacred-geometry.svg')] bg-no-repeat bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Training</span> + Rituals
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our approach combines modern science with ancient Indian biohacking techniques
            for genetic-level transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testosterone Optimization */}
          <div className="bg-gradient-to-b from-ash/30 to-black p-6 border border-ash/20 hover:border-ember/50 transition-all group">
            <div className="w-16 h-16 mb-6 bg-ember/20 rounded-full flex items-center justify-center group-hover:bg-ember/30 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-ember transition-colors">Testosterone Optimization</h3>
            <p className="text-gray-400 text-sm mb-4">
              Ancient and modern protocols to maximize hormonal health and masculine energy.
            </p>
            <div className="pt-4 mt-4 border-t border-ash/30 text-xs text-ember uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
              Tap to explore protocols
            </div>
          </div>
          
          {/* Gene Expression */}
          <div className="bg-gradient-to-b from-ash/30 to-black p-6 border border-ash/20 hover:border-ember/50 transition-all group">
            <div className="w-16 h-16 mb-6 bg-ember/20 rounded-full flex items-center justify-center group-hover:bg-ember/30 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-ember transition-colors">Gene Expression</h3>
            <p className="text-gray-400 text-sm mb-4">
              Epigenetic training to unlock your dormant genetic potential through ancient techniques.
            </p>
            <div className="pt-4 mt-4 border-t border-ash/30 text-xs text-ember uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
              Tap to explore protocols
            </div>
          </div>
          
          {/* Body Language */}
          <div className="bg-gradient-to-b from-ash/30 to-black p-6 border border-ash/20 hover:border-ember/50 transition-all group">
            <div className="w-16 h-16 mb-6 bg-ember/20 rounded-full flex items-center justify-center group-hover:bg-ember/30 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-ember transition-colors">Body Language</h3>
            <p className="text-gray-400 text-sm mb-4">
              Warrior posture training and nonverbal dominance protocols from ancient traditions.
            </p>
            <div className="pt-4 mt-4 border-t border-ash/30 text-xs text-ember uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
              Tap to explore protocols
            </div>
          </div>
          
          {/* Facial Structure */}
          <div className="bg-gradient-to-b from-ash/30 to-black p-6 border border-ash/20 hover:border-ember/50 transition-all group">
            <div className="w-16 h-16 mb-6 bg-ember/20 rounded-full flex items-center justify-center group-hover:bg-ember/30 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-ember transition-colors">Facial Structure</h3>
            <p className="text-gray-400 text-sm mb-4">
              Ancient mewing techniques and facial muscle training for optimal structure and appearance.
            </p>
            <div className="pt-4 mt-4 border-t border-ash/30 text-xs text-ember uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
              Tap to explore protocols
            </div>
          </div>
          
          {/* Nutrition */}
          <div className="bg-gradient-to-b from-ash/30 to-black p-6 border border-ash/20 hover:border-ember/50 transition-all group">
            <div className="w-16 h-16 mb-6 bg-ember/20 rounded-full flex items-center justify-center group-hover:bg-ember/30 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-ember transition-colors">Nutrition</h3>
            <p className="text-gray-400 text-sm mb-4">
              Personalized nutrition protocols based on Vedic wisdom and modern nutritional science.
            </p>
            <div className="pt-4 mt-4 border-t border-ash/30 text-xs text-ember uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
              Tap to explore protocols
            </div>
          </div>
          
          {/* Self-Discipline */}
          <div className="bg-gradient-to-b from-ash/30 to-black p-6 border border-ash/20 hover:border-ember/50 transition-all group">
            <div className="w-16 h-16 mb-6 bg-ember/20 rounded-full flex items-center justify-center group-hover:bg-ember/30 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-ember transition-colors">Self-Discipline</h3>
            <p className="text-gray-400 text-sm mb-4">
              Ancient yogic willpower training and modern habit optimization systems.
            </p>
            <div className="pt-4 mt-4 border-t border-ash/30 text-xs text-ember uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
              Tap to explore protocols
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-ember text-white font-bold tracking-wide uppercase hover:bg-ember-dark transition-colors">
            Explore All Training Areas
          </button>
        </div>
      </div>
    </section>
  )
} 