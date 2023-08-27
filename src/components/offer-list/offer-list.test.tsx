import { render, screen } from '@testing-library/react';
import { makeFakeOffers } from '../../utils/mocks';
import { OfferList } from './offer-list';
import { withRouter, withStore } from '../../utils/mock-components';
import { AuthStatus } from '../../const';

describe('Component: OfferList', () => {
  it('should render correct', () => {
    const offerListTestId = 'cities-container';
    const offerCardMainTestId = 'offer-card';
    const expectedOffers = makeFakeOffers();
    const expectedCallback = (offerId: string | null): void =>
      // eslint-disable-next-line no-console
      console.log(offerId);

    const { withStoreComponent } = withStore(
      <OfferList offers={expectedOffers} onOfferHover={expectedCallback} />,
      { USER: { userEmail: '', authStatus: AuthStatus.Auth } }
    );
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    const offerList = screen.getByTestId(offerListTestId);
    const offerMainItems = screen.getAllByTestId(offerCardMainTestId);

    expect(offerList).toBeInTheDocument();
    expect(offerMainItems.length).toBe(expectedOffers.length);
  });
});
