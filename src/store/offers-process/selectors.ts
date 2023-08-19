import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TOffer } from '../../types/offer';
import { TLoadingStatus, TRootState } from '../../types/state';

export const getOffersLoadingStatus = createSelector(
  (state: TRootState) => state[NameSpace.Offers],
  (state): TLoadingStatus => state.offersLoadingStatus
);

export const getOffers = createSelector(
  (state: TRootState) => state[NameSpace.Offers],
  (state): TOffer[] => state.offers
);
