import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgniCult | Become Fire. Not Just Fit.',
  description: 'An elite, invite-only fitness and transformation cult engineered to awaken fire in high-performance individuals.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
} 