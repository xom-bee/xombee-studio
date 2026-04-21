export type Track = {
  id: string
  slug: string
  title: string
  ep: string
  imgSrc: string
  audioSrc: string
  color: string
}

export const allTracks: Track[] = [
  {
    id: '1',
    slug: 'sueni-mebi-dhong',
    title: 'Sueni Mebi Dhong',
    ep: 'Serkhai Gawa',
    color: 'oklch(0.70 0.13 50)',
    imgSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sueni%20Mebi%20Dhong-Q4P2npeIXVM5bx9uG2iYcU6Idk91se.png',
    audioSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sueni%20Mebi%20Dhong%20Music-4ErdS54LcgDd1sjADTiqJJHL6hbpL3.mp3',
  },
  {
    id: '2',
    slug: 'zhawong-ga',
    title: 'Zhawong Ga',
    ep: 'Serkhai Gawa',
    color: 'oklch(0.65 0.14 200)',
    imgSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zhawong%20Ga-hrYdZXm5hPRWnl8YPnbawKsYgpIZvX.png',
    audioSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zhawong%20Ga%20Music-YSNIWmNw16jVSbn4ddho61UbLGd0PG.mp3',
  },
  {
    id: '3',
    slug: 'chhemla',
    title: 'Chhemla',
    ep: 'Serkhai Gawa',
    color: 'oklch(0.70 0.12 150)',
    imgSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chhemla-niSbZByx85OEJufM6OGVeCyZ9ssK3d.png',
    audioSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chhemla%20Music-IEmnoxYe4DMllt1TzxAETTCPzgkHLo.mp3',
  },
  {
    id: '4',
    slug: 'dren-ni-yoega',
    title: 'Dren Ni Yoega',
    ep: 'Serkhai Gawa',
    color: 'oklch(0.68 0.12 300)',
    imgSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dren%20Ni%20Yoega-8BUN53L2aAvzJu5E0QkdPVb3E7HrY1.png',
    audioSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dren%20Ni%20Yoega%20Music-QrzrHiOWPe3tlFlLC2NAePYllBnsBF.mp3',
  },
]

export const featuredEP = {
  title: 'Serkhai Gawa',
  subtitle: 'EP · 2024 · 4 Tracks',
  description:
    'Four songs. One season. Serkhai Gawa — Golden Youth — is a collection of feelings that live between memory and longing.',
  coverSrc: allTracks[0].imgSrc,
}
