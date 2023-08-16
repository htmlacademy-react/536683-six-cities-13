import { NameSpace } from '../../const';
import { TOffer } from '../../types/offer';
import { TLoadingStatus, TRootState } from '../../types/state';

export const getFavorites = (state: TRootState): TOffer[] =>
  state[NameSpace.Favorites].favorites;
export const getFavoritesLoadingStatus = (state: TRootState): TLoadingStatus =>
  state[NameSpace.Favorites].favoritesLoadingStatus;
