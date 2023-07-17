type TCityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type TCity = {
  name: string;
  location: TCityLocation;
};

export type TOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: TCity;
  location: TCityLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

const OFFERS: TOffer[] = [
  {
    id: '34f50f68-803c-43a9-8d59-9556fb9c0eaa',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 163,
    previewImage: 'https://13.design.pages.academy/static/hotel/5.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.4,
  },
  {
    id: '4b658388-7118-4e47-806a-fa5b0d41e8b0',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'house',
    price: 169,
    previewImage: 'https://13.design.pages.academy/static/hotel/2.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.4,
  },
  {
    id: '2186b3e2-db83-4627-be97-2632937550c7',
    title: 'Wood and stone place',
    type: 'hotel',
    price: 192,
    previewImage: 'https://13.design.pages.academy/static/hotel/17.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.5,
  },
  {
    id: 'c99c9239-7836-4115-a767-ee81c4b835ad',
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 453,
    previewImage: 'https://13.design.pages.academy/static/hotel/19.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.8,
  },
];

export { OFFERS };
