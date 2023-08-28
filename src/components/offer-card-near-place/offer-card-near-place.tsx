import { OFFER_CARD_IMAGE_SIZE, OfferCardClassName } from '../../const';
import { OfferCard, TOfferCardProxyProps } from '../offer-card/offer-card';

const OfferCardNearPlace = (props: TOfferCardProxyProps) => {
  const { ...restProps } = props;

  return (
    <OfferCard
      imageSize={OFFER_CARD_IMAGE_SIZE.near}
      className={OfferCardClassName.Near}
      {...restProps}
    />
  );
};

export { OfferCardNearPlace };
