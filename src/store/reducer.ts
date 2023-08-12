import { createReducer } from '@reduxjs/toolkit';
import { changeLocation, clearError, setError } from './actions';
import { AuthStatus, DEFAULT_LOCATION, LoadingStatus } from '../const';
import { TLoadingStatus } from '../types/state';
import { TOffer } from '../types/offer';
import { TDetail } from '../types/details';
import { TComment } from '../types/review';
import { TError } from '../types/error';
import {
  checkAuthStatus,
  loadComments,
  loadDetails,
  loadFavorites,
  loadNearPlaces,
  loadOffers,
  login,
  logout,
  setFavorite,
  submitComment,
} from './async-actions';

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

const initialState: TState = {
  authStatus: AuthStatus.Unknown,
  location: DEFAULT_LOCATION,
  offers: [],
  favorites: [],
  details: null,
  comments: [],
  nearPlaces: [],
  userEmail: '',
  favoritesLoadingStatus: LoadingStatus.Idle,
  offersLoadingStatus: LoadingStatus.Idle,
  detailsLoadingStatus: LoadingStatus.Idle,
  commentSubmitStatus: LoadingStatus.Idle,
  error: null,
};

const reducer = createReducer(initialState, (builder) => [
  builder.addCase(changeLocation, (state, action) => {
    state.location = action.payload;
  }),
  builder.addCase(loadOffers.pending, (state) => {
    state.offersLoadingStatus = LoadingStatus.Loading;
  }),
  builder.addCase(loadOffers.fulfilled, (state, action) => {
    state.offersLoadingStatus = LoadingStatus.Success;
    state.offers = action.payload;
  }),
  builder.addCase(loadFavorites.pending, (state) => {
    state.favoritesLoadingStatus = LoadingStatus.Loading;
  }),
  builder.addCase(loadFavorites.fulfilled, (state, action) => {
    state.favoritesLoadingStatus = LoadingStatus.Success;
    state.favorites = action.payload;
  }),
  builder.addCase(loadDetails.pending, (state) => {
    state.detailsLoadingStatus = LoadingStatus.Loading;
  }),
  builder.addCase(loadDetails.fulfilled, (state, action) => {
    state.detailsLoadingStatus = LoadingStatus.Success;
    state.details = action.payload;
  }),
  builder.addCase(loadComments.fulfilled, (state, action) => {
    state.comments = action.payload;
  }),
  builder.addCase(loadNearPlaces.fulfilled, (state, action) => {
    state.nearPlaces = action.payload;
  }),
  builder.addCase(submitComment.pending, (state) => {
    state.commentSubmitStatus = LoadingStatus.Loading;
  }),
  builder.addCase(submitComment.fulfilled, (state, action) => {
    state.commentSubmitStatus = LoadingStatus.Success;
    state.comments = [action.payload, ...state.comments];
  }),
  builder.addCase(submitComment.rejected, (state) => {
    state.commentSubmitStatus = LoadingStatus.Error;
  }),
  builder.addCase(login.pending, (state) => {
    state.authStatus = AuthStatus.Unknown;
  }),
  builder.addCase(login.fulfilled, (state, action) => {
    state.authStatus = AuthStatus.Auth;
    state.userEmail = action.payload;
  }),
  builder.addCase(login.rejected, (state) => {
    state.authStatus = AuthStatus.Unknown;
  }),
  builder.addCase(logout.fulfilled, (state) => {
    state.authStatus = AuthStatus.NoAuth;
    state.userEmail = '';
  }),
  builder.addCase(logout.rejected, (state) => {
    state.authStatus = AuthStatus.Unknown;
  }),
  builder.addCase(checkAuthStatus.pending, (state) => {
    state.authStatus = AuthStatus.Unknown;
  }),
  builder.addCase(checkAuthStatus.fulfilled, (state, action) => {
    state.authStatus = AuthStatus.Auth;
    state.userEmail = action.payload;
  }),
  builder.addCase(checkAuthStatus.rejected, (state) => {
    state.authStatus = AuthStatus.Unknown;
  }),
  //TODO refactor below
  builder.addCase(setFavorite.fulfilled, (state, action) => {
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
  builder.addCase(setError, (state, action) => {
    state.error = action.payload;
  }),
  builder.addCase(clearError, (state, action) => {
    state.error = action.payload.errorInfo;
  }),
]);

export { reducer };
