import { useState } from 'react';
import { Logo } from '../../components/logo/logo';
import { TOffer } from '../../types/offer';
import { useAppSelector } from '../../hooks/use-app-selector';
import { LocationList } from '../../components/location-list/location-list';
import { LOCATIONS, RequestStatus } from '../../const';
import { changeLocation } from '../../store/actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { Cities } from '../../components/cities/cities';
import { Spinner } from '../../components/spinner/spinner';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const locationCity = useAppSelector((store) => store.location);
  const offers = useAppSelector((store) => store.offers);
  const status = useAppSelector((store) => store.status);
  const [hoveredOffer, setHoveredOffer] = useState<TOffer | undefined>(
    undefined
  );
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

  const mainContent =
    status === RequestStatus.Success ? (
      <Cities
        offers={currentLocationOffers}
        selectedPoint={hoveredOffer}
        locationCity={locationCity}
        onOfferHover={handleOfferHover}
      />
    ) : (
      <Spinner />
    );

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList
            locations={LOCATIONS}
            onLocationClick={handleLocationClick}
          />
        </div>
        {mainContent}
      </main>
    </div>
  );
};

export { MainPage };
