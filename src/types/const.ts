export type TReviewRating = {
  ratingValue: number;
  ratingText: string;
};

type TSize = {
  width: number | string;
  height: number | string;
};

export type TOfferCardImageSize = {
  [k: string]: TSize;
};

export type TFavoriteButtonSize = {
  [k: string]: TSize;
};
