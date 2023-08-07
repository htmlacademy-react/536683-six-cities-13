import { AuthStatus } from '../const';
import { store } from '../store';
import { TDetail } from './details';
import { TOffer } from './offer';
import { TComment } from './review';

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
export type TLoadingStatus = 'loading' | 'success' | 'idle';

export type TState = {
  authStatus: AuthStatus;
  userEmail: string;
  location: string;
  offers: TOffer[];
  details: TDetail | null;
  comments: TComment[] | null;
  nearPlaces: TOffer[] | null;
  loadingStatus: TLoadingStatus;
  error: string | null;
};
