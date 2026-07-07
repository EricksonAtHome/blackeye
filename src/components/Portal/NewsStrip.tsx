import Link from 'next/link'
import React from 'react'

const items = [
  {
    date: '07-07-2026',
    href: '/posts',
    image: '/portal/hero.jpg',
    title: 'Nieuwe energiezuinige flats in Brussel',
  },
  {
    date: '29-06-2026',
    href: '/posts',
    image: '/portal/hero.jpg',
    title: 'Bewonersportaal vernieuwd op belflat.be',
  },
  {
    date: '15-06-2026',
    href: '/hulp',
    image: '/portal/hero.jpg',
    title: 'Hulp bij reparaties en huurbetalingen',
  },
]

export const NewsStrip: React.FC = () => {
  return (
    <section className="bf-news">
      <div className="container">
        <Link className="bf-news__heading" href="/posts">
          Actueel nieuws
        </Link>

        <div className="bf-news__grid">
          {items.map((item) => (
            <Link className="bf-news-card" href={item.href} key={item.title}>
              <div
                className="bf-news-card__image"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="bf-news-card__body">
                <p className="bf-news-card__date">{item.date}</p>
                <h3 className="bf-news-card__title">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
