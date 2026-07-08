import Link from 'next/link'
import React from 'react'

import { Briefcase, ChevronRight, FileText, Heart, Users } from 'lucide-react'

const newsItems = [
  {
    date: '12 feb 2024',
    excerpt: 'De binnentuin krijgt een frisse nieuwe inrichting met meer groen en zitplekken.',
    href: '/posts',
    image: '/portal/news-1.jpg',
    title: 'Vernieuwing van de binnentuin',
  },
  {
    date: '28 jan 2024',
    excerpt: 'Bewoners kunnen nu eenvoudig reparaties melden via het vernieuwde portaal.',
    href: '/posts',
    image: '/portal/news-2.jpg',
    title: 'Nieuw bewonersportaal online',
  },
  {
    date: '10 jan 2024',
    excerpt: 'Elke woensdagmiddag organiseren we een gezellige koffieochtend in de ontmoetingsruimte.',
    href: '/posts',
    image: '/portal/news-3.jpg',
    title: 'Koffieochtend voor bewoners',
  },
]

const faqLinks = [
  { href: '/hulp#portaal', icon: FileText, label: 'Aanmelden voor wonen' },
  { href: '/hulp#contact', icon: Heart, label: 'Wonen en zorg' },
  { href: '/posts', icon: Briefcase, label: 'Werken bij Belflat Residence' },
  { href: '/contact', icon: Users, label: 'Vrijwilliger worden' },
  { href: '/bewonersportaal#huur', icon: FileText, label: 'Financieel regelen' },
]

export const NewsFaqColumns: React.FC = () => {
  return (
    <section className="br-content">
      <div className="container br-content__grid">
        <div>
          <div className="br-section-head">
            <h2 className="br-section-head__title">Laatste Nieuws</h2>
            <Link className="br-section-head__link" href="/posts">
              Bekijk alle berichten &gt;
            </Link>
          </div>

          <div className="br-news-grid">
            {newsItems.map((item) => (
              <Link className="br-news-card" href={item.href} key={item.title}>
                <div
                  className="br-news-card__image"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="br-news-card__body">
                  <p className="br-news-card__date">{item.date}</p>
                  <h3 className="br-news-card__title">{item.title}</h3>
                  <p className="br-news-card__excerpt">{item.excerpt}</p>
                  <span className="br-news-card__more">Lees meer &gt;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <aside className="br-faq-panel">
          <h2 className="br-faq-panel__title">Veelgestelde vragen</h2>
          <ul className="br-faq-list">
            {faqLinks.map(({ href, icon: Icon, label }) => (
              <li key={label}>
                <Link href={href}>
                  <span className="flex items-center gap-2">
                    <Icon className="br-faq-list__icon size-4" strokeWidth={1.75} />
                    {label}
                  </span>
                  <ChevronRight className="br-faq-list__chevron size-4" />
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
