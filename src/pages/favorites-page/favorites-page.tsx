import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Spinner } from '../../components/spinner/spinner';
import { UserMenu } from '../../components/user-menu/user-menu';
import { LoadingStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { Favorites } from './favorites';

const FavoritesPage = () => {
  const loadingStatus = useAppSelector((store) => store.loadingStatus);
  const favorites = useAppSelector((store) => store.favorites);

  if (loadingStatus === LoadingStatus.Loading) {
    return <Spinner />;
  }

  return (
    <div className="page">
      <Header>
        <UserMenu />
      </Header>
      <Favorites favorites={favorites} />
      <Footer />
    </div>
  );
};

export { FavoritesPage };
