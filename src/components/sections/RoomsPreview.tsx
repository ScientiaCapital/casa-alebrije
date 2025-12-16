import { useTranslation } from 'react-i18next'
import { RoomCard } from '@/components/rooms/RoomCard'
import { rooms } from '@/data/rooms'

export function RoomsPreview() {
  const { t } = useTranslation()

  return (
    <section id="rooms" className="py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-brown-900 mb-4">
            {t('rooms.title')}
          </h2>
          <p className="text-brown-600 max-w-2xl mx-auto">
            {t('rooms.subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  )
}
