import { useEffect } from 'react';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Spinner } from '../../components/spinner/spinner';
import { UserMenu } from '../../components/user-menu/user-menu';
import { LoadingStatus } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { loadFavorites } from '../../store/async-actions';
import { Favorites } from './favorites';

const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  const loadingStatus = useAppSelector((store) => store.favoritesLoadingStatus);
  const favorites = useAppSelector((store) => store.favorites);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(loadFavorites());
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

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
