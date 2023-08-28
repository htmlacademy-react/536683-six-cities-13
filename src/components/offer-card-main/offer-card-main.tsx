import { memo } from 'react';
import { OFFER_CARD_IMAGE_SIZE, OfferCardClassName } from '../../const';
import { OfferCard, TOfferCardProxyProps } from '../offer-card/offer-card';

const Card = (props: TOfferCardProxyProps) => {
  const { ...restProps } = props;

  return (
    <OfferCard
      imageSize={OFFER_CARD_IMAGE_SIZE.main}
      className={OfferCardClassName.Main}
      {...restProps}
    />
  );
};

const OfferCardMain = memo(Card);

export { OfferCardMain };
