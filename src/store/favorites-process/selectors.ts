import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TOffer } from '../../types/offer';
import { TLoadingStatus, TRootState } from '../../types/state';

export const getFavorites = createSelector(
  (state: TRootState) => state[NameSpace.Favorites],
  (state): TOffer[] => state.favorites
);
export const getFavoritesLoadingStatus = createSelector(
  (state: TRootState) => state[NameSpace.Favorites],
  (state): TLoadingStatus => state.favoritesLoadingStatus
);
