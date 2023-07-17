import { SyntheticEvent, useState } from 'react';
import { TOffer } from '../../mocks/offers';
import { Link } from 'react-router-dom';
import { AppRoute, OfferCardType } from '../../const';
import styles from './offer-card.module.css';
import { calculateRating } from '../../utils';

type TOfferCardProps = {
  offer: TOffer;
  cardType?: string;
  onOfferHover?: (offerId: string) => void;
};

const OfferCard = ({
  offer,
  cardType = OfferCardType.Cities,
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

  const cardTypeClassName =
    cardType === OfferCardType.Cities
      ? OfferCardType.Cities
      : OfferCardType.Favorites;
  const cardImageClassName =
    cardType === OfferCardType.Cities
      ? `${styles['cities__card-info']}`
      : `${styles['favorites__card-info']}`;

  const handleFavoriteClick = (evt: SyntheticEvent) => {
    evt.preventDefault();

    setIsOfferFavorite((prevIsOfferFavotire) => !prevIsOfferFavotire);
  };

  return (
    <article
      className={`${cardTypeClassName}__card place-card`}
      onMouseEnter={() => onOfferHover && onOfferHover(id)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div
        className={`${cardTypeClassName}__image-wrapper place-card__image-wrapper`}
      >
        <a href="#">
          <img
            className={`${cardImageClassName} place-card__image`}
            src={previewImage}
            alt="Place image"
          />
        </a>
      </div>
      <div className={`${cardTypeClassName}__card-info place-card__info`}>
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
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${calculateRating(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export { OfferCard };
