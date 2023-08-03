import { TOffer } from '../../types/offer';
import { Map } from '../map/map';
import { OfferList } from '../offer-list/offer-list';

type TCitiesProps = {
  offers: TOffer[];
  onOfferHover: (offerId: string) => void;
  selectedPoint?: TOffer;
};

const Cities = ({ offers, selectedPoint, onOfferHover }: TCitiesProps) => {
  const [currentOffer] = offers;

  return (
    <div className="cities__places-container container">
      <OfferList offers={offers} onOfferHover={onOfferHover} />
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            city={currentOffer.city}
            points={offers}
            selectedPoint={selectedPoint}
          />
        </section>
      </div>
    </div>
  );
};

export { Cities };
