import { NameSpace } from '../../const';
import { getCurrentLocation, getErrorInfo } from './selectors';

describe('AppProcess selectors', () => {
  const state = {
    [NameSpace.App]: {
      location: 'Paris',
      error: null,
    },
  };

  it('should return location field from store', () => {
    const { location } = state[NameSpace.App];
    const result = getCurrentLocation(state);

    expect(result).toBe(location);
  });

  it('should return error field from store', () => {
    const { error } = state[NameSpace.App];
    const result = getErrorInfo(state);

    expect(result).toBe(error);
  });
});
