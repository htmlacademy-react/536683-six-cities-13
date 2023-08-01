import { TOffer } from './types/offer';

const sortLowToHighPrice = (aOffer: TOffer, bOffer: TOffer) =>
  aOffer.price - bOffer.price;

const sortHighToLowPrice = (aOffer: TOffer, bOffer: TOffer) =>
  bOffer.price - aOffer.price;

const sortTopToLowRating = (aOffer: TOffer, bOffer: TOffer) =>
  bOffer.rating - aOffer.rating;

type TSort = {
  [k: string]: (offers: TOffer[]) => TOffer[];
};

const Sort: TSort = {
  '0': (offers: TOffer[]) => [...offers],
  '1': (offers: TOffer[]) => [...offers].sort(sortLowToHighPrice),
  '2': (offers: TOffer[]) => [...offers].sort(sortHighToLowPrice),
  '3': (offers: TOffer[]) => [...offers].sort(sortTopToLowRating),
};

export { Sort };
