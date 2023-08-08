import { TComment } from '../../types/review';
import { getCommentDate, getMachineDate } from '../../utils';
import { RatingReviews } from '../rating/rating-reviews';

const Comment = ({
  id,
  user: { name, avatarUrl },
  date,
  rating,
  comment,
}: TComment) => (
  <li key={id} className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img
          className="reviews__avatar user__avatar"
          src={avatarUrl}
          width={54}
          height={54}
          alt="Reviews avatar"
        />
      </div>
      <span className="reviews__user-name">{name}</span>
    </div>
    <div className="reviews__info">
      <RatingReviews ratingValue={rating} />

      <p className="reviews__text">{comment}</p>
      <time className="reviews__time" dateTime={getMachineDate(date)}>
        {getCommentDate(date)}
      </time>
    </div>
  </li>
);

export { Comment };
