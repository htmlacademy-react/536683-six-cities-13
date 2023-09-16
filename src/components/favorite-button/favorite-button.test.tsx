import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-components';
import { FavoriteButton } from './favorite-button';
import { AuthStatus } from '../../const';

describe('Component: FavoriteButton', () => {
  it('should render correct', () => {
    const favoriteButtonTestId = 'favorite-button';
    const expectedText = /To bookmarks/i;
    const expectedProps = {
      offerId: '10050',
      isFavorite: true,
      className: 'check',
    };
    const expectedClassName = `${expectedProps.className}__bookmark-button`;

    const { withStoreComponent } = withStore(
      <FavoriteButton {...expectedProps} />,
      {
        USER: { userEmail: '', authStatus: AuthStatus.Auth },
      }
    );
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    const favoriteButton = screen.getByTestId(favoriteButtonTestId);

    expect(favoriteButton).toBeInTheDocument();
    expect(favoriteButton).toHaveTextContent(expectedText);
    expect(favoriteButton).toHaveClass(expectedClassName);
  });
});
