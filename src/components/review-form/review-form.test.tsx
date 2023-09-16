import { fireEvent, render, screen } from '@testing-library/react';
import { AuthStatus, LoadingStatus } from '../../const';
import { withRouter, withStore } from '../../utils/mock-components';
import { ReviewForm } from './review-form';
import { lorem } from 'faker/locale/az';
import userEvent from '@testing-library/user-event';

describe('Component: ReviewForm', () => {
  it('should render correct', () => {
    const reviewsFormTestId = 'reviews-form';
    const expectedText = 'Your review';

    const { withStoreComponent } = withStore(<ReviewForm />, {
      USER: { userEmail: '', authStatus: AuthStatus.Auth },
      COMMENTS: { comments: [], commentSubmitStatus: LoadingStatus.Success },
    });
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(reviewsFormTestId)).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render correct when user enters comment', async () => {
    const reviewsTextareaTestId = 'reviews-textarea';
    const expectedText = lorem.sentences(5);
    const { withStoreComponent } = withStore(<ReviewForm />, {
      USER: { userEmail: '', authStatus: AuthStatus.Auth },
      COMMENTS: { comments: [], commentSubmitStatus: LoadingStatus.Success },
    });
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    await userEvent.type(
      screen.getByTestId(reviewsTextareaTestId),
      expectedText
    );

    expect(screen.getByDisplayValue(expectedText)).toBeInTheDocument();
  });

  it('textarea should contain min 50 and max 300 message char length', () => {
    const reviewsTextareaTestId = 'reviews-textarea';
    const expectedText = lorem.sentences(3);
    const { withStoreComponent } = withStore(<ReviewForm />, {
      USER: { userEmail: '', authStatus: AuthStatus.Auth },
      COMMENTS: { comments: [], commentSubmitStatus: LoadingStatus.Success },
    });
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const renderedTextarea = screen.getByTestId(
      reviewsTextareaTestId
    ) as HTMLTextAreaElement;

    fireEvent.change(renderedTextarea, { target: { value: expectedText } });

    expect(+renderedTextarea.value.length).toBeGreaterThan(50);
    expect(+renderedTextarea.value.length).toBeLessThan(300);
  });

  it('should contain "Waiting..." text when status is "loading"', () => {
    const expectedText = 'Waiting...';
    const { withStoreComponent } = withStore(<ReviewForm />, {
      USER: { userEmail: '', authStatus: AuthStatus.Auth },
      COMMENTS: { comments: [], commentSubmitStatus: LoadingStatus.Loading },
    });
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should contain "Submit" text when status is "success"', () => {
    const expectedText = 'Submit';
    const { withStoreComponent } = withStore(<ReviewForm />, {
      USER: { userEmail: '', authStatus: AuthStatus.Auth },
      COMMENTS: { comments: [], commentSubmitStatus: LoadingStatus.Success },
    });
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should contain "disabled" attribute when status is "loading"', () => {
    const reviewsSubmitTestId = 'reviews-submit';
    const { withStoreComponent } = withStore(<ReviewForm />, {
      USER: { userEmail: '', authStatus: AuthStatus.Auth },
      COMMENTS: { comments: [], commentSubmitStatus: LoadingStatus.Loading },
    });
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    const renderedSubmitButton = screen.getByTestId(reviewsSubmitTestId);

    expect(renderedSubmitButton).toHaveAttribute('disabled', '');
  });
});
