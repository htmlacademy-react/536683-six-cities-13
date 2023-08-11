import { FavoritesList } from '../../components/favorites-list/favorites-list';
import { TOffer } from '../../types/offer';
import { FavoritesEmpty } from './favorites-empty';

type TFavoritesProps = {
  favorites: TOffer[];
};

const Favorites = ({ favorites }: TFavoritesProps) => {
  if (!favorites.length) {
    return <FavoritesEmpty />;
  }

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        {<FavoritesList favorites={favorites} />}
      </div>
    </main>
  );
};

export { Favorites };
