import { SyntheticEvent, useState } from 'react';
import { TOffer } from '../../mocks/offers';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type TOfferCardProps = {
  offer: TOffer;
  onOfferHover: (offerId: string) => void;
};

const calculateRating = (rating: number): number => {
  const MAX_RATING = 5;

  return (rating * 100) / MAX_RATING;
};

const OfferCard = ({ offer, onOfferHover }: TOfferCardProps) => {
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
      className="cities__card place-card"
      onMouseOver={() => onOfferHover(id)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
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
