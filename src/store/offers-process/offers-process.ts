import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from '../../const';
import { TState } from '../reducer';
import { loadOffers } from '../async-actions';
import { TFavoriteData } from '../../types/favorite-data';

type TOffersProcessState = Pick<TState, 'offersLoadingStatus' | 'offers'>;

const initialState: TOffersProcessState = {
  offers: [],
  offersLoadingStatus: LoadingStatus.Idle,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    updateFavoriteOffer: (state, action: PayloadAction<TFavoriteData>) => {
      const currentOfferIndex = state.offers.findIndex(
        (offer) => offer.id === action.payload.favoriteId
      );

      state.offers[currentOfferIndex].isFavorite = Boolean(
        action.payload.status
      );
    },
  },
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

export const { updateFavoriteOffer } = offersProcess.actions;
