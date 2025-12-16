import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { MapPin, Clock, Coffee, ShoppingBag } from 'lucide-react'

export function Location() {
  const { t } = useTranslation()

  const highlights = [
    { icon: MapPin, text: t('location.fridaKahlo'), time: '5 min' },
    { icon: Coffee, text: t('location.coyoacan'), time: '' },
    { icon: ShoppingBag, text: t('location.markets'), time: '' },
  ]

  return (
    <section id="location" className="py-24 bg-teal-500 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-teal-200 text-sm font-medium tracking-wider uppercase mb-4 block">
              Coyoacán
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              {t('location.title')}
            </h2>
            <p className="text-teal-100 text-lg leading-relaxed mb-8">
              {t('location.subtitle')}
            </p>

            <ul className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span>{item.text}</span>
                  {item.time && (
                    <span className="ml-auto bg-white/20 px-3 py-1 rounded-full text-sm">
                      {item.time}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <Button
              variant="outlineLight"
              onClick={() => window.open('https://maps.google.com/?q=Casa+Alebrije+Coyoacan+Mexico+City', '_blank')}
            >
              {t('location.getDirections')}
            </Button>
          </div>

          {/* Map placeholder */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.5!2d-99.16!3d19.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIxJzAwLjAiTiA5OcKwMDknMzYuMCJX!5e0!3m2!1sen!2smx!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
