import { NameSpace } from '../../const';
import { TComment } from '../../types/review';
import { TLoadingStatus, TRootState } from '../../types/state';

export const getComments = (state: TRootState): TComment[] =>
  state[NameSpace.Comments].comments;
export const getCommentSubmitStatus = (state: TRootState): TLoadingStatus =>
  state[NameSpace.Comments].commentSubmitStatus;
