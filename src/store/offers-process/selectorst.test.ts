import { LoadingStatus, NameSpace } from '../../const';
import { makeFakeOffers } from '../../utils/mocks';
import { getOffers, getOffersLoadingStatus } from './selectors';

describe('OffersProcess selectors', () => {
  const state = {
    [NameSpace.Offers]: {
      offers: makeFakeOffers(),
      offersLoadingStatus: LoadingStatus.Loading,
    },
  };

  it('should return an array of all offers', () => {
    const { offers } = state[NameSpace.Offers];
    const result = getOffers(state);
    expect(offers).toEqual(result);
  });

  it('should return loading status of all offers', () => {
    const { offersLoadingStatus } = state[NameSpace.Offers];
    const result = getOffersLoadingStatus(state);
    expect(offersLoadingStatus).toBe(result);
  });
});
