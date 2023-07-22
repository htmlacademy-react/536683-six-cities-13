import { OffersSorting } from '../offers-sorting/offers-soritng';
import { OfferCard } from '../offer-card/offer-card';
import { TOffer } from '../../types/offer';

type TOfferListProps = {
  offers: TOffer[];
  onOfferHover: (offerId: string) => void;
};

const OfferList = ({ offers, onOfferHover }: TOfferListProps) => {
  const offerCount = offers.length;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offerCount} places to stay in Amsterdam</b>

      <OffersSorting />

      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} onOfferHover={onOfferHover} />
        ))}
      </div>
    </section>
  );
};

export { OfferList };
