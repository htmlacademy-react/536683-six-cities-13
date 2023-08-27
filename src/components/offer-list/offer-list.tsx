import { OffersSorting } from '../offers-sorting/offers-soritng';
import { TOffer } from '../../types/offer';
import { OfferCardMain } from '../offer-card/offer-card-main';
import { DEFAULT_SORT_TYPE, Sort } from '../../utils/sort';
import { useState, useCallback } from 'react';
import { declension } from '../../utils/utils';

type TOfferListProps = {
  offers: TOffer[];
  onOfferHover: (offerId: string | null) => void;
};

const PLACES_TITLES = 'place|places|places';

const OfferList = ({ offers, onOfferHover }: TOfferListProps) => {
  const [currentSortType, setCurrentSortType] =
    useState<string>(DEFAULT_SORT_TYPE);

  const handleSortTypeClick = useCallback((sortType: string) => {
    setCurrentSortType(sortType);
  }, []);

  if (!offers.length) {
    return null;
  }

  const offerCount = offers.length;
  const [offerCity] = offers;
  const sortedOffers = Sort[currentSortType](offers);

  return (
    <section className="cities__places places" data-testid="cities-container">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offerCount} {declension(offerCount, PLACES_TITLES)} to stay in{' '}
        {offerCity.city.name}
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
