import { TComment } from '../../types/review';
import { ReviewForm } from '../review-form/review-form';
import { Comment } from './comment';

type TCommentsProps = {
  comments: TComment[];
};

const Comments = ({ comments }: TCommentsProps) => (
  <section className="offer__reviews reviews">
    <h2 className="reviews__title">
      Reviews · <span className="reviews__amount">{comments.length}</span>
    </h2>
    <ul className="reviews__list">
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </ul>
    <ReviewForm />
  </section>
);

export { Comments };
