import { AuthStatus, MAX_COMMENTS } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { TComment } from '../../types/review';
import { sortCommentsFromNewToOld } from '../../utils';
import { ReviewForm } from '../review-form/review-form';
import { Comment } from './comment';

type TCommentsProps = {
  comments: TComment[];
};

const Comments = ({ comments }: TCommentsProps) => {
  const authStatus = useAppSelector((store) => store.authStatus);

  if (!comments.length) {
    return null;
  }

  const sortedComments = sortCommentsFromNewToOld([...comments]).slice(
    0,
    MAX_COMMENTS
  );

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {sortedComments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </ul>
      {authStatus === AuthStatus.Auth && <ReviewForm />}
    </section>
  );
};

export { Comments };
