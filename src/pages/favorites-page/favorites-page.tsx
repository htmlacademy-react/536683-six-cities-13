import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { UserMenu } from '../../components/user-menu/user-menu';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getUniqueFavoriteCities } from '../../utils';
import { Favorites } from './favorites';
import { FavoritesEmpty } from './favorites-empty';

const FavoritesPage = () => {
  const favorites = useAppSelector((store) => store.favorites);

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
