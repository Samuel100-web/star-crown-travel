export type Package = {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  tag: string;
  highlights: string[];
};

export const packages: Package[] = [
  {
    id: 'skardu-explorer',
    title: 'Skardu Valley Explorer',
    location: 'Skardu, Gilgit-Baltistan',
    duration: '5 Days / 4 Nights',
    price: 'PKR 45,000',
    image:
      'https://images.pexels.com/photos/14697182/pexels-photo-14697182.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'Premium Luxury',
    highlights: ['Shangrila Resort', 'Shigar Fort', 'Upper Kachura Lake'],
  },
  {
    id: 'hunza-paradise',
    title: 'Hunza Paradise Tour',
    location: 'Hunza Valley, Gilgit-Baltistan',
    duration: '6 Days / 5 Nights',
    price: 'PKR 52,000',
    image:
      'https://images.pexels.com/photos/20589865/pexels-photo-20589865.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'Group Tour',
    highlights: ['Attabad Lake', 'Passu Cones', 'Eagle\u2019s Nest Duikar'],
  },
  {
    id: 'neelum-retreat',
    title: 'Neelum Valley Retreat',
    location: 'Neelum Valley, Azad Kashmir',
    duration: '4 Days / 3 Nights',
    price: 'PKR 38,000',
    image:
      'https://images.pexels.com/photos/12640503/pexels-photo-12640503.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'Budget-Friendly',
    highlights: ['Keran', 'Sharda', 'Kel & Taobat'],
  },
  {
    id: 'kaghan-naran',
    title: 'Kaghan & Naran Escape',
    location: 'Kaghan Valley, Khyber Pakhtunkhwa',
    duration: '4 Days / 3 Nights',
    price: 'PKR 35,000',
    image:
      'https://images.pexels.com/photos/19332990/pexels-photo-19332990.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'Group Tour',
    highlights: ['Saif-ul-Malook', 'Babusar Top', 'Lulusar Lake'],
  },
  {
    id: 'honeymoon-fairy',
    title: 'Honeymoon in Fairy Meadows',
    location: 'Fairy Meadows, Gilgit-Baltistan',
    duration: '5 Days / 4 Nights',
    price: 'PKR 65,000',
    image:
      'https://images.pexels.com/photos/20621564/pexels-photo-20621564.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'Honeymoon',
    highlights: ['Nanga Parbat View', 'Cottage Stay', 'Private Transfers'],
  },
  {
    id: 'corporate-retreat',
    title: 'Corporate Retreat \u2014 Hunza',
    location: 'Hunza & Karakoram',
    duration: 'Custom',
    price: 'On Request',
    image:
      'https://images.pexels.com/photos/20589865/pexels-photo-20589865.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'Corporate',
    highlights: ['Team Activities', 'Group Lodging', 'Tailor-made Plan'],
  },
];
