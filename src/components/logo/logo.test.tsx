import { render, screen } from '@testing-library/react';
import { Logo } from './logo';
import { withRouter } from '../../utils/mock-components';

describe('Component: Logo', () => {
  it('should render correct', () => {
    const logoLinkTestId = 'logo-link';
    const logoImageTestId = 'logo-image';

    render(withRouter(<Logo />));

    const logoLink = screen.getByTestId(logoLinkTestId);
    const logoImage = screen.getByTestId(logoImageTestId);

    expect(logoLink).toBeInTheDocument();
    expect(logoImage).toBeInTheDocument();
  });
});
