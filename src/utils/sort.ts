import { TOffer } from '../types/offer';

const sortLowToHighPrice = (aOffer: TOffer, bOffer: TOffer) =>
  aOffer.price - bOffer.price;

const sortHighToLowPrice = (aOffer: TOffer, bOffer: TOffer) =>
  bOffer.price - aOffer.price;

const sortTopToLowRating = (aOffer: TOffer, bOffer: TOffer) =>
  bOffer.rating - aOffer.rating;

type TSort = {
  [k: string]: (offers: TOffer[]) => TOffer[];
};

const DEFAULT_SORT_TYPE = 'Popular';

const Sort: TSort = {
  Popular: (offers: TOffer[]) => [...offers],
  'Price: low to high': (offers: TOffer[]) =>
    [...offers].sort(sortLowToHighPrice),
  'Price: high to low': (offers: TOffer[]) =>
    [...offers].sort(sortHighToLowPrice),
  'Top rated first': (offers: TOffer[]) => [...offers].sort(sortTopToLowRating),
};

export { Sort, DEFAULT_SORT_TYPE };
