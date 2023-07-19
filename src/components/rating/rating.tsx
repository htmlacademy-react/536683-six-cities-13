import { RatingType } from '../../const';
import { calculateRating } from '../../utils';

type TRatingProps = {
  ratingValue: number;
  ratingType?: string;
  showDigits?: boolean;
};

const Rating = ({
  ratingValue,
  ratingType = RatingType.Cities,
  showDigits = false,
}: TRatingProps) => {
  let ratingClassName = '';

  switch (ratingType) {
    case RatingType.Cities:
      ratingClassName = 'place-card';
      break;
    case RatingType.Offer:
      ratingClassName = 'offer';
      break;
    case RatingType.Reviews:
      ratingClassName = 'reviews';
      break;
  }

  return (
    <div className={`${ratingClassName}__rating rating`}>
      <div className={`${ratingClassName}__stars rating__stars`}>
        <span style={{ width: `${calculateRating(ratingValue)}%` }} />
        <span className="visually-hidden">Rating</span>
      </div>
      {showDigits && (
        <span className="offer__rating-value rating__value">{ratingValue}</span>
      )}
    </div>
  );
};

export { Rating };
