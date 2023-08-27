import { LoadingStatus } from '../../const';
import { makeFakeOffers } from '../../utils/mocks';
import { loadOffers } from '../async-actions';
import { offersProcess, updateFavoriteOffer } from './offers-process';

describe('OffersProcess slice', () => {
  it('should return initial state with empty action', () => {
    const initialState = {
      offers: [],
      offersLoadingStatus: LoadingStatus.Idle,
    };
    const emptyAction = { type: '' };

    const result = offersProcess.reducer(initialState, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should return default initial state with empty action', () => {
    const initialState = {
      offers: [],
      offersLoadingStatus: LoadingStatus.Idle,
    };
    const emptyAction = { type: '' };

    const result = offersProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should update offer favorite flag', () => {
    const initialState = {
      offers: makeFakeOffers({ allFalse: true }),
      offersLoadingStatus: LoadingStatus.Idle,
    };
    const favoriteData = {
      favoriteId: '34',
      status: 1,
    };
    const { favoriteId, status } = favoriteData;

    const result = offersProcess.reducer(
      initialState,
      updateFavoriteOffer(favoriteData)
    );
    const targetOffer = result.offers.find(
      (offer) => offer.id === favoriteId && offer.isFavorite === Boolean(status)
    );

    if (targetOffer) {
      expect({
        favoriteId: targetOffer.id,
        status: Number(targetOffer.isFavorite),
      }).toEqual(favoriteData);
    }
  });

  it('should change "offersLoadingStatus" to "loading" with loadOffers.pending action', () => {
    const expectedState = {
      offers: [],
      offersLoadingStatus: LoadingStatus.Loading,
    };

    const result = offersProcess.reducer(undefined, loadOffers.pending);

    expect(result).toEqual(expectedState);
  });

  it('should change "offersLoadingStatus" to "success" and add an array of offers with loadOffers.fulfilled action', () => {
    const fakeOffers = makeFakeOffers();
    const expectedState = {
      offers: fakeOffers,
      offersLoadingStatus: LoadingStatus.Success,
    };

    const result = offersProcess.reducer(
      undefined,
      loadOffers.fulfilled(fakeOffers, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should change "offersLoadingStatus" to "error"  with loadOffers.rejected action', () => {
    const expectedState = {
      offers: [],
      offersLoadingStatus: LoadingStatus.Error,
    };

    const result = offersProcess.reducer(undefined, loadOffers.rejected);

    expect(result).toEqual(expectedState);
  });
});
