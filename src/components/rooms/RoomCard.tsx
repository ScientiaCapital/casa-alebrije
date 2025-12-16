import { useTranslation } from 'react-i18next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Maximize2 } from 'lucide-react'
import type { Room } from '@/data/rooms'

interface RoomCardProps {
  room: Room
}

export function RoomCard({ room }: RoomCardProps) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'en' | 'es'

  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.images[0]}
          alt={room.name[lang]}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-terracotta-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {t('rooms.from')} ${room.pricePerNight}{t('rooms.perNight')}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-brown-700">
            {room.alebrije}
          </span>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Title */}
        <h3 className="font-display text-xl text-brown-900 mb-2">
          {room.name[lang]}
        </h3>

        {/* Description */}
        <p className="text-brown-600 text-sm mb-4 line-clamp-2">
          {room.description[lang]}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-brown-500 text-sm mb-4">
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {room.maxGuests} {t('rooms.guests')}
          </span>
          <span className="flex items-center gap-1">
            <Maximize2 className="w-4 h-4" />
            {room.size}
          </span>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {room.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="bg-sand-100 text-brown-600 px-2 py-1 rounded text-xs"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Button variant="terracotta" className="w-full">
          {t('rooms.bookNow')}
        </Button>
      </CardContent>
    </Card>
  )
}
