import { useState, useCallback } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector';
import { Map } from '../map/map';
import { OfferList } from '../offer-list/offer-list';
import { CitiesEmpty } from './cities-empty';
import {
  getOffers,
  getOffersLoadingStatus,
} from '../../store/offers-process/selectors';
import { LoadingStatus } from '../../const';

type TCitiesProps = {
  locationCity: string;
};

const Cities = ({ locationCity }: TCitiesProps) => {
  const offers = useAppSelector(getOffers);
  const loadingStatus = useAppSelector(getOffersLoadingStatus);
  const [hoveredOfferId, setHoveredOfferId] = useState<string | null>(null);
  const currentOffer = offers.find((offer) => offer.id === hoveredOfferId);

  const handleOfferHover = useCallback((offerId: string | null) => {
    setHoveredOfferId(offerId);
  }, []);

  if (loadingStatus === LoadingStatus.Error) {
    return (
      <div className="cities">
        <CitiesEmpty locationCity={locationCity} />;
      </div>
    );
  }

  const currentLocationOffers = offers.filter(
    (offer) => offer.city.name === locationCity
  );
  const [currentLocationOffer] = currentLocationOffers;

  return (
    <div className="cities">
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
              selectedPoint={currentOffer}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export { Cities };
