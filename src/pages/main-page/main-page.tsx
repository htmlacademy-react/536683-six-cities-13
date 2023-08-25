import { useAppSelector } from '../../hooks/use-app-selector';
import { LocationList } from '../../components/location-list/location-list';
import { LOCATIONS, LoadingStatus } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { Cities } from '../../components/cities/cities';
import { Header } from '../../components/header/header';
import { UserMenu } from '../../components/user-menu/user-menu';
import { Spinner } from '../../components/spinner/spinner';
import { getCurrentLocation } from '../../store/app-process/selectors';
import { changeLocation } from '../../store/app-process/app-process';
import {
  getOffers,
  getOffersLoadingStatus,
} from '../../store/offers-process/selectors';
import cn from 'classnames';
import { CitiesEmpty } from '../../components/cities/cities-empty';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getOffers);
  const loadingStatus = useAppSelector(getOffersLoadingStatus);
  const locationCity = useAppSelector(getCurrentLocation);

  if (loadingStatus === LoadingStatus.Loading) {
    return <Spinner />;
  }

  const handleLocationClick = (location: string) => {
    dispatch(changeLocation(location));
  };

  return (
    <div className="page page--gray page--main">
      <Header>
        <UserMenu />
      </Header>
      <main
        className={`page__main page__main--index ${cn({
          'page__main--index-empty': !offers.length,
        })}`}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList
            locations={LOCATIONS}
            currentLocation={locationCity}
            onLocationClick={handleLocationClick}
          />
        </div>
        <div className="cities">
          {(loadingStatus === LoadingStatus.Error || !offers.length) && (
            <CitiesEmpty locationCity={locationCity} />
          )}
          {offers.length > 1 && (
            <Cities
              key={locationCity}
              offers={offers}
              locationCity={locationCity}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export { MainPage };
