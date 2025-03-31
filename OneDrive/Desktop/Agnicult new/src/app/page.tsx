import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import TrainingSection from '@/components/TrainingSection'
import CommunitySection from '@/components/CommunitySection'
import TransformationSection from '@/components/TransformationSection'
import InviteSection from '@/components/InviteSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Hero />
      <AboutSection />
      <TrainingSection />
      <CommunitySection />
      <TransformationSection />
      <InviteSection />
      <Footer />
    </main>
  )
} 