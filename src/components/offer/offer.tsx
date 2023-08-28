import { MAX_NEAR_PLACES } from '../../const';
import { TDetail } from '../../types/details';
import { TOffer } from '../../types/offer';
import { TComment } from '../../types/review';
import { Map } from '../map/map';
import { Comments } from '../comments/comments';
import { OfferGallery } from '../offer-gallery/offer-gallery';
import { OfferHost } from '../offer-host/offer-host';
import { OfferInfo } from '../offer-info/offer-info';
import { OfferNearPlaces } from '../offer-near-places/offer-near-places';
import styles from './offer.module.css';

type TOfferProps = {
  offerDetails: TDetail | null;
  comments: TComment[];
  nearPlaces: TOffer[];
};

const Offer = ({ offerDetails, comments, nearPlaces }: TOfferProps) => {
  if (!offerDetails || !nearPlaces) {
    return null;
  }

  const { images, host, description } = offerDetails;
  const places = nearPlaces.slice(0, MAX_NEAR_PLACES);

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
            <Comments comments={comments} />
          </div>
        </div>
        <section className={`offer__map ${styles['offer__map--static']} map`}>
          <Map
            city={offerDetails.city}
            selectedPoint={offerDetails}
            points={[...places, offerDetails]}
          />
        </section>
      </section>
      <div className="container">
        <OfferNearPlaces nearPlaces={places} />
      </div>
    </main>
  );
};

export { Offer };
