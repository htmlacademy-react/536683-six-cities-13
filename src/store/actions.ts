import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/offer';
import { AuthStatus } from '../const';
import { TLoadingStatus } from '../types/state';
import { TDetail } from '../types/details';

const requireAuth = createAction<AuthStatus>('user/requireAuth');
const setUserEmail = createAction<string>('user/setUserEmail');
const changeLocation = createAction<string>('nav/changeLocation');
const fetchOffers = createAction<TOffer[]>('offers/fetchOffers');
const fetchDetails = createAction<TDetail>('offers/fetchDetails');
const setError = createAction<string | null>('app/setError');
const changeLoadingStatus = createAction<TLoadingStatus>(
  'request/changeLoadingStatus'
);

export {
  setUserEmail,
  requireAuth,
  changeLocation,
  fetchOffers,
  changeLoadingStatus,
  setError,
  fetchDetails,
};
