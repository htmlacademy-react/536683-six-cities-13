import { render, screen } from '@testing-library/react';
import { calculateRating } from '../../utils/utils';
import { Rating } from './rating';

describe('Component: Rating', () => {
  it('should render correct', () => {
    const expectedProps = {
      ratingValue: 2,
      className: '',
      showDigits: false,
    };
    const expectedWidth = calculateRating(expectedProps.ratingValue);
    const ratingTestId = 'rating';
    const ratingWidthTestId = 'rating-width';

    render(<Rating {...expectedProps} />);

    const rating = screen.getByTestId(ratingTestId);
    const ratingWidth = screen.getByTestId(ratingWidthTestId);

    expect(rating).toBeInTheDocument();
    expect(ratingWidth).toHaveStyle(`width: ${expectedWidth}%`);
  });
});
