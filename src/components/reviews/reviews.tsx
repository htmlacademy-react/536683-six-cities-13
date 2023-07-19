import { TReview } from '../../types/review';
import { calculateRating, getCommentDate, getMachineDate } from '../../utils';
import { ReviewForm } from '../review-form/review-form';

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
        {comments.map((comment) => {
          const {
            id,
            comment: userComment,
            date,
            rating,
            user: { name, avatarUrl },
          } = comment;

          return (
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
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{ width: `${calculateRating(rating)}%` }} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">{userComment}</p>
                <time className="reviews__time" dateTime={getMachineDate(date)}>
                  {getCommentDate(date)}
                </time>
              </div>
            </li>
          );
        })}
      </ul>
      <ReviewForm />
    </section>
  );
};

export { Reviews };
