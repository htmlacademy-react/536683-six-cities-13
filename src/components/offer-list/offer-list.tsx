import { OffersSorting } from '../offers-sorting/offers-soritng';
import { TOffer } from '../../types/offer';
import { OfferCardMain } from '../offer-card/offer-card-main';

type TOfferListProps = {
  offers: TOffer[];
  onOfferHover: (offerId: string) => void;
};

const OfferList = ({ offers, onOfferHover }: TOfferListProps) => {
  const offerCount = offers.length;
  const [offerCity] = offers;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offerCount} places to stay in {offerCity.city.name}
      </b>
      <OffersSorting />
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCardMain
            key={offer.id}
            offer={offer}
            onOfferHover={onOfferHover}
          />
        ))}
      </div>
    </section>
  );
};

export { OfferList };
