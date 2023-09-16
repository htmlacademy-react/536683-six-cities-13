import { render, screen } from '@testing-library/react';
import { OfferFeatures } from './offer-features';

describe('Component: OfferFeatures', () => {
  const offerFeaturesTestId = 'offer-features';
  const expectedProps = {
    features: {
      type: 'check',
      bedrooms: 5,
      maxAdults: 10,
    },
  };

  it('should render correct', () => {
    render(<OfferFeatures {...expectedProps} />);

    const offerFeatures = screen.getByTestId(offerFeaturesTestId);

    expect(offerFeatures).toBeInTheDocument();
  });

  it('should contain correct text content', () => {
    const expectedTypeText = new RegExp(`${expectedProps.features.type}`, 'i');
    const expectedBedroomsText = new RegExp(
      `${expectedProps.features.bedrooms}`,
      'i'
    );
    const expectedMaxAdultsText = new RegExp(
      `${expectedProps.features.maxAdults}`,
      'i'
    );

    render(<OfferFeatures {...expectedProps} />);

    const offerFeatures = screen.getByTestId(offerFeaturesTestId);

    expect(offerFeatures).toHaveTextContent(expectedTypeText);
    expect(offerFeatures).toHaveTextContent(expectedBedroomsText);
    expect(offerFeatures).toHaveTextContent(expectedMaxAdultsText);
  });
});
