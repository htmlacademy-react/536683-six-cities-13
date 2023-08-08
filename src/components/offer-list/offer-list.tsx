import { OffersSorting } from '../offers-sorting/offers-soritng';
import { TOffer } from '../../types/offer';
import { OfferCardMain } from '../offer-card/offer-card-main';
import { Sort } from '../../sort';
import { useState } from 'react';

type TOfferListProps = {
  offers: TOffer[];
  onOfferHover: (offerId: string) => void;
};

const OfferList = ({ offers, onOfferHover }: TOfferListProps) => {
  const [currentSortType, setCurrentSortType] = useState<string>('Popular');
  const offerCount = offers.length;
  const [offerCity] = offers;
  const sortedOffers = Sort[currentSortType](offers);

  const handleSortTypeClick = (sortType: string) => {
    setCurrentSortType(sortType);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offerCount} places to stay in {offerCity.city.name}
      </b>
      <OffersSorting onSortTypeClick={handleSortTypeClick} />
      <div className="cities__places-list places__list tabs__content">
        {sortedOffers.map((offer) => (
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
