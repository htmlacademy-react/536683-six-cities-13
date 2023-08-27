import { render, screen } from '@testing-library/react';
import { AuthStatus } from '../../const';
import { withRouter, withStore } from '../../utils/mock-components';
import { makeFakeOffers } from '../../utils/mocks';
import { Favorites } from './favorites';

describe('Component: Favorites', () => {
  it('should render correct', () => {
    const favoritesMainTestId = 'favorites-main';
    const expectedFavorites = makeFakeOffers({ allFavorites: true });
    const { withStoreComponent } = withStore(
      <Favorites favorites={expectedFavorites} />,
      { USER: { userEmail: '', authStatus: AuthStatus.Auth } }
    );
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(favoritesMainTestId)).toBeInTheDocument();
  });
});
