import { useEffect } from 'react';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { UserMenu } from '../../components/user-menu/user-menu';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getUniqueFavoriteCities } from '../../utils';
import { Favorites } from './favorites';
import { FavoritesEmpty } from './favorites-empty';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { loadFavorites } from '../../store/async-actions';

const FavoritesPage = () => {
  const dispatch = useAppDispatch();
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

  // eslint-disable-next-line no-console
  console.log(getUniqueFavoriteCities(favorites));

  const favoritesContent = getUniqueFavoriteCities(favorites).length ? (
    <Favorites offers={favorites} />
  ) : (
    <FavoritesEmpty />
  );

  return (
    <div className="page">
      <Header>
        <UserMenu />
      </Header>
      {favoritesContent}
      <Footer />
    </div>
  );
};

export { FavoritesPage };
