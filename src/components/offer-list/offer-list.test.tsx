import { render, screen } from '@testing-library/react';
import { makeFakeOffers } from '../../utils/mocks';
import { OfferList } from './offer-list';
import { withRouter, withStore } from '../../utils/mock-components';
import { AuthStatus } from '../../const';

describe('Component: OfferList', () => {
  const expectedOffers = makeFakeOffers();
  const expectedCallback = (offerId: string | null): void =>
    // eslint-disable-next-line no-console
    console.log(offerId);

  it('should render correct', () => {
    const offerListTestId = 'cities-container';
    const offerCardMainTestId = 'offer-card';

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

  it('should not render if offers array length equals zero', () => {
    const offerListTestId = 'cities-container';
    const { withStoreComponent } = withStore(
      <OfferList offers={[]} onOfferHover={expectedCallback} />,
      { USER: { userEmail: '', authStatus: AuthStatus.Auth } }
    );
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    expect(screen.queryByTestId(offerListTestId)).not.toBeInTheDocument();
  });
});
