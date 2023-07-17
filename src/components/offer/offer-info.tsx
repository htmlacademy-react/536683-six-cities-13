import { RatingType } from '../../const';
import { TDetail } from '../../mocks/details';
import { Rating } from '../rating/rating';
import { OfferFeatures } from './offer-features';
import { OfferGoods } from './offer-goods';

type TOfferInfoProps = {
  offer: TDetail;
};

const OfferInfo = ({ offer }: TOfferInfoProps) => {
  const { rating, isPremium, title, type, bedrooms, maxAdults, price, goods } =
    offer;

  return (
    <>
      {isPremium && (
        <div className="offer__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="offer__name-wrapper">
        <h1 className="offer__name">{title}</h1>
        <button className="offer__bookmark-button button" type="button">
          <svg className="offer__bookmark-icon" width={31} height={33}>
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <Rating ratingValue={rating} ratingType={RatingType.Offer} />

      <OfferFeatures features={{ type, bedrooms, maxAdults }} />
      <div className="offer__price">
        <b className="offer__price-value">€{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
      <OfferGoods goods={goods} />
    </>
  );
};

export { OfferInfo };
