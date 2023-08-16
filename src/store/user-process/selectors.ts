import { AuthStatus, NameSpace } from '../../const';
import { TRootState } from '../../types/state';

export const getAuthStatus = (state: TRootState): AuthStatus =>
  state[NameSpace.User].authStatus;
export const getUserEmail = (state: TRootState): string =>
  state[NameSpace.User].userEmail;
