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
  const loadingStatus = useAppSelector((store) => store.offersLoadingStatus);
  const dispatch = useAppDispatch();
  const locationCity = useAppSelector((store) => store.location);

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
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList
            locations={LOCATIONS}
            currentLocation={locationCity}
            onLocationClick={handleLocationClick}
          />
        </div>
        <Cities key={locationCity} locationCity={locationCity} />
      </main>
    </div>
  );
};

export { MainPage };
