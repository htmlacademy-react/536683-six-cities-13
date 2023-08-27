import { render, screen } from '@testing-library/react';
import { Footer } from './footer';
import { withRouter } from '../../utils/mock-components';

describe('Component: Footer', () => {
  it('should render correct', () => {
    const footerContainerTestId = 'footer-container';

    render(withRouter(<Footer />));

    const footerContainer = screen.getByTestId(footerContainerTestId);

    expect(footerContainer).toBeInTheDocument();
  });
});
