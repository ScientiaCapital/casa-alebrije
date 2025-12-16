export interface Room {
  id: string
  slug: string
  name: { en: string; es: string }
  alebrije: string
  description: { en: string; es: string }
  amenities: string[]
  images: string[]
  pricePerNight: number
  maxGuests: number
  bedType: string
  size: string
  features: string[]
}

export const rooms: Room[] = [
  {
    id: "armadillo",
    slug: "suite-armadillo",
    name: { en: "Suite Armadillo", es: "Suite Armadillo" },
    alebrije: "Armadillo",
    description: {
      en: "The Armadillo represents protection and boundaries. This spacious suite features warm earth tones and handcrafted details that create a cozy retreat in the heart of Coyoacán.",
      es: "El Armadillo representa protección y límites. Esta espaciosa suite presenta tonos tierra cálidos y detalles artesanales que crean un refugio acogedor en el corazón de Coyoacán."
    },
    amenities: ["wifi", "ac", "tv", "minibar", "safe"],
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop"
    ],
    pricePerNight: 120,
    maxGuests: 2,
    bedType: "King",
    size: "28 m²",
    features: ["Garden View", "Workspace"]
  },
  {
    id: "pulpo",
    slug: "suite-pulpo",
    name: { en: "Suite Pulpo", es: "Suite Pulpo" },
    alebrije: "Octopus",
    description: {
      en: "The Octopus symbolizes creativity and flexibility. Deep blues and flowing design elements capture the essence of this mystical creature in a space perfect for dreamers.",
      es: "El Pulpo simboliza creatividad y flexibilidad. Azules profundos y elementos de diseño fluidos capturan la esencia de esta criatura mística en un espacio perfecto para soñadores."
    },
    amenities: ["wifi", "ac", "tv", "minibar", "safe"],
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop"
    ],
    pricePerNight: 130,
    maxGuests: 2,
    bedType: "King",
    size: "30 m²",
    features: ["Balcony", "City View"]
  },
  {
    id: "gorila",
    slug: "suite-gorila",
    name: { en: "Suite Gorila", es: "Suite Gorila" },
    alebrije: "Gorilla",
    description: {
      en: "The Gorilla represents strength and leadership. Bold yellows and powerful design elements create a commanding yet comfortable space for confident travelers.",
      es: "El Gorila representa fuerza y liderazgo. Amarillos audaces y elementos de diseño poderosos crean un espacio imponente pero cómodo para viajeros seguros."
    },
    amenities: ["wifi", "ac", "tv", "minibar", "safe"],
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
    ],
    pricePerNight: 125,
    maxGuests: 2,
    bedType: "King",
    size: "26 m²",
    features: ["Garden View"]
  },
  {
    id: "lechuza",
    slug: "suite-lechuza",
    name: { en: "Suite Lechuza", es: "Suite Lechuza" },
    alebrije: "Owl",
    description: {
      en: "The Owl embodies wisdom and intuition. Soft lighting and contemplative design invite quiet reflection in this serene haven for thoughtful guests.",
      es: "La Lechuza encarna sabiduría e intuición. Iluminación suave y diseño contemplativo invitan a la reflexión tranquila en este refugio sereno para huéspedes reflexivos."
    },
    amenities: ["wifi", "ac", "tv", "minibar", "safe"],
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop"
    ],
    pricePerNight: 135,
    maxGuests: 2,
    bedType: "King",
    size: "32 m²",
    features: ["Balcony", "Garden View", "Reading Nook"]
  },
  {
    id: "ajolote",
    slug: "jr-suite-ajolote",
    name: { en: "Jr. Suite Ajolote", es: "Jr. Suite Ajolote" },
    alebrije: "Axolotl",
    description: {
      en: "The Axolotl represents transformation and renewal. This cozy junior suite features playful pink and coral tones inspired by Mexico's beloved endemic species.",
      es: "El Ajolote representa transformación y renovación. Esta acogedora junior suite presenta tonos rosas y coral inspirados en la querida especie endémica de México."
    },
    amenities: ["wifi", "ac", "tv", "safe"],
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop"
    ],
    pricePerNight: 95,
    maxGuests: 2,
    bedType: "Queen",
    size: "22 m²",
    features: ["Courtyard Access"]
  },
  {
    id: "mantarraya",
    slug: "suite-mantarraya",
    name: { en: "Suite Mantarraya", es: "Suite Mantarraya" },
    alebrije: "Manta Ray",
    description: {
      en: "The Manta Ray glides with grace and freedom. Ocean-inspired blues and flowing textiles create a sense of peaceful movement in this elegant suite.",
      es: "La Mantarraya se desliza con gracia y libertad. Azules inspirados en el océano y textiles fluidos crean una sensación de movimiento pacífico en esta elegante suite."
    },
    amenities: ["wifi", "ac", "tv", "minibar", "safe"],
    images: [
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1974&auto=format&fit=crop"
    ],
    pricePerNight: 140,
    maxGuests: 3,
    bedType: "King + Sofa Bed",
    size: "35 m²",
    features: ["Terrace", "Garden View", "Living Area"]
  },
  {
    id: "tortuga",
    slug: "suite-tortuga",
    name: { en: "Suite Tortuga", es: "Suite Tortuga" },
    alebrije: "Turtle",
    description: {
      en: "The Turtle symbolizes longevity and home. Earthy greens and natural textures create a grounding sanctuary for travelers seeking connection to nature.",
      es: "La Tortuga simboliza longevidad y hogar. Verdes terrosos y texturas naturales crean un santuario que conecta a los viajeros con la naturaleza."
    },
    amenities: ["wifi", "ac", "tv", "minibar", "safe"],
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop"
    ],
    pricePerNight: 130,
    maxGuests: 2,
    bedType: "King",
    size: "28 m²",
    features: ["Private Garden Access", "Outdoor Seating"]
  }
]
