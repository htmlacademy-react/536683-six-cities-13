import { calculateRating } from '../../utils/utils';

export type TRatingProps = {
  ratingValue: number;
  className: string;
  showDigits?: boolean;
};

export type TRatingProxyProps = Omit<TRatingProps, 'className' | 'showDigits'>;

const Rating = ({
  ratingValue,
  className,
  showDigits = false,
}: TRatingProps) => (
  <div className={`${className}__rating rating`} data-testid="rating">
    <div className={`${className}__stars rating__stars`}>
      <span
        style={{ width: `${calculateRating(ratingValue)}%` }}
        data-testid="rating-width"
      />
      <span className="visually-hidden">Rating</span>
    </div>
    {showDigits && (
      <span className="offer__rating-value rating__value">{ratingValue}</span>
    )}
  </div>
);

export { Rating };
