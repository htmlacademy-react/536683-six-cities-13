import { NameSpace } from '../../const';
import { TDetail } from '../../types/details';
import { TLoadingStatus, TRootState } from '../../types/state';

export const getOfferLoadingStatus = (state: TRootState): TLoadingStatus =>
  state[NameSpace.Offer].detailsLoadingStatus;
export const getOffer = (state: TRootState): TDetail | null =>
  state[NameSpace.Offer].details;
