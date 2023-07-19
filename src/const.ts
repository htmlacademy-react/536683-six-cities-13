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

export { AppRoute, AuthorizationStatus, OfferCardType, RatingType, ReviewInfo };
