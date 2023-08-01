import { TReview } from '../../types/review';
import { ReviewForm } from '../review-form/review-form';
import { Review } from './review';

type TReviewsProps = {
  reviews: TReview;
};

const Reviews = ({ reviews }: TReviewsProps) => {
  const { reviewComments } = reviews;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews ·{' '}
        <span className="reviews__amount">{reviewComments.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviewComments.map((reviewComment) => (
          <Review key={reviewComment.id} {...reviewComment} />
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
};

export { Reviews };
