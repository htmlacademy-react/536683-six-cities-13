import { useEffect } from 'react';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { UserMenu } from '../../components/user-menu/user-menu';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import {
  getFavorites,
  getFavoritesLoadingStatus,
} from '../../store/favorites-process/selectors';
import { Favorites } from '../favorites/favorites';
import { loadFavorites } from '../../store/async-actions';
import { AuthStatus, LoadingStatus } from '../../const';
import { Spinner } from '../../components/spinner/spinner';
import { FavoritesEmpty } from '../favorites-empty/favorites-empty';
import cn from 'classnames';
import { getAuthStatus } from '../../store/user-process/selectors';

const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);
  const favorites = useAppSelector(getFavorites);
  const loadingStatus = useAppSelector(getFavoritesLoadingStatus);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && authStatus === AuthStatus.Auth) {
      dispatch(loadFavorites());
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, authStatus]);

  if (loadingStatus === LoadingStatus.Loading) {
    return <Spinner />;
  }

  return (
    <div
      className={`page ${cn({
        'page--favorites-empty': !favorites.length,
      })}`}
    >
      <Header>
        <UserMenu />
      </Header>
      {(loadingStatus === LoadingStatus.Error || !favorites.length) && (
        <FavoritesEmpty />
      )}
      {favorites.length > 0 && <Favorites favorites={favorites} />}
      <Footer />
    </div>
  );
};

export { FavoritesPage };
