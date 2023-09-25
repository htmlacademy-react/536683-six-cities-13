import { render, screen } from '@testing-library/react';
import { AuthStatus, LoadingStatus } from '../../const';
import { withRouter, withStore } from '../../utils/mock-components';
import { UserMenu } from './user-menu';

describe('Component: UserMenu', () => {
  const userMenuTestId = 'user-menu';

  it('should render correct', () => {
    const { withStoreComponent } = withStore(<UserMenu />, {
      USER: { userEmail: '', authStatus: AuthStatus.Auth },
      FAVORITES: {
        favorites: [],
        favoritesLoadingStatus: LoadingStatus.Success,
      },
    });
    const withRouterComponent = withRouter(withStoreComponent);

    render(withRouterComponent);

    const userMenu = screen.getByTestId(userMenuTestId);

    expect(userMenu).toBeInTheDocument();
  });

  it('should render "sign in" link correct with "Noauth" status', () => {
    const signInTestId = 'sign-in';
    const { withStoreComponent } = withStore(<UserMenu />, {
      USER: { userEmail: '', authStatus: AuthStatus.NoAuth },
      FAVORITES: {
        favorites: [],
        favoritesLoadingStatus: LoadingStatus.Success,
      },
    });
    const withRouterComponent = withRouter(withStoreComponent);

    render(withRouterComponent);

    const userMenu = screen.getByTestId(userMenuTestId);
    const signInLink = screen.getByTestId(signInTestId);

    expect(userMenu).toContainElement(signInLink);
  });

  it('should render "sign-out" link correct with "Auth" status', () => {
    const signInTestId = 'sign-out';
    const { withStoreComponent } = withStore(<UserMenu />, {
      USER: { userEmail: '', authStatus: AuthStatus.Auth },
      FAVORITES: {
        favorites: [],
        favoritesLoadingStatus: LoadingStatus.Success,
      },
    });
    const withRouterComponent = withRouter(withStoreComponent);

    render(withRouterComponent);

    const userMenu = screen.getByTestId(userMenuTestId);
    const signOutLink = screen.getByTestId(signInTestId);

    expect(userMenu).toContainElement(signOutLink);
  });

  it('should render "user-info" correct with "Auth" status', () => {
    const userInfoTestId = 'user-info';
    const { withStoreComponent } = withStore(<UserMenu />, {
      USER: { userEmail: '', authStatus: AuthStatus.Auth },
      FAVORITES: {
        favorites: [],
        favoritesLoadingStatus: LoadingStatus.Success,
      },
    });
    const withRouterComponent = withRouter(withStoreComponent);

    render(withRouterComponent);

    const userMenu = screen.getByTestId(userMenuTestId);
    const userInfo = screen.getByTestId(userInfoTestId);

    expect(userMenu).toContainElement(userInfo);
  });

  it('should contain user info text and favorites count data in "user-info"', () => {
    const userInfoTestId = 'user-info';
    const userEmailTestId = 'user-email';
    const userFavoritesCountTestId = 'user-favorites-count';
    const expectedUserEmail = /check@gmail.ru/i;
    const expectedFavoritesCount = '0';
    const { withStoreComponent } = withStore(<UserMenu />, {
      USER: { userEmail: 'check@gmail.ru', authStatus: AuthStatus.Auth },
      FAVORITES: {
        favorites: [],
        favoritesLoadingStatus: LoadingStatus.Success,
      },
    });
    const withRouterComponent = withRouter(withStoreComponent);

    render(withRouterComponent);

    const userInfo = screen.getByTestId(userInfoTestId);
    const userEmail = screen.getByTestId(userEmailTestId);
    const userFavoritesCount = screen.getByTestId(userFavoritesCountTestId);

    expect(userInfo).toContainElement(userEmail);
    expect(userInfo).toContainElement(userFavoritesCount);
    expect(userEmail).toHaveTextContent(expectedUserEmail);
    expect(userFavoritesCount).toHaveTextContent(expectedFavoritesCount);
  });
});
