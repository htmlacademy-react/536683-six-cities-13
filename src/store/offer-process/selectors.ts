import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TDetail } from '../../types/details';
import { TLoadingStatus, TRootState } from '../../types/state';

export const getOfferLoadingStatus = createSelector(
  (state: Pick<TRootState, NameSpace.Offer>) => state[NameSpace.Offer],
  (state): TLoadingStatus => state.detailsLoadingStatus
);
export const getOffer = createSelector(
  (state: Pick<TRootState, NameSpace.Offer>) => state[NameSpace.Offer],
  (state): TDetail | null => state.details
);
