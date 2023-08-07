import { AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { TComment } from '../../types/review';
import { ReviewForm } from '../review-form/review-form';
import { Comment } from './comment';

type TCommentsProps = {
  comments: TComment[];
};

const Comments = ({ comments }: TCommentsProps) => {
  const authStatus = useAppSelector((store) => store.authStatus);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </ul>
      {authStatus === AuthStatus.Auth && <ReviewForm />}
    </section>
  );
};

export { Comments };
