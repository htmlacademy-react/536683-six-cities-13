import { LoadingStatus } from '../../const';
import { makeFakeOfferDetails } from '../../utils/mocks';
import { loadDetails } from '../async-actions';
import { offerProcess } from './offer-process';

describe('OfferProcess slice', () => {
  it('should return initial state with empty action', () => {
    const initialState = {
      details: null,
      detailsLoadingStatus: LoadingStatus.Idle,
    };
    const emptyAction = { type: '' };

    const result = offerProcess.reducer(initialState, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should return default initial state with empty action', () => {
    const expectedState = {
      details: null,
      detailsLoadingStatus: LoadingStatus.Idle,
    };
    const emptyAction = { type: '' };

    const result = offerProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should update "detailsLoadingStatus" with "loadDetails.pending" action', () => {
    const expectedState = {
      details: null,
      detailsLoadingStatus: LoadingStatus.Loading,
    };

    const result = offerProcess.reducer(undefined, loadDetails.pending);

    expect(result).toEqual(expectedState);
  });

  it('should update "detailsLoadingStatus" and update details fiels with "loadDetails.fulfilled" action', () => {
    const fakeDetails = makeFakeOfferDetails();
    const expectedState = {
      details: fakeDetails,
      detailsLoadingStatus: LoadingStatus.Success,
    };

    if (fakeDetails) {
      const result = offerProcess.reducer(
        undefined,
        loadDetails.fulfilled(fakeDetails, '', { offerId: '' })
      );

      expect(result).toEqual(expectedState);
    }
  });

  it('should update "detailsLoadingStatus" with "loadDetails.rejected" action', () => {
    const expectedState = {
      details: null,
      detailsLoadingStatus: LoadingStatus.Error,
    };

    const result = offerProcess.reducer(undefined, loadDetails.rejected);

    expect(result).toEqual(expectedState);
  });
});
