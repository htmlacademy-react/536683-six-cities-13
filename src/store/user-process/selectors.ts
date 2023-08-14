import { AuthStatus, NameSpace } from '../../const';
import { TRootState } from '../../types/state';

export const getAuthStatus = (state: TRootState): AuthStatus =>
  state[NameSpace.User].authStatus;
