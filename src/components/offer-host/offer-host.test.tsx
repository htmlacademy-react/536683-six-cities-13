import { render, screen } from '@testing-library/react';
import { OfferHost } from './offer-host';

describe('Component: OfferHost', () => {
  const offerHostTestId = 'offer-host';
  const expectedProps = {
    hostInfo: {
      isPro: true,
      name: 'Check',
      avatarUrl: './src/image.png',
      description: 'check lorem ipsum',
    },
  };

  it('should render correct', () => {
    const expectedText = /Meet the host/i;

    render(<OfferHost {...expectedProps} />);

    const offerHost = screen.getByTestId(offerHostTestId);

    expect(offerHost).toBeInTheDocument();
    expect(offerHost).toHaveTextContent(expectedText);
  });

  it('should contain correct text', () => {
    const expectedText = /Pro/i;
    const proSignTestId = 'pro-sign';
    const expectedClassName = 'offer__avatar-wrapper--pro';
    const expectedDescText = new RegExp(
      `${expectedProps.hostInfo.description}`,
      'i'
    );
    const expectedNameText = new RegExp(`${expectedProps.hostInfo.name}`, 'i');

    render(<OfferHost {...expectedProps} />);

    const offerHost = screen.getByTestId(offerHostTestId);
    const offerHostProSign = screen.getByTestId(proSignTestId);

    expect(offerHost).toHaveTextContent(expectedText);
    expect(offerHost).toHaveTextContent(expectedDescText);
    expect(offerHost).toHaveTextContent(expectedNameText);
    expect(offerHostProSign).toHaveClass(expectedClassName);
  });
});
