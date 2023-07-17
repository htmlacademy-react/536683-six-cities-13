import { TDetail } from '../../mocks/details';
import { OfferFeatures } from './offer-features';
import { OfferGoods } from './offer-goods';

type TOfferInfoProps = {
  offer: TDetail;
};

const OfferInfo = ({ offer }: TOfferInfoProps) => {
  const { isPremium, title, type, bedrooms, maxAdults, price, goods } = offer;

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
      {/* todo rating вынести в отдельный компонент  */}
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{ width: '80%' }} />
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">4.8</span>
      </div>
      {/* todo rating вынести в отдельный компонент  */}
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
