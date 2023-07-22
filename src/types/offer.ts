export type TCityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TCity = {
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
