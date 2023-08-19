import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TError } from '../../types/error';
import { TRootState } from '../../types/state';

export const getCurrentLocation = createSelector(
  (state: TRootState) => state[NameSpace.App],
  (state): string => state.location
);

export const getErrorInfo = createSelector(
  (state: TRootState) => state[NameSpace.App],
  (state): TError | null => state.error
);
