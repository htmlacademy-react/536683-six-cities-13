import { withStore } from '../../utils/mock-components';
import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-components';
import { Header } from './header';
import { UserMenu } from '../user-menu/user-menu';
import { AuthStatus, LoadingStatus } from '../../const';

describe('Component: Header', () => {
  it('should render correct', () => {
    const headerTestId = 'header';
    const logoLinkTestId = 'logo-link';

    const withRouterComponent = withRouter(<Header />);

    render(withRouterComponent);

    const header = screen.getByTestId(headerTestId);
    const link = screen.getByTestId(logoLinkTestId);

    expect(header).toContainElement(link);
  });

  it('should render correct with children passed', () => {
    const headerTestId = 'header';
    const logoLinkTestId = 'logo-link';
    const userMenuTestId = 'user-menu';

    const { withStoreComponent } = withStore(
      <Header>
        <UserMenu />
      </Header>,
      {
        USER: { userEmail: '', authStatus: AuthStatus.Auth },
        FAVORITES: {
          favorites: [],
          favoritesLoadingStatus: LoadingStatus.Success,
        },
      }
    );

    const withRouterComponent = withRouter(withStoreComponent);

    render(withRouterComponent);

    const header = screen.getByTestId(headerTestId);
    const link = screen.getByTestId(logoLinkTestId);
    const userMenu = screen.getByTestId(userMenuTestId);

    expect(header).toContainElement(link);
    expect(header).toContainElement(userMenu);
  });
});
