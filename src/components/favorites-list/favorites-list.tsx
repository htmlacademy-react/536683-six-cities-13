import { TOffer } from '../../types/offer';
import { OfferCardFavorites } from '../offer-card/offer-card-favorites';

type TFavoritesListProps = {
  offers: TOffer[];
};

const FavoritesList = ({ offers }: TFavoritesListProps) => {
  const cities: string[] = [
    ...offers.reduce(
      (initial, current) => initial.add(current.city.name),
      new Set<string>()
    ),
  ];
  const favorites = offers.filter((offer) => offer.isFavorite);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {cities.map((city) => (
          <li key={city} className="favorites__locations-items">
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
