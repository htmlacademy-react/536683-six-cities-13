import React from 'react';
import { LoadingStatus, REVIEW_RATINGS } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getCommentSubmitStatus } from '../../store/comments-process/selectors';

type TReviewRating = {
  onRatingChange: (rating: number) => void;
  selectedRating: number;
};

const ReviewRating = ({ selectedRating, onRatingChange }: TReviewRating) => {
  const commentSubmitStatus = useAppSelector(getCommentSubmitStatus);

  return (
    <div className="reviews__rating-form form__rating">
      {REVIEW_RATINGS.map((reviewRating) => {
        const { ratingValue, ratingText } = reviewRating;

        return (
          <React.Fragment key={ratingText}>
            <input
              onChange={() => onRatingChange?.(ratingValue)}
              className="form__rating-input visually-hidden"
              name="rating"
              id={`${ratingValue}-stars`}
              type="radio"
              value={ratingValue}
              checked={selectedRating === ratingValue}
              disabled={commentSubmitStatus === LoadingStatus.Loading}
            />
            <label
              htmlFor={`${ratingValue}-stars`}
              className="reviews__rating-label form__rating-label"
              title={ratingText}
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
