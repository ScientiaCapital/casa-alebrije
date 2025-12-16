import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { LanguageToggle } from './LanguageToggle'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const { t } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-terracotta-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-display text-xl">A</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-xl text-brown-900">Casa Alebrije</span>
              <span className="block text-xs text-brown-500 -mt-1">Hotel Boutique</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#rooms" className="text-sm text-brown-700 hover:text-terracotta-600 transition-colors">
              {t('nav.rooms')}
            </a>
            <a href="#about" className="text-sm text-brown-700 hover:text-terracotta-600 transition-colors">
              {t('nav.about')}
            </a>
            <a href="#location" className="text-sm text-brown-700 hover:text-terracotta-600 transition-colors">
              {t('nav.location')}
            </a>
            <a href="#contact" className="text-sm text-brown-700 hover:text-terracotta-600 transition-colors">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Button variant="terracotta" size="sm" className="hidden sm:flex">
              {t('nav.bookNow')}
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-brown-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 border-t border-sand-200 mt-4">
            <div className="flex flex-col gap-4">
              <a href="#rooms" className="text-brown-700 hover:text-terracotta-600" onClick={() => setMobileMenuOpen(false)}>
                {t('nav.rooms')}
              </a>
              <a href="#about" className="text-brown-700 hover:text-terracotta-600" onClick={() => setMobileMenuOpen(false)}>
                {t('nav.about')}
              </a>
              <a href="#location" className="text-brown-700 hover:text-terracotta-600" onClick={() => setMobileMenuOpen(false)}>
                {t('nav.location')}
              </a>
              <a href="#contact" className="text-brown-700 hover:text-terracotta-600" onClick={() => setMobileMenuOpen(false)}>
                {t('nav.contact')}
              </a>
              <Button variant="terracotta" className="mt-2">
                {t('nav.bookNow')}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
