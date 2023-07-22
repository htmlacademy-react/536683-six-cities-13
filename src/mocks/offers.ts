import { TOffer } from '../types/offer';

const OFFERS: TOffer[] = [
  {
    id: '372dcd05-d179-4a2a-be70-0b08daada439',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'room',
    price: 167,
    previewImage: 'https://13.design.pages.academy/static/hotel/3.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.36554,
      longitude: 4.911976,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.4,
  },
  {
    id: '768226ff-11f3-4bec-b13c-a903de1da7de',
    title: 'Perfectly located Castro',
    type: 'room',
    price: 253,
    previewImage: 'https://13.design.pages.academy/static/hotel/9.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.385540000000006,
      longitude: 4.902976,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.4,
  },
  {
    id: 'f21b1d07-4ed8-456f-92ac-fd13b5cf6c19',
    title: 'Loft Studio in the Central Area',
    type: 'room',
    price: 298,
    previewImage: 'https://13.design.pages.academy/static/hotel/20.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.397540000000006,
      longitude: 4.9099759999999995,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.6,
  },
  {
    id: '520aab03-3fbb-4528-8903-8f373247982b',
    title: 'Tile House',
    type: 'house',
    price: 898,
    previewImage: 'https://13.design.pages.academy/static/hotel/8.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.37454,
      longitude: 4.881976,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.9,
  },
];

export { OFFERS };
