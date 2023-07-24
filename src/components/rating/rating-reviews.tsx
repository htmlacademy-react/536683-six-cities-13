import { RatingClassName } from '../../const';
import { Rating, TRatingProxyProps } from './rating';

const RatingReviews = ({ ratingValue }: TRatingProxyProps) => (
  <Rating className={RatingClassName.Reviews} ratingValue={ratingValue} />
);

export { RatingReviews };
