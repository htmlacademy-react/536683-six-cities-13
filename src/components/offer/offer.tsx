// import { MAX_NEAR_PLACES } from '../../const';
import { TDetail } from '../../types/details';
import { TOffer } from '../../types/offer';
import { TComment } from '../../types/review';
// import { Map } from '../map/map';
import { Comments } from '../comments/comments';
import { OfferGallery } from './offer-gallery';
import { OfferHost } from './offer-host';
import { OfferInfo } from './offer-info';
// import { OfferNearPlaces } from './offer-near-places';

type TOfferProps = {
  offerDetails: TDetail;
  comments?: TComment[];
  nearPlaces?: TOffer[];
};

const Offer = ({ offerDetails, comments, nearPlaces }: TOfferProps) => {
  const { images, host, description } = offerDetails;
  // eslint-disable-next-line no-console
  console.log(nearPlaces);

  // const places = nearPlaces.slice(0, MAX_NEAR_PLACES);
  // const [place] = places;

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
            {comments && <Comments comments={comments} />}
          </div>
        </div>
        <section className="offer__map map">
          {/* <Map city={place.city} points={places} /> */}
        </section>
      </section>
      <div className="container">
        {/* <OfferNearPlaces nearPlaces={places} /> */}
      </div>
    </main>
  );
};

export { Offer };
