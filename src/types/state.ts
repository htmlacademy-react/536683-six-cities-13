import { store } from '../store';

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
export type TLoadingStatus = 'loading' | 'success' | 'idle';
