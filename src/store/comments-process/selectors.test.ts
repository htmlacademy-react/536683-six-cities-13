import { LoadingStatus, NameSpace } from '../../const';
import { makeFakeComments } from '../../utils/mocks';
import { getCommentSubmitStatus, getComments } from './selectors';

describe('CommentsProcess selectors', () => {
  const state = {
    [NameSpace.Comments]: {
      comments: makeFakeComments(),
      commentSubmitStatus: LoadingStatus.Success,
    },
  };

  it('should return an array of comments', () => {
    const { comments } = state[NameSpace.Comments];
    const result = getComments(state);
    expect(result).toEqual(comments);
  });

  it('should return comment submit status', () => {
    const { commentSubmitStatus } = state[NameSpace.Comments];
    const result = getCommentSubmitStatus(state);
    expect(result).toBe(commentSubmitStatus);
  });
});
