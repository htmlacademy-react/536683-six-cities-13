import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TComment } from '../../types/review';
import { TLoadingStatus, TRootState } from '../../types/state';

export const getComments = createSelector(
  (state: TRootState) => state[NameSpace.Comments],
  (state): TComment[] => state.comments
);
export const getCommentSubmitStatus = createSelector(
  (state: TRootState) => state[NameSpace.Comments],
  (state): TLoadingStatus => state.commentSubmitStatus
);
