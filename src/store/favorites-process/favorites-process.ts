import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from '../../const';
import { TState } from '../reducer';
import { loadFavorites, setFavorite } from '../async-actions';

type TFavoritesProcess = Pick<
  TState,
  'favorites' | 'favoritesLoadingStatus' | 'offers'
>;

const initialState: TFavoritesProcess = {
  favorites: [],
  offers: [],
  favoritesLoadingStatus: LoadingStatus.Idle,
};

export const favoritesProcess = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadFavorites.pending, (state) => {
        state.favoritesLoadingStatus = LoadingStatus.Loading;
      })
      .addCase(loadFavorites.fulfilled, (state, action) => {
        state.favoritesLoadingStatus = LoadingStatus.Success;
        state.favorites = action.payload;
      })
      .addCase(setFavorite.fulfilled, (state, action) => {
        const currentFavoriteIndex = state.favorites.findIndex(
          (favorite) => favorite.id === action.payload.id
        );

        if (currentFavoriteIndex !== -1) {
          state.favorites.splice(currentFavoriteIndex, 1);
        } else {
          state.favorites.push(action.payload);
        }
      });
  },
});
