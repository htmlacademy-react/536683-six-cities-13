import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from '../../const';
import { TState } from '../reducer';
import { loadOffers } from '../async-actions';

type TOffersProcessState = Pick<TState, 'offersLoadingStatus' | 'offers'>;

const initialState: TOffersProcessState = {
  offers: [],
  offersLoadingStatus: LoadingStatus.Idle,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadOffers.pending, (state) => {
        state.offersLoadingStatus = LoadingStatus.Loading;
      })
      .addCase(loadOffers.fulfilled, (state, action) => {
        state.offersLoadingStatus = LoadingStatus.Success;
        state.offers = action.payload;
      });
  },
});
