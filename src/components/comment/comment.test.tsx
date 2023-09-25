import { render, screen } from '@testing-library/react';
import { Comment } from './comment';
import { TComment } from '../../types/review';
import { getCommentDate } from '../../utils/utils';
import { internet, lorem } from 'faker';

vi.mock('../rating-reviews/rating-reviews', () => ({
  RatingReviews: () => <>Mock Rating Reviews</>,
}));

describe('Component: Comment', () => {
  const commentTestId = 'comment';
  const expectedProps = {
    id: '100',
    user: { name: 'check', avatarUrl: internet.avatar() },
    date: '2023',
    rating: 4,
    comment: lorem.sentences(2),
  } as TComment;

  it('should render correct', () => {
    render(<Comment {...expectedProps} />);

    expect(screen.getByTestId(commentTestId)).toBeInTheDocument();
  });

  it('should contain correct text info', () => {
    const {
      user: { name },
      comment,
      date,
    } = expectedProps;
    render(<Comment {...expectedProps} />);

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(comment)).toBeInTheDocument();
    expect(screen.getByText(getCommentDate(date))).toBeInTheDocument();
  });

  it('should render correct RatingReviews', () => {
    render(<Comment {...expectedProps} />);

    expect(screen.getByText('Mock Rating Reviews')).toBeInTheDocument();
  });
});
