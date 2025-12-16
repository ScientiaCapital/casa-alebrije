import { useTranslation } from 'react-i18next'
import { Instagram, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer id="contact" className="bg-brown-900 text-sand-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-terracotta-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-display text-xl">A</span>
              </div>
              <div>
                <span className="font-display text-xl text-white">Casa Alebrije</span>
                <span className="block text-xs text-sand-400">Hotel Boutique</span>
              </div>
            </div>
            <p className="text-sand-400 text-sm leading-relaxed max-w-md">
              A sanctuary where the rich heritage of the Zapotecs meets the boundless imagination of the alebrijes. Experience Mexico City's magic in Coyoacán.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+525523812322" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  +52 55 2381 2322
                </a>
              </li>
              <li>
                <a href="mailto:recepcion@casa-alebrije.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  recepcion@casa-alebrije.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Casa+Alebrije+Coyoacan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Coyoacán, CDMX
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-white font-medium mb-4">{t('footer.hours')}</h4>
            <p className="text-sm text-sand-400 mb-1">{t('footer.hoursTueSat')}</p>
            <p className="text-sm text-sand-400 mb-6">{t('footer.hoursSunMon')}</p>

            <h4 className="text-white font-medium mb-3">{t('footer.followUs')}</h4>
            <a
              href="https://www.instagram.com/hotelcasaalebrije/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sand-400 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @hotelcasaalebrije
            </a>
          </div>
        </div>

        <div className="border-t border-brown-800 mt-12 pt-8 text-center text-sm text-sand-500">
          <p>© {new Date().getFullYear()} Hotel Boutique Casa Alebrije. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  )
}
