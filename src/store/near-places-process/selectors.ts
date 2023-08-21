import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TOffer } from '../../types/offer';
import { TRootState } from '../../types/state';

export const getNearPlaces = createSelector(
  (state: Pick<TRootState, NameSpace.NearPlaces>) =>
    state[NameSpace.NearPlaces],
  (state): TOffer[] => state.nearPlaces
);
