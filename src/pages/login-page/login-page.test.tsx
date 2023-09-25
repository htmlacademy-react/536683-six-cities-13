import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginPage } from './login-page';
import { withRouter, withStore } from '../../utils/mock-components';
import { AuthStatus } from '../../const';

describe('Component: LoginPage', () => {
  const emailTestId = 'email-input';
  const passwordInputTestId = 'password-input';

  it('should render correct', () => {
    const expectedText = /Sign in/i;
    const loginPageTestId = 'login-page';
    const { withStoreComponent } = withStore(<LoginPage />, {
      USER: { userEmail: '', authStatus: AuthStatus.NoAuth },
    });
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    const loginPage = screen.getByTestId(loginPageTestId);
    const emailElement = screen.getByTestId(emailTestId);
    const passwordElement = screen.getByTestId(passwordInputTestId);

    expect(loginPage).toBeInTheDocument();
    expect(loginPage).toHaveTextContent(expectedText);
    expect(emailElement).toBeInTheDocument();
    expect(passwordElement).toBeInTheDocument();
  });

  it('should render correct when user enters login and pass', async () => {
    const expectedLoginValue = 'checbupel@100500.ru';
    const expectedPassValue = 'check1000';
    const { withStoreComponent } = withStore(<LoginPage />, {
      USER: { userEmail: '', authStatus: AuthStatus.NoAuth },
    });
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    await userEvent.type(screen.getByTestId(emailTestId), expectedLoginValue);
    await userEvent.type(
      screen.getByTestId(passwordInputTestId),
      expectedPassValue
    );

    expect(screen.getByDisplayValue(expectedLoginValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(expectedPassValue)).toBeInTheDocument();
  });
});
