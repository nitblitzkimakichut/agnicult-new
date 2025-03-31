'use client'

export default function TransformationSection() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-black">
      <div className="absolute left-0 top-0 w-full h-full bg-[url('/images/noise-pattern.png')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Transformation</span> Results
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The AgniCult methodology doesn't just change bodies. It rewires genetics and recodes mental frameworks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-ash/10 p-6 border border-ash/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-ash/50 rounded-full overflow-hidden mr-4">
                <img src="/images/testimonial-1.jpg" alt="Testimonial" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold">Rajesh K.</h4>
                <p className="text-xs text-gray-400">8 months in the Cult</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              "I've tried every fitness program out there. None transformed me like AgniCult. 
              This isn't just physical—my entire presence has shifted. People sense it when I walk into a room."
            </p>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xs text-ember mr-2">VIEW TRANSFORMATION</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ember inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div className="flex">
                <div className="w-2 h-2 bg-ember rounded-full mr-1"></div>
                <div className="w-2 h-2 bg-ember rounded-full mr-1"></div>
                <div className="w-2 h-2 bg-ember rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-ash/10 p-6 border border-ash/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-ash/50 rounded-full overflow-hidden mr-4">
                <img src="/images/testimonial-2.jpg" alt="Testimonial" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold">Priya M.</h4>
                <p className="text-xs text-gray-400">5 months in the Cult</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              "The women's wing of AgniCult has been revolutionary. The ancient practices 
              combined with modern science have completely changed my hormonal balance and confidence."
            </p>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xs text-ember mr-2">VIEW TRANSFORMATION</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ember inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div className="flex">
                <div className="w-2 h-2 bg-ember rounded-full mr-1"></div>
                <div className="w-2 h-2 bg-ember rounded-full mr-1"></div>
                <div className="w-2 h-2 bg-ember rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-ash/10 p-6 border border-ash/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-ash/50 rounded-full overflow-hidden mr-4">
                <img src="/images/testimonial-3.jpg" alt="Testimonial" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold">Vikram S.</h4>
                <p className="text-xs text-gray-400">12 months in the Cult</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              "I was skeptical about the genetic expression claims, but seeing my facial structure 
              change and testosterone levels double has made me a believer. This is beyond fitness."
            </p>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xs text-ember mr-2">VIEW TRANSFORMATION</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ember inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div className="flex">
                <div className="w-2 h-2 bg-ember rounded-full mr-1"></div>
                <div className="w-2 h-2 bg-ember rounded-full mr-1"></div>
                <div className="w-2 h-2 bg-ember rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-ash/10 p-8 border border-ash/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Transformation Metrics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-ember mb-2">87%</div>
                <p className="text-sm text-gray-400">Report significant testosterone increase</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-ember mb-2">93%</div>
                <p className="text-sm text-gray-400">Achieve target body composition</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-ember mb-2">78%</div>
                <p className="text-sm text-gray-400">Experience facial structure changes</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-ember mb-2">96%</div>
                <p className="text-sm text-gray-400">Report improved mental discipline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 