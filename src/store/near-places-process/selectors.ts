import { NameSpace } from '../../const';
import { TOffer } from '../../types/offer';
import { TRootState } from '../../types/state';

export const getNearPlaces = (state: TRootState): TOffer[] =>
  state[NameSpace.NearPlaces].nearPlaces;
