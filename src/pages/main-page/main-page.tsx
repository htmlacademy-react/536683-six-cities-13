import { useState } from 'react';
import { TOffer } from '../../types/offer';
import { useAppSelector } from '../../hooks/use-app-selector';
import { LocationList } from '../../components/location-list/location-list';
import { LOCATIONS, LoadingStatus } from '../../const';
import { changeLocation } from '../../store/actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { Cities } from '../../components/cities/cities';
import { Header } from '../../components/header/header';
import { UserMenu } from '../../components/user-menu/user-menu';
import { Spinner } from '../../components/spinner/spinner';

const MainPage = () => {
  const loadingStatus = useAppSelector((store) => store.loadingStatus);
  const dispatch = useAppDispatch();
  const locationCity = useAppSelector((store) => store.location);
  const offers = useAppSelector((store) => store.offers);
  const [hoveredOffer, setHoveredOffer] = useState<TOffer | undefined>(
    undefined
  );

  if (loadingStatus === LoadingStatus.Loading) {
    return <Spinner />;
  }

  const currentLocationOffers = offers.filter(
    (offer) => offer.city.name === locationCity
  );

  const handleLocationClick = (location: string) => {
    dispatch(changeLocation(location));
  };

  const handleOfferHover = (offerId: string) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);

    setHoveredOffer(currentOffer);
  };

  return (
    <div className="page page--gray page--main">
      <Header>
        <UserMenu />
      </Header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList
            locations={LOCATIONS}
            currentLocation={locationCity}
            onLocationClick={handleLocationClick}
          />
        </div>
        <Cities
          key={locationCity}
          offers={currentLocationOffers}
          selectedPoint={hoveredOffer}
          locationCity={locationCity}
          onOfferHover={handleOfferHover}
        />
      </main>
    </div>
  );
};

export { MainPage };
