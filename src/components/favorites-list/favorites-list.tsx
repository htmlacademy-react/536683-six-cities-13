import { TOffer } from '../../types/offer';
import { getUniqueFavoriteCities } from '../../utils/utils';
import { OfferCardFavorites } from '../offer-card/offer-card-favorites';

type TFavoritesListProps = {
  favorites: TOffer[];
};

const FavoritesList = ({ favorites }: TFavoritesListProps) => {
  const cities: string[] = getUniqueFavoriteCities(favorites);

  return (
    <section className="favorites" data-testid="favorites-container">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {cities.map((city) => (
          <li
            key={city}
            className="favorites__locations-items"
            data-testid="favorite-city"
          >
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {favorites.map((favorite) => {
                const { id, city: favoriteCity } = favorite;

                if (favoriteCity.name === city) {
                  return <OfferCardFavorites key={id} offer={favorite} />;
                }

                return null;
              })}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export { FavoritesList };
