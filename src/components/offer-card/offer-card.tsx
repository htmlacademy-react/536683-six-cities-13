import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { TOffer } from '../../types/offer';
import { RatingMain } from '../rating-main/rating-main';
import { MainFavoriteButton } from '../main-favorite-button/main-favorite-button';
import { TSize } from '../../types/const';
import { capitalizeFirstLetter } from '../../utils/utils';

export type TOfferCardProxyProps = Omit<
  TOfferCardProps,
  'className' | 'imageSize'
>;

export type TOfferCardProps = {
  offer: TOffer;
  className: string;
  imageSize: TSize;
  onOfferHover?: (offerId: string | null) => void;
};

const OfferCard = ({
  offer,
  className = '',
  imageSize,
  onOfferHover,
}: TOfferCardProps) => {
  const {
    id,
    title,
    type,
    price,
    previewImage,
    isFavorite,
    isPremium,
    rating,
  } = offer;

  return (
    <article
      className={`${className}__card place-card`}
      onMouseEnter={() => onOfferHover?.(id)}
      onMouseLeave={() => onOfferHover?.(null)}
      data-testid="offer-card"
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            alt="Place image"
            {...imageSize}
          />
        </a>
      </div>
      <div className={`${className}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <MainFavoriteButton offerId={id} isFavorite={isFavorite} />
        </div>
        <RatingMain ratingValue={rating} />
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
};

export { OfferCard };
