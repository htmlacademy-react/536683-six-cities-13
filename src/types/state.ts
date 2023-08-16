import { store } from '../store';
import { AuthStatus } from '../const';
import { TOffer } from '../types/offer';
import { TDetail } from '../types/details';
import { TComment } from '../types/review';
import { TError } from '../types/error';

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
export type TLoadingStatus = 'loading' | 'success' | 'idle' | 'error';

export type TState = {
  authStatus: AuthStatus;
  userEmail: string;
  location: string;
  offers: TOffer[];
  details: TDetail | null;
  comments: TComment[];
  favorites: TOffer[];
  nearPlaces: TOffer[];
  favoritesLoadingStatus: TLoadingStatus;
  offersLoadingStatus: TLoadingStatus;
  detailsLoadingStatus: TLoadingStatus;
  commentSubmitStatus: TLoadingStatus;
  error: TError | null;
};
