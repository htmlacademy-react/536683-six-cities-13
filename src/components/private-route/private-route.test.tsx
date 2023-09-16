import { render, screen } from '@testing-library/react';
import { AuthStatus } from '../../const';
import { withRouter, withStore } from '../../utils/mock-components';
import { PrivateRoute } from './private-route';

describe('Component: PrivateRoute', () => {
  it('should render correct then AuthStatus.Error', () => {
    const { withStoreComponent } = withStore(<PrivateRoute />, {
      USER: { userEmail: '', authStatus: AuthStatus.Unknown },
    });
    const preparedComponent = withRouter(withStoreComponent);
    const spinnerTestId = 'spinner';

    render(preparedComponent);

    const spinner = screen.getByTestId(spinnerTestId);

    expect(spinner).toBeInTheDocument();
  });

  it('should render correct with children passed', () => {
    const expectedText = 'Passed';
    const TestComponent = <div>{expectedText}</div>;
    const { withStoreComponent } = withStore(
      <PrivateRoute>{TestComponent}</PrivateRoute>,
      {
        USER: { userEmail: '', authStatus: AuthStatus.Auth },
      }
    );
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
