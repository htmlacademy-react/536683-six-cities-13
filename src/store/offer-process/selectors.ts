import { NameSpace } from '../../const';
import { TOffer } from '../../types/offer';
import { TLoadingStatus, TRootState } from '../../types/state';

export const getOffersLoadingStatus = (state: TRootState): TLoadingStatus =>
  state[NameSpace.Offers].offersLoadingStatus;
export const getOffers = (state: TRootState): TOffer[] =>
  state[NameSpace.Offers].offers;
