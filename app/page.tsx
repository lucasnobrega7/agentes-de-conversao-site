import { Navbar } from '../components/navbar'
import { Hero } from '../components/hero'
import { Features } from '../components/features'
import { CTA } from '../components/cta'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}