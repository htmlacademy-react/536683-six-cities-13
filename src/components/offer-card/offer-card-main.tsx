import { OFFER_CARD_IMAGE_SIZE, OfferCardClassName } from '../../const';
import { OfferCard, TOfferCardProxyProps } from './offer-card';

const OfferCardMain = (props: TOfferCardProxyProps) => {
  const { ...restProps } = props;

  return (
    <OfferCard
      imageSize={OFFER_CARD_IMAGE_SIZE.main}
      className={OfferCardClassName.Main}
      {...restProps}
    />
  );
};

export { OfferCardMain };
