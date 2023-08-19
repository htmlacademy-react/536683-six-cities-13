import { createSelector } from '@reduxjs/toolkit';
import { AuthStatus, NameSpace } from '../../const';
import { TRootState } from '../../types/state';

export const getAuthStatus = createSelector(
  (state: TRootState) => state[NameSpace.User],
  (state): AuthStatus => state.authStatus
);
export const getUserEmail = createSelector(
  (state: TRootState) => state[NameSpace.User],
  (state): string => state.userEmail
);
