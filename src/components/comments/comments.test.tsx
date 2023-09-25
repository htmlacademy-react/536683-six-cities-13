import { render, screen } from '@testing-library/react';
import { AuthStatus, LoadingStatus } from '../../const';
import { withRouter, withStore } from '../../utils/mock-components';
import { makeFakeComments } from '../../utils/mocks';
import { Comments } from './comments';

describe('Component: Comments', () => {
  const commentsTestId = 'comments';
  const expectedProps = makeFakeComments();

  it('should render correct', () => {
    const commentTestId = 'comment';
    const { withStoreComponent } = withStore(
      <Comments comments={expectedProps} />,
      {
        USER: { userEmail: '', authStatus: AuthStatus.Auth },
        COMMENTS: { comments: [], commentSubmitStatus: LoadingStatus.Success },
      }
    );
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(commentsTestId)).toBeInTheDocument();
    expect(screen.getAllByTestId(commentTestId).length).toBe(
      expectedProps.length
    );
  });

  it('should not render when comments array length is equal zero', () => {
    const { withStoreComponent } = withStore(<Comments comments={[]} />, {
      USER: { userEmail: '', authStatus: AuthStatus.Auth },
      COMMENTS: { comments: [], commentSubmitStatus: LoadingStatus.Success },
    });
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    expect(screen.queryByTestId(commentsTestId)).not.toBeInTheDocument();
  });

  it('should render comment form when AuthStatus.Auth', () => {
    const commentFormTestId = 'reviews-form';
    const { withStoreComponent } = withStore(
      <Comments comments={expectedProps} />,
      {
        USER: { userEmail: '', authStatus: AuthStatus.Auth },
        COMMENTS: { comments: [], commentSubmitStatus: LoadingStatus.Success },
      }
    );
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(commentFormTestId)).toBeInTheDocument();
  });

  it('should not render comment form when AuthStatus.NoAuth', () => {
    const commentFormTestId = 'reviews-form';
    const { withStoreComponent } = withStore(
      <Comments comments={expectedProps} />,
      {
        USER: { userEmail: '', authStatus: AuthStatus.NoAuth },
        COMMENTS: { comments: [], commentSubmitStatus: LoadingStatus.Success },
      }
    );
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    expect(screen.queryByTestId(commentFormTestId)).not.toBeInTheDocument();
  });

  it('should render correct comment count text', () => {
    const expectedCommentsCount = expectedProps.length;

    const { withStoreComponent } = withStore(
      <Comments comments={expectedProps} />,
      {
        USER: { userEmail: '', authStatus: AuthStatus.NoAuth },
        COMMENTS: { comments: [], commentSubmitStatus: LoadingStatus.Success },
      }
    );
    const preparedComponent = withRouter(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(expectedCommentsCount)).toHaveTextContent(
      `${expectedCommentsCount}`
    );
  });
});
