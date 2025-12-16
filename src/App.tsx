import '@/i18n/config'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { RoomsPreview } from '@/components/sections/RoomsPreview'
import { AboutTeaser } from '@/components/sections/AboutTeaser'
import { Location } from '@/components/sections/Location'
import { Testimonials } from '@/components/sections/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <RoomsPreview />
        <AboutTeaser />
        <Location />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
