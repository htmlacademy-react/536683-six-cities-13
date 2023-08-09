import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/offer';
import { AuthStatus } from '../const';
import { TLoadingStatus } from '../types/state';
import { TDetail } from '../types/details';
import { TComment } from '../types/review';

const requireAuth = createAction<AuthStatus>('user/requireAuth');
const setUserEmail = createAction<string>('user/setUserEmail');
const changeLocation = createAction<string>('nav/changeLocation');
const fetchOffers = createAction<TOffer[]>('offers/fetchOffers');
const fetchDetails = createAction<TDetail>('offers/fetchDetails');
const fetchComments = createAction<TComment[]>('offers/fetchComments');
const fetchNearPlaces = createAction<TOffer[]>('offers/fetchNearPlaces');
const fetchFavorites = createAction<TOffer[]>('offers/fetchFavorites');
const updateFavorites = createAction<TOffer>('offers/updateFavorites');
const addComment = createAction<TComment>('comment/addComment');
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
  fetchComments,
  fetchNearPlaces,
  fetchFavorites,
  addComment,
  updateFavorites,
};
