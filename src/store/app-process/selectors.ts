import { NameSpace } from '../../const';
import { TRootState } from '../../types/state';

export const getCurrentLocation = (state: TRootState): string =>
  state[NameSpace.App].location;
