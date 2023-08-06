import { FavoritesList } from '../../components/favorites-list/favorites-list';
import { TOffer } from '../../types/offer';

type TFavoritesProps = {
  offers: TOffer[];
};

const Favorites = ({ offers }: TFavoritesProps) => (
  <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      {<FavoritesList offers={offers} />}
    </div>
  </main>
);

export { Favorites };
