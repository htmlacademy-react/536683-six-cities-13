import { render, screen } from '@testing-library/react';
import { AuthStatus } from '../../const';
import { TDetail } from '../../types/details';
import { withRouter, withStore } from '../../utils/mock-components';
import { OfferInfo } from './offer-info';

describe('Component: OfferInfo', () => {
  const expectedProps = {
    id: '100',
    rating: 5,
    isPremium: true,
    title: 'chcek',
    type: 'bed',
    bedrooms: 20,
    maxAdults: 4,
    price: 100500,
    goods: ['fen', 'kran'],
    isFavorite: true,
  } as TDetail;

  it('should render correct', () => {
    const props = { ...expectedProps };
    const offerInfoTestId = 'offer-info';
    const { withStoreComponent } = withStore(<OfferInfo offer={props} />, {
      USER: { userEmail: '', authStatus: AuthStatus.Auth },
    });
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(offerInfoTestId)).toBeInTheDocument();
  });

  it('should render correct status mark', () => {
    const props = { ...expectedProps, isPremium: true };
    const expectedText = /Premium/i;
    const { withStoreComponent } = withStore(<OfferInfo offer={props} />, {
      USER: { userEmail: '', authStatus: AuthStatus.Auth },
    });
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
