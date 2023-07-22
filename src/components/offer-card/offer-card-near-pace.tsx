import { OfferCardClassName } from '../../const';
import { OfferCard, TOfferCardProxyProps } from './offer-card';

const OfferCardNearPlace = (props: TOfferCardProxyProps) => {
  const { ...restProps } = props;

  return (
    <OfferCard
      imageSize={{ width: 150, height: 110 }}
      className={OfferCardClassName.Near}
      {...restProps}
    />
  );
};

export { OfferCardNearPlace };
