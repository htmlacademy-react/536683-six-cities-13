import { AuthStatus } from '../const';
import { store } from '../store';
import { TOffer } from './offer';

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
export type TRequestStatus = 'loading' | 'success' | 'error';

export type TState = {
  authStatus: AuthStatus;
  location: string;
  offers: TOffer[];
  status: TRequestStatus;
};
