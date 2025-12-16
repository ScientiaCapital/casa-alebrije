import { useTranslation } from 'react-i18next'
import { Card, CardContent } from '@/components/ui/card'
import { testimonials } from '@/data/testimonials'
import { Star, Quote } from 'lucide-react'

export function Testimonials() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'en' | 'es'

  return (
    <section className="py-24 bg-sand-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-brown-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-brown-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-terracotta-300 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-brown-700 leading-relaxed mb-6">
                  "{testimonial.text[lang]}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-terracotta-100 rounded-full flex items-center justify-center">
                    <span className="text-terracotta-600 font-medium">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-brown-900">{testimonial.name}</p>
                    <p className="text-sm text-brown-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* TripAdvisor badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
              ))}
            </div>
            <span className="text-brown-700 font-medium">Excellent on TripAdvisor</span>
          </div>
        </div>
      </div>
    </section>
  )
}
