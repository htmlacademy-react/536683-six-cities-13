import { memo } from 'react';
import { TDetail } from '../../types/details';
import { DetailsFavoriteButton } from '../favorite-button/details-favorite-button';
import { RatingOffer } from '../rating/rating-offer';
import { OfferFeatures } from './offer-features';
import { OfferGoods } from './offer-goods';

type TOfferInfoProps = {
  offer: TDetail;
};

const Info = ({ offer }: TOfferInfoProps) => {
  const {
    id,
    rating,
    isPremium,
    title,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    isFavorite,
  } = offer;

  return (
    <>
      {isPremium && (
        <div className="offer__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="offer__name-wrapper">
        <h1 className="offer__name">{title}</h1>
        <DetailsFavoriteButton offerId={id} isFavorite={isFavorite} />
      </div>
      <RatingOffer ratingValue={rating} />

      <OfferFeatures features={{ type, bedrooms, maxAdults }} />
      <div className="offer__price">
        <b className="offer__price-value">€{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
      <OfferGoods goods={goods} />
    </>
  );
};

const OfferInfo = memo(Info);

export { OfferInfo };
