import { TOffer } from '../../types/offer';
import { OfferCardNearPlace } from '../offer-card-near-place/offer-card-near-place';

type TOfferNearPlacesProps = {
  nearPlaces: TOffer[];
};

const OfferNearPlaces = ({ nearPlaces }: TOfferNearPlacesProps) => {
  if (!nearPlaces?.length) {
    return null;
  }

  return (
    <section className="near-places places" data-testid="near-places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearPlaces.map((nearPlace) => (
          <OfferCardNearPlace key={nearPlace.id} offer={nearPlace} />
        ))}
      </div>
    </section>
  );
};

export { OfferNearPlaces };
