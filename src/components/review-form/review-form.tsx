import cn from 'classnames';
import styles from './review-form.module.css';
import { useParams } from 'react-router-dom';
import { LoadingStatus, ReviewInfo } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { submitComment } from '../../store/async-actions';
import { ReviewRating } from './review-form-rating';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getCommentSubmitStatus } from '../../store/comments-process/selectors';
export type TReviewForm = {
  offerId: string;
  rating: number;
  comment: string;
};

const InitialState: TReviewForm = {
  offerId: '',
  rating: 0,
  comment: '',
};

const ReviewForm = () => {
  const dispatch = useAppDispatch();
  const commentSubmitStatus = useAppSelector(getCommentSubmitStatus);
  const { id } = useParams();
  const [reviewInfo, setReviewInfo] = useState<TReviewForm>(InitialState);
  const isSubmitDisabled = Boolean(
    reviewInfo.comment.length < ReviewInfo.MinCommentLength ||
      reviewInfo.rating <= ReviewInfo.MinRating
  );

  const handleRatingChange = (rating: number) => {
    setReviewInfo((prevReviewInfo) => ({ ...prevReviewInfo, rating }));
  };

  const handleCommentChange = ({
    target,
  }: ChangeEvent<HTMLTextAreaElement>) => {
    const comment = target.value;

    setReviewInfo((prevReviewInfo) => ({ ...prevReviewInfo, comment }));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (id) {
      dispatch(submitComment({ ...reviewInfo, offerId: id }));
      setReviewInfo(InitialState);
    }
  };

  return (
    <form
      className={`reviews__form form ${cn({
        [styles['form--disabled']]:
          commentSubmitStatus === LoadingStatus.Loading,
      })}`}
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <ReviewRating
        key={commentSubmitStatus}
        onRatingChange={handleRatingChange}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewInfo.comment}
        onChange={handleCommentChange}
        minLength={ReviewInfo.MinCommentLength}
        maxLength={ReviewInfo.MaxCommentLength}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">
            {ReviewInfo.MinCommentLength} characters
          </b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export { ReviewForm };
