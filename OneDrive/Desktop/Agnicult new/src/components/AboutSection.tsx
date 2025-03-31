'use client'

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">What Is</span> AgniCult?
            </h2>
            
            <p className="mb-6 text-gray-300 text-lg">
              Not a fitness program. A transformation ecosystem built for the top 1% who seek 
              genetic-level change and total life optimization.
            </p>
            
            <p className="mb-6 text-gray-300">
              AgniCult combines ancient Indian biohacking with modern science to engineer warriors, 
              not just fit individuals. We transcend the physical to transform your entire biological expression.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="bg-ash/20 p-5 border-l-2 border-ember">
                <h3 className="text-lg font-bold mb-2">Elite Exclusivity</h3>
                <p className="text-sm text-gray-400">Invite-only community of serious aspirants. No casuals. No excuses.</p>
              </div>
              
              <div className="bg-ash/20 p-5 border-l-2 border-ember">
                <h3 className="text-lg font-bold mb-2">Scientific Rituals</h3>
                <p className="text-sm text-gray-400">Ancient practices validated by cutting-edge research for optimal gene expression.</p>
              </div>
              
              <div className="bg-ash/20 p-5 border-l-2 border-ember">
                <h3 className="text-lg font-bold mb-2">Certified Guides</h3>
                <p className="text-sm text-gray-400">8 EREPS-certified trainers providing 1-on-1 guidance through your transformation.</p>
              </div>
              
              <div className="bg-ash/20 p-5 border-l-2 border-ember">
                <h3 className="text-lg font-bold mb-2">Cult Philosophy</h3>
                <p className="text-sm text-gray-400">Built on discipline, ancient wisdom, and scientific optimization protocols.</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-ember/30"></div>
                <img 
                  src="/images/warrior-meditation.jpg" 
                  alt="Warrior in meditation pose" 
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 p-6 bg-ash/90 max-w-xs">
              <p className="text-sm italic border-l-2 border-ember pl-4">
                "We do not merely train bodies. We ignite genetic potential that has lain dormant for generations."
              </p>
              <p className="text-xs text-ember mt-2 text-right">- FOUNDER, AGNICULT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 