import { ReviewInfo } from '../../const';
import { ReviewRating } from './review-form-rating';
import { ChangeEvent, FormEvent, useState } from 'react';

export type TReviewForm = {
  rating: number;
  comment: string;
};

const ReviewForm = () => {
  const [reviewInfo, setReviewInfo] = useState<TReviewForm>({
    rating: 0,
    comment: '',
  });
  const isSubmitDisabled = Boolean(
    reviewInfo.comment.length < ReviewInfo.MaxCommentLength ||
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

    // eslint-disable-next-line no-console
    console.log(reviewInfo);
  };

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
      <ReviewRating onRatingChange={handleRatingChange} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewInfo.comment}
        onChange={handleCommentChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
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
