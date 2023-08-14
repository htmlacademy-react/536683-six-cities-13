import { createSlice } from '@reduxjs/toolkit';
import { TState } from '../reducer';
import { LoadingStatus, NameSpace } from '../../const';
import { loadDetails } from '../async-actions';

type TOfferProcess = Pick<TState, 'details' | 'detailsLoadingStatus'>;

const initialState: TOfferProcess = {
  details: null,
  detailsLoadingStatus: LoadingStatus.Idle,
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadDetails.pending, (state) => {
        state.detailsLoadingStatus = LoadingStatus.Loading;
      })
      .addCase(loadDetails.fulfilled, (state, action) => {
        state.detailsLoadingStatus = LoadingStatus.Success;
        state.details = action.payload;
      });
  },
});
