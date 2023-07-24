export type TReviewRating = {
  ratingValue: number;
  ratingText: string;
};

type TImageSize = {
  width: number;
  height: number;
};

export type TOfferCardImageSize = {
  [k: string]: TImageSize;
};
