export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: { en: string; es: string }
  date: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    location: "Austin, TX",
    rating: 5,
    text: {
      en: "Absolutely magical! The attention to detail in every room is incredible. Walking distance to Frida Kahlo museum and the staff made us feel like family. Can't wait to return!",
      es: "¡Absolutamente mágico! La atención al detalle en cada habitación es increíble. A poca distancia caminando del museo de Frida Kahlo y el personal nos hizo sentir como familia. ¡No puedo esperar a volver!"
    },
    date: "2024-11"
  },
  {
    id: "2",
    name: "Carlos R.",
    location: "Madrid, España",
    rating: 5,
    text: {
      en: "The perfect blend of Mexican tradition and modern comfort. The garden is a peaceful oasis, and the alebrije theme throughout the hotel is truly unique.",
      es: "La combinación perfecta de tradición mexicana y confort moderno. El jardín es un oasis de paz, y el tema de alebrijes en todo el hotel es verdaderamente único."
    },
    date: "2024-10"
  },
  {
    id: "3",
    name: "Jennifer & Tom",
    location: "San Francisco, CA",
    rating: 5,
    text: {
      en: "Our anniversary trip was made perfect by Casa Alebrije. The Suite Lechuza was stunning, and the 24-hour coffee station was a wonderful touch. Coyoacán is the best neighborhood!",
      es: "Nuestro viaje de aniversario fue perfecto gracias a Casa Alebrije. La Suite Lechuza era impresionante, y la estación de café 24 horas fue un toque maravilloso. ¡Coyoacán es el mejor barrio!"
    },
    date: "2024-09"
  },
  {
    id: "4",
    name: "Marco P.",
    location: "Milan, Italy",
    rating: 5,
    text: {
      en: "As a designer, I was blown away by the authentic Mexican aesthetics. Every corner tells a story. The location in Coyoacán is perfect for exploring the artistic soul of Mexico City.",
      es: "Como diseñador, me impresionó la auténtica estética mexicana. Cada rincón cuenta una historia. La ubicación en Coyoacán es perfecta para explorar el alma artística de la Ciudad de México."
    },
    date: "2024-08"
  }
]
