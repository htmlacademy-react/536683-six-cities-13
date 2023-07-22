import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Rating } from '../rating/rating';
import { TOffer } from '../../types/offer';

export type TOfferCardProxyProps = Omit<
  TOfferCardProps,
  'className' | 'imageSize'
>;

export type TImageSize = {
  width: number;
  height: number;
};

export type TOfferCardProps = {
  offer: TOffer;
  className: string;
  imageSize: TImageSize;
  onOfferHover?: (offerId: string) => void;
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
  const [isOfferFavorite, setIsOfferFavorite] = useState<boolean>(isFavorite);

  const handleFavoriteClick = (evt: SyntheticEvent) => {
    evt.preventDefault();

    setIsOfferFavorite((prevIsOfferFavotire) => !prevIsOfferFavotire);
  };

  return (
    <article
      className={`${className}__card place-card`}
      onMouseEnter={() => onOfferHover?.(id)}
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
          <button
            className={`place-card__bookmark-button ${
              isOfferFavorite ? 'place-card__bookmark-button--active' : ''
            } button`}
            onClick={handleFavoriteClick}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <Rating ratingValue={rating} />
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export { OfferCard };
