import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/offer';
import { AuthStatus } from '../const';
import { TRequestStatus } from '../types/state';

const requireAuth = createAction<AuthStatus>('user/requireAuth');
const setUserEmail = createAction<string>('user/setUserEmail');
const changeLocation = createAction<string>('nav/changeLocation');
const fetchOffers = createAction<TOffer[]>('offers/fetchOffers');
const changeRequestStatus = createAction<TRequestStatus>(
  'request/changeRequestStatus'
);

export {
  setUserEmail,
  requireAuth,
  changeLocation,
  fetchOffers,
  changeRequestStatus,
};
