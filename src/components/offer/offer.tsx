import { MAX_NEAR_PLACES } from '../../const';
import { TDetail } from '../../types/details';
import { TOffer } from '../../types/offer';
import { TReview } from '../../types/review';
import { Map } from '../map/map';
import { Reviews } from '../reviews/reviews';
import { OfferGallery } from './offer-gallery';
import { OfferHost } from './offer-host';
import { OfferInfo } from './offer-info';
import { OfferNearPlaces } from './offer-near-places';

type TOfferProps = {
  offerDetails: TDetail;
  reviews?: TReview;
  nearPlaces: TOffer[];
};

const Offer = ({ offerDetails, reviews, nearPlaces }: TOfferProps) => {
  const { images, host, description } = offerDetails;
  const places = nearPlaces.slice(0, MAX_NEAR_PLACES);
  const [place] = places;

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <OfferGallery images={images} />
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            <OfferInfo offer={offerDetails} />
            <OfferHost
              hostInfo={{
                ...host,
                description,
              }}
            />
            {reviews && <Reviews reviews={reviews} />}
          </div>
        </div>
        <section className="offer__map map">
          <Map city={place.city} points={places} />
        </section>
      </section>
      <div className="container">
        <OfferNearPlaces nearPlaces={places} />
      </div>
    </main>
  );
};

export { Offer };
