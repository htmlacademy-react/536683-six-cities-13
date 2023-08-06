import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getUniqueFavoriteCities } from '../../utils';
import { Favorites } from './favorites';
import { FavoritesEmpty } from './favorites-empty';

const FavoritesPage = () => {
  const offers = useAppSelector((store) => store.offers);
  const favoritesContent = getUniqueFavoriteCities(offers).length ? (
    <Favorites offers={offers} />
  ) : (
    <FavoritesEmpty />
  );

  return (
    <div className="page">
      <Header />
      {favoritesContent}
      <Footer />
    </div>
  );
};

export { FavoritesPage };
