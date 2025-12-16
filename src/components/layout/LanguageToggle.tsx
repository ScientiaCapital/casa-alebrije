import { useTranslation } from 'react-i18next'

export function LanguageToggle() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-brown-300 hover:border-brown-500 transition-colors text-sm font-medium text-brown-700"
    >
      <span className={i18n.language === 'en' ? 'opacity-100' : 'opacity-50'}>EN</span>
      <span className="text-brown-300">|</span>
      <span className={i18n.language === 'es' ? 'opacity-100' : 'opacity-50'}>ES</span>
    </button>
  )
}
