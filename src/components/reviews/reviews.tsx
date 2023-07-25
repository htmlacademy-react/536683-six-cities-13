import { TReview } from '../../types/review';
import { ReviewForm } from '../review-form/review-form';
import { Review } from './review';

type TReviewsProps = {
  review: TReview;
};

const Reviews = ({ review }: TReviewsProps) => {
  const { comments } = review;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {comments.map((comment) => (
          <Review key={comment.id} {...comment} />
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
};

export { Reviews };
