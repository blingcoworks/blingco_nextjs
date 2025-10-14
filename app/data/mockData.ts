export interface InsightCard {
  id: string;
  name: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  hasAttribution?: boolean;
  attributionText?: string;
}

export const mockInsightData: InsightCard[] = [
  {
    id: '1',
    name: 'Lumiana',
    category: 'Vtuber',
    imageSrc: '/insight/lumiana.png',
    imageAlt: 'Lumiana',
  },
  {
    id: '2',
    name: 'JAM',
    category: 'Illustrator',
    imageSrc: '/insight/jam.png',
    imageAlt: 'JAM',
    hasAttribution: true,
    attributionText: 'Unsplash'
  },
  {
    id: '3',
    name: 'Chloe',
    category: 'Model',
    imageSrc: '/insight/chloe.png',
    imageAlt: 'Chloe',
    hasAttribution: true,
    attributionText: 'Unsplash'
  },
  {
    id: '4',
    name: 'Coming Soon',
    category: 'Other',
    imageSrc: '',
    imageAlt: '',
  },
  {
    id: '5',
    name: 'Coming Soon',
    category: 'Other',
    imageSrc: '',
    imageAlt: '',
  },
  {
    id: '6',
    name: 'Coming Soon',
    category: 'Other',
    imageSrc: '',
    imageAlt: '',
  }
];

export const categories = ['ALL', 'Vtuber', 'Influencer', 'Illustrator', 'Model', 'Other'];
