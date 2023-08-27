import { render, screen } from '@testing-library/react';
import { FavoritesList } from './favorites-list';
import { makeFakeOffers } from '../../utils/mocks';
import { withRouter, withStore } from '../../utils/mock-components';
import { AuthStatus } from '../../const';
import { getUniqueFavoriteCities } from '../../utils/utils';

describe('Component: FavoritesList', () => {
  it('should render correct', () => {
    const favoritesListTestId = 'favorites-container';
    const favoriteCityTestId = 'favorite-city';
    const favoriteItemTestId = 'offer-card';
    const expectedFavorites = makeFakeOffers({ allFavorites: true });
    const cityItems = getUniqueFavoriteCities(expectedFavorites);
    const { withStoreComponent } = withStore(
      <FavoritesList favorites={expectedFavorites} />,
      { USER: { userEmail: '', authStatus: AuthStatus.Auth } }
    );
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    const favoritesList = screen.getByTestId(favoritesListTestId);
    const favoriteCity = screen.getAllByTestId(favoriteCityTestId);
    const favoriteItems = screen.getAllByTestId(favoriteItemTestId);

    expect(favoritesList).toBeInTheDocument();
    expect(favoriteCity.length).toBe(cityItems.length);
    expect(favoriteItems.length).toBe(expectedFavorites.length);
  });
});
