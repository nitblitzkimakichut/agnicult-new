'use client'

export default function CommunitySection() {
  return (
    <section id="community" className="relative w-full py-20 md:py-32 bg-gradient-to-b from-black to-[#0F0F0F]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative rounded-md overflow-hidden border border-ash/30">
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-ember/10"></div>
              <img 
                src="/images/discord-community.jpg" 
                alt="AgniCult Discord Community" 
                className="w-full h-auto"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="ml-2 text-xs text-gray-300">156 warriors online now</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="bg-ash/20 p-3 text-center">
                <p className="text-2xl font-bold text-ember">8</p>
                <p className="text-xs uppercase text-gray-400">Trainers</p>
              </div>
              <div className="bg-ash/20 p-3 text-center">
                <p className="text-2xl font-bold text-ember">1,247</p>
                <p className="text-xs uppercase text-gray-400">Members</p>
              </div>
              <div className="bg-ash/20 p-3 text-center">
                <p className="text-2xl font-bold text-ember">97%</p>
                <p className="text-xs uppercase text-gray-400">Retention</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Join</span> The Cult
            </h2>
            
            <p className="mb-6 text-gray-300">
              AgniCult isn't just a training program. It's a brotherhood and sisterhood of warriors committed
              to genetic excellence and inner transformation.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-8 h-8 rounded-full bg-ember/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Private Discord Server</h3>
                  <p className="text-sm text-gray-400">
                    Access our exclusive Discord server where all training, discussions, and transformations happen.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-8 h-8 rounded-full bg-ember/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Personalized Coaching</h3>
                  <p className="text-sm text-gray-400">
                    One-on-one guidance from EREPS-certified trainers who understand your unique biological profile.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-8 h-8 rounded-full bg-ember/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Weekly Fire Rituals</h3>
                  <p className="text-sm text-gray-400">
                    Participate in our weekly synchronous training sessions and accountability check-ins.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-8 h-8 rounded-full bg-ember/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Transformation Tracking</h3>
                  <p className="text-sm text-gray-400">
                    Document your journey with our proprietary tracking system that monitors genetic-level changes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="bg-ash/20 border-l-2 border-ember p-4">
                <p className="italic text-sm text-gray-300">
                  "This is not for the casual. This is for warriors who want to become legendary.
                  If you're looking for a quick fix, look elsewhere. If you're ready to transform your very DNA, welcome home."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 