import { LoadingStatus, NameSpace } from '../../const';
import { makeFakeOfferDetails } from '../../utils/mocks';
import { getOffer, getOfferLoadingStatus } from './selectors';

describe('OfferProcess selectors', () => {
  const state = {
    [NameSpace.Offer]: {
      details: makeFakeOfferDetails(),
      detailsLoadingStatus: LoadingStatus.Success,
    },
  };

  it('should return offer details object', () => {
    const { details } = state[NameSpace.Offer];
    const result = getOffer(state);
    expect(details).toEqual(result);
  });

  it('should return null if no request was sent', () => {
    const stateWithNull = {
      [NameSpace.Offer]: {
        details: makeFakeOfferDetails(true),
        detailsLoadingStatus: LoadingStatus.Success,
      },
    };
    const { details } = stateWithNull[NameSpace.Offer];
    const result = getOffer(stateWithNull);
    expect(details).toBe(result);
  });

  it('should return offer details loading status', () => {
    const { detailsLoadingStatus } = state[NameSpace.Offer];
    const result = getOfferLoadingStatus(state);
    expect(detailsLoadingStatus).toBe(result);
  });
});
