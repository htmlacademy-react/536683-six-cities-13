import { NameSpace } from '../../const';
import { makeFakeOffers } from '../../utils/mocks';
import { getNearPlaces } from './selectors';

describe('NearPlacesProcess selectors', () => {
  const state = {
    [NameSpace.NearPlaces]: {
      nearPlaces: makeFakeOffers(),
    },
  };

  it('should return an array of near place offers', () => {
    const { nearPlaces } = state[NameSpace.NearPlaces];
    const result = getNearPlaces(state);
    expect(result).toEqual(nearPlaces);
  });
});
