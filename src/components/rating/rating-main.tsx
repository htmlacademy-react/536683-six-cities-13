import { RatingClassName } from '../../const';
import { Rating, TRatingProxyProps } from './rating';

const RatingMain = ({ ratingValue }: TRatingProxyProps) => (
  <Rating className={RatingClassName.Main} ratingValue={ratingValue} />
);

export { RatingMain };
