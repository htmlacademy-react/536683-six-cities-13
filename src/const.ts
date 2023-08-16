import {
  TFavoriteButtonSize,
  TOfferCardImageSize,
  TReviewRating,
} from './types/const';

const ERROR_TIMEOUT = 3000;
const DEFAULT_LOCATION = 'Paris';
const MAX_OFFER_GALLERY_PICTURES = 6;
const MAX_COMMENTS = 10;
const MAX_NEAR_PLACES = 3;
const REQUEST_TIMEOUT = 5000;
const BASE_URL = 'https://13.design.pages.academy/six-cities';
const BASE_MARKER_PATH = './markup/img/';
const PATH_MARKER_DEFAULT = `${BASE_MARKER_PATH}pin.svg`;
const PATH_MARKER_CURRENT = `${BASE_MARKER_PATH}pin-active.svg`;

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

enum APIRoute {
  Offers = '/offers',
  Nearby = '/nearby',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum NameSpace {
  Offers = 'OFFERS',
  Offer = 'OFFER',
  NearPlaces = 'NEAR_PLACES',
  Favorites = 'FAVORITES',
  Comments = 'COMMENTS',
  User = 'USER',
  App = 'APP',
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

enum FavoriteButtonClassName {
  Main = 'place-card',
  Details = 'offer',
}

enum ReviewInfo {
  MinCommentLength = 50,
  MaxCommentLength = 300,
  MinRating = 0,
}

enum LoadingStatus {
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
  Idle = 'idle',
}

const FAVORITE_BUTTON_SIZE: TFavoriteButtonSize = {
  'place-card': { width: '18px', height: '19px' },
  offer: { width: '31px', height: '33px' },
};

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

const SORT_TYPES: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export {
  APIRoute,
  AppRoute,
  AuthStatus,
  NameSpace,
  OfferCardClassName,
  RatingClassName,
  ReviewInfo,
  LoadingStatus,
  FavoriteButtonClassName,
  REVIEW_RATINGS,
  PATH_MARKER_CURRENT,
  PATH_MARKER_DEFAULT,
  OFFER_CARD_IMAGE_SIZE,
  MAX_NEAR_PLACES,
  DEFAULT_LOCATION,
  LOCATIONS,
  SORT_TYPES,
  BASE_URL,
  REQUEST_TIMEOUT,
  ERROR_TIMEOUT,
  MAX_COMMENTS,
  MAX_OFFER_GALLERY_PICTURES,
  FAVORITE_BUTTON_SIZE,
};
