import { RatingClassName } from '../../const';
import { Rating, TRatingProxyProps } from '../rating/rating';

const RatingOffer = ({ ratingValue }: TRatingProxyProps) => (
  <Rating
    className={RatingClassName.Offer}
    ratingValue={ratingValue}
    showDigits
  />
);

export { RatingOffer };
