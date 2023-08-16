import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from '../../const';
import { loadFavorites, setFavorite } from '../async-actions';
import { TState } from '../../types/state';

type TFavoritesProcess = Pick<TState, 'favorites' | 'favoritesLoadingStatus'>;

const initialState: TFavoritesProcess = {
  favorites: [],
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
      .addCase(loadFavorites.rejected, (state) => {
        state.favoritesLoadingStatus = LoadingStatus.Error;
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
