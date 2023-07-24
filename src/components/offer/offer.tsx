import { TDetail } from '../../types/details';
import { TNearPlace } from '../../types/near-places';
import { TReview } from '../../types/review';
import { Reviews } from '../reviews/reviews';
import { OfferGallery } from './offer-gallery';
import { OfferHost } from './offer-host';
import { OfferInfo } from './offer-info';
import { OfferNearPlaces } from './offer-near-places';

type TOfferProps = {
  offerDetails: TDetail;
  review?: TReview;
  nearPlaces?: TNearPlace;
};

const Offer = ({ offerDetails, review, nearPlaces }: TOfferProps) => {
  const { images, host, description } = offerDetails;

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
            {review && <Reviews review={review} />}
          </div>
        </div>
        <section className="offer__map map" />
      </section>
      <div className="container">
        {nearPlaces && <OfferNearPlaces nearPlaces={nearPlaces.nearPlaces} />}
      </div>
    </main>
  );
};

export { Offer };
