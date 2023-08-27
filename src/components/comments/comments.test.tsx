import { render, screen } from '@testing-library/react';
import { AuthStatus, LoadingStatus } from '../../const';
import { withRouter, withStore } from '../../utils/mock-components';
import { makeFakeComments } from '../../utils/mocks';
import { Comments } from './comments';

describe('Component: Comments', () => {
  it('should render correct', () => {
    const commentsTestId = 'comments';
    const commentTestId = 'comment';
    const expectedProps = makeFakeComments();
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
});
