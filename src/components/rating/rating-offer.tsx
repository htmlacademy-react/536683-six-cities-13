import { RatingClassName } from '../../const';
import { Rating, TRatingProxyProps } from './rating';

const RatingOffer = ({ ratingValue }: TRatingProxyProps) => (
  <Rating
    className={RatingClassName.Offer}
    ratingValue={ratingValue}
    showDigits
  />
);

export { RatingOffer };
