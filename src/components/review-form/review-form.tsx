import { useParams } from 'react-router-dom';
import { LoadingStatus, ReviewInfo } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { submitComment } from '../../store/async-actions';
import { ReviewRating } from './review-form-rating';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
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
  const { MinCommentLength, MaxCommentLength } = ReviewInfo;

  const isValid =
    !!reviewInfo.rating &&
    reviewInfo.comment.length >= MinCommentLength &&
    reviewInfo.comment.length <= MaxCommentLength;

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

    if (id && isValid) {
      dispatch(submitComment({ ...reviewInfo, offerId: id }));
    }
  };

  useEffect(() => {
    let isMounted = true;

    if (isMounted && commentSubmitStatus === LoadingStatus.Success) {
      setReviewInfo(InitialState);
    }

    return () => {
      isMounted = false;
    };
  }, [commentSubmitStatus]);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <ReviewRating
        selectedRating={reviewInfo.rating}
        onRatingChange={handleRatingChange}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewInfo.comment}
        onChange={handleCommentChange}
        minLength={MinCommentLength}
        maxLength={MaxCommentLength}
        disabled={commentSubmitStatus === LoadingStatus.Loading}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">{MinCommentLength} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid || commentSubmitStatus === LoadingStatus.Loading}
        >
          {commentSubmitStatus === LoadingStatus.Loading
            ? 'Waiting...'
            : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export { ReviewForm };
