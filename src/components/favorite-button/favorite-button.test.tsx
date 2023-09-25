import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-components';
import { FavoriteButton } from './favorite-button';
import { AuthStatus } from '../../const';
import userEvent from '@testing-library/user-event';

describe('Component: FavoriteButton', () => {
  const favoriteButtonTestId = 'favorite-button';
  const expectedText = /To bookmarks/i;
  const expectedProps = {
    offerId: '10050',
    isFavorite: true,
    className: 'check',
  };

  it('should render correct', () => {
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

  it('should mark button as favorite when it cliked', async () => {
    const props = { ...expectedProps, isFavorite: false };
    const expectedClassName = `${expectedProps.className}__bookmark-button--active`;
    const { withStoreComponent } = withStore(<FavoriteButton {...props} />, {
      USER: { userEmail: '', authStatus: AuthStatus.Auth },
    });
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    await userEvent.click(screen.getByTestId(favoriteButtonTestId));

    expect(screen.getByTestId(favoriteButtonTestId)).toHaveClass(
      expectedClassName
    );
  });
});
