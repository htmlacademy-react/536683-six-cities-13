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

enum OfferCardType {
  Cities = 'cities',
  Favorites = 'favorites',
}

enum RatingType {
  Cities = 'cities',
  Offer = 'offer',
  Reviews = 'reviews',
}

enum ReviewInfo {
  MaxCommentLength = 60,
  MinRating = 0,
}

type TReviewRating = {
  ratingValue: number;
  ratingText: string;
};

const REVIEW_RATINGS: TReviewRating[] = [
  { ratingValue: 5, ratingText: 'perfect' },
  { ratingValue: 4, ratingText: 'good' },
  { ratingValue: 3, ratingText: 'not bad' },
  { ratingValue: 2, ratingText: 'badly' },
  { ratingValue: 1, ratingText: 'terribly' },
];

const BASE_MARKER_URL =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/';
const URL_MARKER_DEFAULT = `${BASE_MARKER_URL}pin.svg`;
const URL_MARKER_CURRENT = `${BASE_MARKER_URL}main-pin.svg`;

export {
  AppRoute,
  AuthorizationStatus,
  OfferCardType,
  RatingType,
  ReviewInfo,
  REVIEW_RATINGS,
  URL_MARKER_CURRENT,
  URL_MARKER_DEFAULT,
};
