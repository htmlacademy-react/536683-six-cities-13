import { useState } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector';
import { TOffer } from '../../types/offer';
import { Map } from '../map/map';
import { OfferList } from '../offer-list/offer-list';
import { CitiesEmpty } from './cities-empty';
import { getOffers } from '../../store/offer-process/selectors';

type TCitiesProps = {
  locationCity: string;
};

const Cities = ({ locationCity }: TCitiesProps) => {
  const offers = useAppSelector(getOffers);
  const [hoveredOffer, setHoveredOffer] = useState<TOffer | undefined>(
    undefined
  );
  const currentLocationOffers = offers.filter(
    (offer) => offer.city.name === locationCity
  );
  const [currentLocationOffer] = currentLocationOffers;

  const handleOfferHover = (offerId: string) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);

    setHoveredOffer(currentOffer);
  };

  const citiesContent = currentLocationOffers.length ? (
    <div className="cities__places-container container">
      <OfferList
        offers={currentLocationOffers}
        onOfferHover={handleOfferHover}
      />
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            city={currentLocationOffer.city}
            points={currentLocationOffers}
            selectedPoint={hoveredOffer}
          />
        </section>
      </div>
    </div>
  ) : (
    <CitiesEmpty locationCity={locationCity} />
  );

  return <div className="cities">{citiesContent}</div>;
};

export { Cities };
