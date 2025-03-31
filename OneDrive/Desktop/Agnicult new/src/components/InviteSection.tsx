'use client'

import { useState } from 'react'

export default function InviteSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    code: ''
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (would connect to backend in real implementation)
    console.log('Form submitted:', formData)
  }
  
  return (
    <section id="invite" className="relative w-full py-20 md:py-32 bg-black">
      <div className="absolute left-0 top-0 w-full h-full bg-[url('/images/ember-pattern.jpg')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Enter</span> The Cult
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              AgniCult is invite-only. Prove your worthiness to join our brotherhood of fire.
            </p>
          </div>
          
          <div className="bg-ash/10 p-8 border border-ash/20">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-2 text-gray-300">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/80 border border-ash/50 p-3 text-white focus:border-ember focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-2 text-gray-300">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/80 border border-ash/50 p-3 text-white focus:border-ember focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="reason" className="block text-sm uppercase tracking-wider mb-2 text-gray-300">Why Should We Accept You?</label>
                <textarea 
                  id="reason" 
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full bg-black/80 border border-ash/50 p-3 text-white focus:border-ember focus:outline-none transition-colors h-32 resize-none"
                  required
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label htmlFor="code" className="block text-sm uppercase tracking-wider mb-2 text-gray-300">Invitation Code (If Any)</label>
                <input 
                  type="text" 
                  id="code" 
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  className="w-full bg-black/80 border border-ash/50 p-3 text-white focus:border-ember focus:outline-none transition-colors"
                />
              </div>
              
              <div className="text-center mt-10">
                <button 
                  type="submit"
                  className="px-12 py-4 bg-ember text-white font-bold tracking-wide uppercase hover:bg-ember-dark transition-colors ember-glow"
                >
                  Prove Your Worth
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 text-center text-gray-500 text-sm">
            <p>Membership: ₹2,000 for lifetime access upon approval</p>
            <p className="mt-2">Only serious aspirants need apply. No refunds. No excuses.</p>
          </div>
        </div>
      </div>
    </section>
  )
} 