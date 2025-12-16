import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image - Casa Alebrije building */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2825&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brown-900/60 via-brown-900/40 to-brown-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 bg-terracotta-600/90 text-white text-sm rounded-full mb-6">
            Coyoacán, Mexico City
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl text-white mb-4 leading-tight">
          {t('hero.title')}
          <br />
          <span className="text-terracotta-300">{t('hero.subtitle')}</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="terracotta" size="lg" className="text-base">
            {t('hero.cta')}
          </Button>
          <Button
            variant="outlineLight"
            size="lg"
            className="text-base"
            onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.explore')}
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex items-center justify-center gap-6 text-white/70">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-sm">TripAdvisor</span>
          </div>
          <div className="w-px h-6 bg-white/30" />
          <div className="text-sm">
            5 min → Frida Kahlo Museum
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  )
}
