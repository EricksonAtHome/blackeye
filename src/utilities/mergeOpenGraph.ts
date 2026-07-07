import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'belflat.be — Belgium Flat. Belgische woningorganisatie met bewonersportaal en hulp.',
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
    },
  ],
  siteName: 'belflat.be — Belgium Flat',
  title: 'belflat.be — Belgium Flat',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
