import { AuthStatus } from '../const';
import { store } from '../store';
import { TOffer } from './offer';

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
export type TRequestStatus = 'loading' | 'success' | 'error';

export type TState = {
  authStatus: AuthStatus;
  userEmail: string;
  location: string;
  offers: TOffer[];
  status: TRequestStatus;
  error: string | null;
};
