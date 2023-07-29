import { TOfferCardImageSize, TReviewRating } from './types/const';

enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  Root = '/',
  NotFound = '*',
  DevFavotites = '/dev-favorites',
  DevOffer = '/dev-offer',
  DevRoot = '/dev-root',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum OfferCardClassName {
  Favorites = 'favorites',
  Main = 'cities',
  Near = 'near-places',
}

enum RatingClassName {
  Main = 'place-card',
  Offer = 'offer',
  Reviews = 'reviews',
}

enum ReviewInfo {
  MaxCommentLength = 60,
  MinRating = 0,
}

const REVIEW_RATINGS: TReviewRating[] = [
  { ratingValue: 5, ratingText: 'perfect' },
  { ratingValue: 4, ratingText: 'good' },
  { ratingValue: 3, ratingText: 'not bad' },
  { ratingValue: 2, ratingText: 'badly' },
  { ratingValue: 1, ratingText: 'terribly' },
];

const OFFER_CARD_IMAGE_SIZE: TOfferCardImageSize = {
  near: { width: 260, height: 200 },
  favorites: { width: 150, height: 110 },
  main: { width: 260, height: 200 },
};

const LOCATIONS: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const MAX_NEAR_PLACES = 3;

const BASE_MARKER_URL =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/';
const URL_MARKER_DEFAULT = `${BASE_MARKER_URL}pin.svg`;
const URL_MARKER_CURRENT = `${BASE_MARKER_URL}main-pin.svg`;

export {
  AppRoute,
  AuthorizationStatus,
  OfferCardClassName,
  RatingClassName,
  ReviewInfo,
  REVIEW_RATINGS,
  URL_MARKER_CURRENT,
  URL_MARKER_DEFAULT,
  OFFER_CARD_IMAGE_SIZE,
  MAX_NEAR_PLACES,
  LOCATIONS,
};
