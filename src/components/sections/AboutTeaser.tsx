import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

export function AboutTeaser() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop"
                alt="Alebrije art"
                className="rounded-2xl h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
                alt="Hotel interior"
                className="rounded-2xl h-64 object-cover mt-8"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-terracotta-600 text-white p-6 rounded-xl hidden md:block">
              <p className="font-display text-3xl">7</p>
              <p className="text-sm">Unique Suites</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-terracotta-600 text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-brown-900 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-brown-600 text-lg leading-relaxed mb-6">
              {t('about.description')}
            </p>
            <p className="text-brown-500 leading-relaxed mb-8">
              Each of our 7 suites is a tribute to a different alebrije guardian, featuring hand-selected art, vibrant colors, and thoughtful details that transport you into the world of Mexican folk art and spirituality.
            </p>
            <Button variant="outline">
              {t('about.readMore')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
