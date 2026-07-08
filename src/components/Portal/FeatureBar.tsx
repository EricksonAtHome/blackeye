import React from 'react'

import { CalendarDays, Home, MessageCircle, Users } from 'lucide-react'

const features = [
  {
    icon: Home,
    text: 'Comfortabele appartementen met moderne voorzieningen en veel licht.',
    title: 'Modern wonen',
  },
  {
    icon: Users,
    text: 'Persoonlijke begeleiding en zorg op maat, wanneer u dat nodig heeft.',
    title: 'Persoonlijke zorg',
  },
  {
    icon: CalendarDays,
    text: 'Activiteiten en ontmoetingen die het wonen bij Belflat nog leuker maken.',
    title: 'Samen actief',
  },
  {
    icon: MessageCircle,
    text: 'Ons team is bereikbaar op werkdagen en helpt u snel verder.',
    title: 'Goede bereikbaarheid',
  },
]

export const FeatureBar: React.FC = () => {
  return (
    <section className="br-features">
      <div className="container">
        <div className="br-features__grid">
          {features.map(({ icon: Icon, text, title }) => (
            <article className="br-feature" key={title}>
              <Icon className="br-feature__icon size-8" strokeWidth={1.5} />
              <div>
                <h2 className="br-feature__title">{title}</h2>
                <p className="br-feature__text">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
