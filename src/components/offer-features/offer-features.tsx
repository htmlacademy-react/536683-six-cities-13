import { capitalizeFirstLetter, declension } from '../../utils/utils';

type TOfferFeaturesProps = {
  features: {
    type: string;
    bedrooms: number;
    maxAdults: number;
  };
};

const BEDROOM_TITLES = 'bedroom|bedrooms|bedrooms';
const ADULTS_TITLES = 'adult|adults|adults';

const OfferFeatures = ({ features }: TOfferFeaturesProps) => {
  const { type, bedrooms, maxAdults } = features;

  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {capitalizeFirstLetter(type)}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} {capitalizeFirstLetter(declension(bedrooms, BEDROOM_TITLES))}
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} {declension(maxAdults, ADULTS_TITLES)}
      </li>
    </ul>
  );
};

export { OfferFeatures };
