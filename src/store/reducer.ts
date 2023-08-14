import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus, DEFAULT_LOCATION, LoadingStatus } from '../const';
import { TLoadingStatus } from '../types/state';
import { TOffer } from '../types/offer';
import { TDetail } from '../types/details';
import { TComment } from '../types/review';
import { TError } from '../types/error';
import { loadFavorites, setFavorite } from './async-actions';

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
  builder.addCase(loadFavorites.pending, (state) => {
    state.favoritesLoadingStatus = LoadingStatus.Loading;
  }),
  builder.addCase(loadFavorites.fulfilled, (state, action) => {
    state.favoritesLoadingStatus = LoadingStatus.Success;
    state.favorites = action.payload;
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
]);

export { reducer };
