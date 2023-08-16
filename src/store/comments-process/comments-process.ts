import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from '../../const';
import { loadComments, submitComment } from '../async-actions';
import { TState } from '../../types/state';

type TCommentsProcess = Pick<TState, 'comments' | 'commentSubmitStatus'>;

const initialState: TCommentsProcess = {
  comments: [],
  commentSubmitStatus: LoadingStatus.Idle,
};

export const commentsProcess = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(submitComment.pending, (state) => {
        state.commentSubmitStatus = LoadingStatus.Loading;
      })
      .addCase(submitComment.fulfilled, (state, action) => {
        state.commentSubmitStatus = LoadingStatus.Success;
        state.comments = [action.payload, ...state.comments];
      })
      .addCase(submitComment.rejected, (state) => {
        state.commentSubmitStatus = LoadingStatus.Error;
      });
  },
});
