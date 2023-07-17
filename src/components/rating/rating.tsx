import { RatingType } from '../../const';
import { calculateRating } from '../../utils';

type TRatingProps = {
  ratingValue: number;
  ratingType?: string;
};

const Rating = ({
  ratingValue,
  ratingType = RatingType.Cities,
}: TRatingProps) => {
  const ratingClassName =
    ratingType === RatingType.Cities ? 'place-card' : 'offer';
  const isDigitRatingShown = ratingType === RatingType.Offer;

  return (
    <div className={`${ratingClassName}__rating rating`}>
      <div className={`${ratingClassName}__stars rating__stars`}>
        <span style={{ width: `${calculateRating(ratingValue)}%` }} />
        <span className="visually-hidden">Rating</span>
      </div>
      {isDigitRatingShown && (
        <span className="offer__rating-value rating__value">{ratingValue}</span>
      )}
    </div>
  );
};

export { Rating };
