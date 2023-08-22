import { LoadingStatus, NameSpace } from '../../const';
import { makeFakeOffers } from '../../utils/mocks';
import { getFavorites, getFavoritesLoadingStatus } from './selectors';

describe('FavoritesProcess selectors', () => {
  const state = {
    [NameSpace.Favorites]: {
      favorites: makeFakeOffers(),
      favoritesLoadingStatus: LoadingStatus.Success,
    },
  };

  it('should return an array of favorite offers', () => {
    const { favorites } = state[NameSpace.Favorites];
    const result = getFavorites(state);
    expect(result).toEqual(favorites);
  });
  it('should return loading status of favorite offers', () => {
    const { favoritesLoadingStatus } = state[NameSpace.Favorites];
    const result = getFavoritesLoadingStatus(state);
    expect(result).toBe(favoritesLoadingStatus);
  });
});
