import { NameSpace } from '../../const';
import { TError } from '../../types/error';
import { TRootState } from '../../types/state';

export const getCurrentLocation = (state: TRootState): string =>
  state[NameSpace.App].location;

export const getErrorInfo = (state: TRootState): TError | null =>
  state[NameSpace.App].error;
