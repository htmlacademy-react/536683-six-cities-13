import { LoadingStatus } from '../../const';
import { makeFakeComments } from '../../utils/mocks';
import { loadComments, submitComment } from '../async-actions';
import { commentsProcess } from './comments-process';

describe('CommentsProcess slice', () => {
  it('should return initial state with empty action', () => {
    const initialState = {
      comments: [],
      commentSubmitStatus: LoadingStatus.Idle,
    };
    const emptyAction = { type: '' };

    const result = commentsProcess.reducer(initialState, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should return default initial state with empty action', () => {
    const initialState = {
      comments: [],
      commentSubmitStatus: LoadingStatus.Idle,
    };
    const emptyAction = { type: '' };

    const result = commentsProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should add an array of comments with "loadComments.fulfilled" action', () => {
    const fakeComments = makeFakeComments({ count: 5 });
    const expectedState = {
      comments: fakeComments,
      commentSubmitStatus: LoadingStatus.Idle,
    };

    const result = commentsProcess.reducer(
      undefined,
      loadComments.fulfilled(fakeComments, '', { offerId: '3' })
    );

    expect(result).toEqual(expectedState);
  });

  it('should change "commentSubmitStatus" to "loading" with "submitComment.pending" action', () => {
    const expectedState = {
      comments: [],
      commentSubmitStatus: LoadingStatus.Loading,
    };

    const result = commentsProcess.reducer(undefined, submitComment.pending);

    expect(result).toEqual(expectedState);
  });

  it('should change "commentSubmitStatus" to "success" with "submitComment.fulfilled" action', () => {
    const [fakeComment] = makeFakeComments();
    const expectedState = {
      comments: [fakeComment],
      commentSubmitStatus: LoadingStatus.Success,
    };

    const result = commentsProcess.reducer(
      undefined,
      submitComment.fulfilled(fakeComment, '', {
        comment: '',
        offerId: '',
        rating: 5,
      })
    );

    expect(result).toEqual(expectedState);
  });

  it('should change "commentSubmitStatus" to "error" with "submitComment.rejected" action', () => {
    const expectedState = {
      comments: [],
      commentSubmitStatus: LoadingStatus.Error,
    };

    const result = commentsProcess.reducer(undefined, submitComment.rejected);

    expect(result).toEqual(expectedState);
  });
});
