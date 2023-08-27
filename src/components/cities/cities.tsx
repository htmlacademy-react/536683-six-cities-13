import { useState, useCallback } from 'react';
import { Map } from '../map/map';
import { OfferList } from '../offer-list/offer-list';
import { TOffer } from '../../types/offer';

type TCitiesProps = {
  locationCity: string;
  offers: TOffer[];
};

const Cities = ({ locationCity, offers }: TCitiesProps) => {
  const [hoveredOfferId, setHoveredOfferId] = useState<string | null>(null);
  const currentOffer = offers.find((offer) => offer.id === hoveredOfferId);

  const handleOfferHover = useCallback((offerId: string | null) => {
    setHoveredOfferId(offerId);
  }, []);

  const currentLocationOffers = offers.filter(
    (offer) => offer.city.name === locationCity
  );
  const [currentLocationOffer] = currentLocationOffers;

  return (
    <div className="cities__places-container container">
      <OfferList
        offers={currentLocationOffers}
        onOfferHover={handleOfferHover}
      />
      <div className="cities__right-section">
        <section className="cities__map map">
          {currentLocationOffer?.city && (
            <Map
              city={currentLocationOffer.city}
              points={currentLocationOffers}
              selectedPoint={currentOffer}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export { Cities };
