import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TOffer } from '../../types/offer';
import { TRootState } from '../../types/state';

export const getNearPlaces = createSelector(
  (state: TRootState) => state[NameSpace.NearPlaces],
  (state): TOffer[] => state.nearPlaces
);
