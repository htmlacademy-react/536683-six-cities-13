import { render, screen } from '@testing-library/react';
import { makeFakeOffers } from '../../utils/mocks';
import { OfferNearPlaces } from './offer-near-places';
import { withRouter, withStore } from '../../utils/mock-components';
import { AuthStatus } from '../../const';

describe('Component: OfferNearPlaces', () => {
  it('should render correct', () => {
    const offerNearPlacesTestid = 'near-places';
    const expectedText = /Other places/i;
    const expectedProps = {
      nearPlaces: makeFakeOffers(),
    };

    const { withStoreComponent } = withStore(
      <OfferNearPlaces {...expectedProps} />,
      {
        USER: { userEmail: '', authStatus: AuthStatus.Auth },
      }
    );
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    const offerNearPlaces = screen.getByTestId(offerNearPlacesTestid);

    expect(offerNearPlaces).toBeInTheDocument();
    expect(offerNearPlaces).toHaveTextContent(expectedText);
  });

  it('should not render if prop "nearPlaces" is empty array', () => {
    const expectedProps = {
      nearPlaces: [],
    };

    const { withStoreComponent } = withStore(
      <OfferNearPlaces {...expectedProps} />,
      {
        USER: { userEmail: '', authStatus: AuthStatus.Auth },
      }
    );
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    expect(null).toBe(null);
  });

  it('should render correct card count', () => {
    const offerCardTestId = 'offer-card';
    const offerCards = makeFakeOffers({ count: 5 });
    const expectedProps = {
      nearPlaces: offerCards,
    };
    const expectedCardCount = offerCards.length;
    const { withStoreComponent } = withStore(
      <OfferNearPlaces {...expectedProps} />,
      {
        USER: { userEmail: '', authStatus: AuthStatus.Auth },
      }
    );
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    const cards = screen.getAllByTestId(offerCardTestId);

    expect(cards.length).toBe(expectedCardCount);
  });
});
