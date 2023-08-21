import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TOffer } from '../../types/offer';
import { TLoadingStatus, TRootState } from '../../types/state';

export const getFavorites = createSelector(
  (state: Pick<TRootState, NameSpace.Favorites>) => state[NameSpace.Favorites],
  (state): TOffer[] => state.favorites
);
export const getFavoritesLoadingStatus = createSelector(
  (state: Pick<TRootState, NameSpace.Favorites>) => state[NameSpace.Favorites],
  (state): TLoadingStatus => state.favoritesLoadingStatus
);
