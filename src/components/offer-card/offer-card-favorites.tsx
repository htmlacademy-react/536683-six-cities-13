import { OFFER_CARD_IMAGE_SIZE, OfferCardClassName } from '../../const';
import { OfferCard, TOfferCardProxyProps } from './offer-card';

const OfferCardFavorites = (props: TOfferCardProxyProps) => {
  const { ...restProps } = props;

  return (
    <OfferCard
      imageSize={OFFER_CARD_IMAGE_SIZE.favorites}
      className={OfferCardClassName.Favorites}
      {...restProps}
    />
  );
};

export { OfferCardFavorites };
