import { capitalizeFirstLetter } from '../../utils/utils';

type TOfferFeaturesProps = {
  features: {
    type: string;
    bedrooms: number;
    maxAdults: number;
  };
};

const OfferFeatures = ({ features }: TOfferFeaturesProps) => {
  const { type, bedrooms, maxAdults } = features;

  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {capitalizeFirstLetter(type)}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
};

export { OfferFeatures };
