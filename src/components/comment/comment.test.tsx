import { render, screen } from '@testing-library/react';
import { Comment } from './comment';
import { TComment } from '../../types/review';

describe('Component: Comment', () => {
  it('should render correct', () => {
    const commentTestId = 'comment';
    const expectedProps = {
      id: '100',
      user: { name: 'check', avatarUrl: './../' },
      date: '2023',
      rating: 4,
      comment: 'text',
    } as TComment;

    render(<Comment {...expectedProps} />);

    expect(screen.getByTestId(commentTestId)).toBeInTheDocument();
  });
});
