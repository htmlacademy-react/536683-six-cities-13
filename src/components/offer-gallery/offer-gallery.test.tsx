import { render, screen } from '@testing-library/react';
import { OfferGallery } from './offer-gallery';

describe('Component: OfferGallery', () => {
  const expectedProps = {
    images: ['check', 'check2'],
  };

  it('should render correct', () => {
    const offerGalleryTestId = 'offer-gallery';

    render(<OfferGallery {...expectedProps} />);

    const offerGallery = screen.getByTestId(offerGalleryTestId);

    expect(offerGallery).toBeInTheDocument();
  });

  it('should render correct image count', () => {
    const imageTestId = 'offer-gallery-image';
    const expectedCount = expectedProps.images.length;

    render(<OfferGallery {...expectedProps} />);

    const images = screen.getAllByTestId(imageTestId);

    expect(images.length).toBe(expectedCount);
  });
});
