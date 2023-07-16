import { OffersSorting } from '../offers-sorting/offers-soritng';
import { TOffer } from '../../mocks/offers';
import { OfferCard } from '../offer-card/offer-card';

type TOfferListProps = {
  offers: TOffer[];
};

const OfferList = (props: TOfferListProps) => {
  const { offers } = props;
  const offerCount = offers.length;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offerCount} places to stay in Amsterdam</b>

      <OffersSorting />

      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </section>
  );
};

export { OfferList };
