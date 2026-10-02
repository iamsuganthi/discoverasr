export type Offer = {
  id: string;
  title: string;
  scope: string;
  image: string;
};

export const offers: Offer[] = [
  {
    id: 'ultimate-getaway',
    title: 'Travel Elevated: Up to 25% Off Your Stay + Daily Breakfast',
    scope: 'All ASR participating properties',
    image: '/images/offer-1.png',
  },
  {
    id: 'rooftop-escape',
    title: 'Rooftop Escape: Book 3 Nights, Get the 4th Free',
    scope: 'Select properties in Asia Pacific',
    image: '/images/offer-2.png',
  },
  {
    id: 'beach-bliss',
    title: 'Beach Bliss Package: Late Checkout & Welcome Amenity',
    scope: 'All ASR participating properties',
    image: '/images/offer-3.png',
  },
];

export type Destination = {
  id: string;
  name: string;
  properties: string;
  image: string;
};

export type DestinationCategory = {
  id: string;
  label: string;
  destinations: Destination[];
};

export const destinationCategories: DestinationCategory[] = [
  {
    id: 'urban',
    label: 'Urban Explorations',
    destinations: [
      { id: 'singapore', name: 'Singapore', properties: '12 properties', image: '/images/dest-urban.png' },
      { id: 'london', name: 'London', properties: '8 properties', image: '/images/dest-urban.png' },
      { id: 'new-york', name: 'New York', properties: '5 properties', image: '/images/dest-urban.png' },
      { id: 'tokyo', name: 'Tokyo', properties: '6 properties', image: '/images/dest-urban.png' },
    ],
  },
  {
    id: 'beach',
    label: 'Beach & Leisure Getaways',
    destinations: [
      { id: 'bali', name: 'Bali', properties: '9 properties', image: '/images/dest-beach.png' },
      { id: 'phuket', name: 'Phuket', properties: '4 properties', image: '/images/dest-beach.png' },
      { id: 'da-nang', name: 'Da Nang', properties: '3 properties', image: '/images/dest-beach.png' },
      { id: 'gold-coast', name: 'Gold Coast', properties: '2 properties', image: '/images/dest-beach.png' },
    ],
  },
  {
    id: 'cultural',
    label: 'Cultural Cities',
    destinations: [
      { id: 'kyoto', name: 'Kyoto', properties: '3 properties', image: '/images/dest-cultural.png' },
      { id: 'hanoi', name: 'Hanoi', properties: '5 properties', image: '/images/dest-cultural.png' },
      { id: 'xian', name: "Xi'an", properties: '4 properties', image: '/images/dest-cultural.png' },
      { id: 'jaipur', name: 'Jaipur', properties: '2 properties', image: '/images/dest-cultural.png' },
    ],
  },
  {
    id: 'emerging',
    label: 'Emerging Hotspots',
    destinations: [
      { id: 'ho-chi-minh', name: 'Ho Chi Minh City', properties: '7 properties', image: '/images/dest-emerging.png' },
      { id: 'chengdu', name: 'Chengdu', properties: '6 properties', image: '/images/dest-emerging.png' },
      { id: 'colombo', name: 'Colombo', properties: '2 properties', image: '/images/dest-emerging.png' },
      { id: 'tbilisi', name: 'Tbilisi', properties: '1 property', image: '/images/dest-emerging.png' },
    ],
  },
];

export const brandPortfolio = [
  'Ascott',
  'Somerset',
  'Citadines',
  'lyf',
  'Quest',
  'The Crest Collection',
  'Préférence',
  'Vertu',
];
