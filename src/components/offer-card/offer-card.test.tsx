import { render, screen } from '@testing-library/react';
import { AuthStatus } from '../../const';
import { withRouter, withStore } from '../../utils/mock-components';
import { makeFakeOffers } from '../../utils/mocks';
import { OfferCard } from './offer-card';

describe('Component: OfferCard', () => {
  it('should render correct', () => {
    const offerCardTestId = 'offer-card';
    const expectedProps = {
      offer: makeFakeOffers()[0],
      className: '',
      imageSize: {
        width: 20,
        height: 20,
      },
      onOfferHover: (offerId: string | null): void => {
        // eslint-disable-next-line no-console
        console.log(offerId);
      },
    };
    const { withStoreComponent } = withStore(<OfferCard {...expectedProps} />, {
      USER: { userEmail: '', authStatus: AuthStatus.Auth },
    });
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(offerCardTestId)).toBeInTheDocument();
  });
});
