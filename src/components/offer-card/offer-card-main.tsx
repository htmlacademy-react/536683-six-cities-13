import { OfferCardClassName } from '../../const';
import { OfferCard, TOfferCardProxyProps } from './offer-card';

const OfferCardMain = (props: TOfferCardProxyProps) => {
  const { ...restProps } = props;

  return (
    <OfferCard
      imageSize={{ width: 260, height: 200 }}
      className={OfferCardClassName.Main}
      {...restProps}
    />
  );
};

export { OfferCardMain };
