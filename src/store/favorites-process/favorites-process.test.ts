import { LoadingStatus } from '../../const';
import { makeFakeOffers } from '../../utils/mocks';
import { loadFavorites } from '../async-actions';
import { favoritesProcess } from './favorites-process';

describe('FavoritesProcess slice', () => {
  it('should return initial state with empty action', () => {
    const initialState = {
      favorites: [],
      favoritesLoadingStatus: LoadingStatus.Idle,
    };
    const emptyAction = { type: '' };

    const result = favoritesProcess.reducer(initialState, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should return default initial state with empty action', () => {
    const initialState = {
      favorites: [],
      favoritesLoadingStatus: LoadingStatus.Idle,
    };
    const emptyAction = { type: '' };

    const result = favoritesProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should change "favoritesLoadingStatus" to "loading" with loadFavorites.pending action', () => {
    const expectedState = {
      favorites: [],
      favoritesLoadingStatus: LoadingStatus.Loading,
    };

    const result = favoritesProcess.reducer(undefined, loadFavorites.pending);

    expect(result).toEqual(expectedState);
  });

  it('should change "favoritesLoadingStatus" to "success" and add an array of favorite offers to "favorites" field with loadFavorites.fulfilled action', () => {
    const fakeFavorites = makeFakeOffers({ allFavorites: true });
    const expectedState = {
      favorites: fakeFavorites,
      favoritesLoadingStatus: LoadingStatus.Success,
    };

    const result = favoritesProcess.reducer(
      undefined,
      loadFavorites.fulfilled(fakeFavorites, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should change "favoritesLoadingStatus" to "error" with loadFavorites.rejected action', () => {
    const expectedState = {
      favorites: [],
      favoritesLoadingStatus: LoadingStatus.Error,
    };

    const result = favoritesProcess.reducer(undefined, loadFavorites.rejected);

    expect(result).toEqual(expectedState);
  });
});
