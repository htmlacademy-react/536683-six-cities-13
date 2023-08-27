import { render, screen } from '@testing-library/react';
import { NotFoundPage } from './not-found-page';
import { withRouter } from '../../utils/mock-components';

describe('Component: NotFoundPage', () => {
  it('should render correct', () => {
    const notFoundPageTestId = 'not-found-page';

    render(withRouter(<NotFoundPage />));

    const notFoundPage = screen.getByTestId(notFoundPageTestId);

    expect(notFoundPage).toBeInTheDocument();
    expect(notFoundPage).toHaveTextContent(/404/i);
  });
});
