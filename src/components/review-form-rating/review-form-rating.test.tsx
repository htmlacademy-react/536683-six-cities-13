import { render, screen } from '@testing-library/react';
import { LoadingStatus, REVIEW_RATINGS } from '../../const';
import { withStore } from '../../utils/mock-components';
import { ReviewRating } from './review-form-rating';

describe('Component: ReviewFormRating', () => {
  it('should render correct', () => {
    const reviewRatingTestId = 'review-rating-container';
    const reviewRatingItemTestId = 'review-rating-item';
    const expectedRatingItemCount = REVIEW_RATINGS.length;
    const expectedProps = {
      selectedRating: 4,
      onRatingChange: (rating: number): void => {
        // eslint-disable-next-line no-console
        console.log(rating);
      },
    };
    const { withStoreComponent } = withStore(
      <ReviewRating {...expectedProps} />,
      {
        COMMENTS: { comments: [], commentSubmitStatus: LoadingStatus.Success },
      }
    );

    render(withStoreComponent);

    const reviewRatingContainer = screen.getByTestId(reviewRatingTestId);
    const reviewRatingItems = screen.getAllByTestId(reviewRatingItemTestId);

    expect(reviewRatingContainer).toBeInTheDocument();
    expect(reviewRatingItems.length).toBe(expectedRatingItemCount);
  });
});
