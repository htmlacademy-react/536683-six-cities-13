import { render, screen } from '@testing-library/react';
import { ErrorMessage } from './error-message';
import { withStore } from '../../utils/mock-components';

describe('Component: ErrorMessage', () => {
  it('should render correnct', () => {
    const errorMessageTestId = 'error-message';
    const expectedText = /ErrorCheck/i;
    const errorMessage = {
      message: 'ErrorCheck',
      messageStatus: '',
    };
    const { withStoreComponent } = withStore(<ErrorMessage />, {
      APP: { error: errorMessage, location: '' },
    });

    render(withStoreComponent);
    const errorMessageElement = screen.getByTestId(errorMessageTestId);

    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement).toHaveTextContent(expectedText);
  });
});
