import { createReducer } from '@reduxjs/toolkit';
import {
  addComment,
  changeLoadingStatus,
  changeLocation,
  fetchComments,
  fetchDetails,
  fetchFavorites,
  fetchNearPlaces,
  fetchOffers,
  requireAuth,
  setError,
  setUserEmail,
  updateFavorites,
} from './actions';
import { AuthStatus, DEFAULT_LOCATION, LoadingStatus } from '../const';
import { sortCommentsFromNewToOld } from '../utils';
import { TLoadingStatus } from '../types/state';
import { TOffer } from '../types/offer';
import { TDetail } from '../types/details';
import { TComment } from '../types/review';
import { TError } from '../types/error';

export type TState = {
  authStatus: AuthStatus;
  userEmail: string;
  location: string;
  offers: TOffer[];
  details: TDetail | null;
  comments: TComment[];
  favorites: TOffer[];
  nearPlaces: TOffer[];
  loadingStatus: TLoadingStatus;
  error: TError | null;
};

const initialState: TState = {
  authStatus: AuthStatus.Unknown,
  location: DEFAULT_LOCATION,
  offers: [],
  favorites: [],
  details: null,
  comments: [],
  nearPlaces: [],
  userEmail: '',
  loadingStatus: LoadingStatus.Loading,
  error: null,
};

const reducer = createReducer(initialState, (builder) => [
  builder.addCase(setUserEmail, (state, action) => {
    state.userEmail = action.payload;
  }),
  builder.addCase(changeLocation, (state, action) => {
    state.location = action.payload;
  }),
  builder.addCase(fetchOffers, (state, action) => {
    state.offers = action.payload;
  }),
  builder.addCase(fetchDetails, (state, action) => {
    state.details = action.payload;
  }),
  builder.addCase(fetchComments, (state, action) => {
    state.comments = sortCommentsFromNewToOld(action.payload);
  }),
  builder.addCase(fetchNearPlaces, (state, action) => {
    state.nearPlaces = action.payload;
  }),
  builder.addCase(fetchFavorites, (state, action) => {
    state.favorites = action.payload;
  }),
  builder.addCase(updateFavorites, (state, action) => {
    const currentFavoriteIndex = state.favorites.findIndex(
      (favorite) => favorite.id === action.payload.id
    );
    const currentOfferIndex = state.offers.findIndex(
      (offer) => offer.id === action.payload.id
    );

    state.offers[currentOfferIndex].isFavorite = action.payload.isFavorite;

    if (currentFavoriteIndex !== -1) {
      state.favorites.splice(currentFavoriteIndex, 1);
    } else {
      state.favorites.push(action.payload);
    }
  }),
  builder.addCase(addComment, (state, action) => {
    state.comments = [action.payload, ...state.comments];
  }),
  builder.addCase(changeLoadingStatus, (state, action) => {
    state.loadingStatus = action.payload;
  }),
  builder.addCase(requireAuth, (state, action) => {
    state.authStatus = action.payload;
  }),
  builder.addCase(setError, (state, action) => {
    state.error = action.payload;
  }),
]);

export { reducer };
