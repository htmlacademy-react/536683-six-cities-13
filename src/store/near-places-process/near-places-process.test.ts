import { makeFakeOffers } from '../../utils/mocks';
import { loadNearPlaces } from '../async-actions';
import { nearPlacesProcess } from './near-places-process';

describe('NearPlacesProcess slice', () => {
  it('should return initial state with empty action', () => {
    const initialState = {
      nearPlaces: [],
    };

    const emptyAction = { type: '' };
    const result = nearPlacesProcess.reducer(initialState, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should return default initial state with empty action', () => {
    const expectedState = {
      nearPlaces: [],
    };
    const emptyAction = { type: '' };

    const result = nearPlacesProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should update "nearPlaces" field with an array with "loadNearPlaces.filfulled" action', () => {
    const fakeNearPlaces = makeFakeOffers();
    const expectedState = {
      nearPlaces: fakeNearPlaces,
    };

    const result = nearPlacesProcess.reducer(
      undefined,
      loadNearPlaces.fulfilled(fakeNearPlaces, '', { offerId: '32' })
    );

    expect(result).toEqual(expectedState);
  });
});
