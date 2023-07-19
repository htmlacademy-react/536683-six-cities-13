import React, { ChangeEvent } from 'react';
import { REVIEW_RATINGS } from '../../const';

type TReviewRating = {
  onRatingChange: (rating: number) => void;
};

const ReviewRating = ({ onRatingChange }: TReviewRating) => {
  const handleRatingChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const rating = Number(target.value);

    onRatingChange(rating);
  };

  return (
    <div
      onChange={handleRatingChange}
      className="reviews__rating-form form__rating"
    >
      {REVIEW_RATINGS.map((reviewRating) => {
        const { ratingValue, ratingText } = reviewRating;
        const ratingId =
          ratingValue < 2 ? `${ratingValue}-star` : `${ratingValue}-stars`;

        return (
          <React.Fragment key={ratingText}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              id={ratingId}
              type="radio"
              value={ratingValue}
            />
            <label
              htmlFor={ratingId}
              className="reviews__rating-label form__rating-label"
              title="perfect"
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export { ReviewRating };
