import { createReducer } from '@reduxjs/toolkit';
import { changeLocation, changeRequestStatus, fetchOffers } from './actions';
import { DEFAULT_LOCATION, RequestStatus } from '../const';
import { TOffer } from '../types/offer';

export type TRequestStatus = 'loading' | 'success' | 'error';

type TInitialState = {
  location: string;
  offers: TOffer[];
  status: TRequestStatus;
};

const initialState: TInitialState = {
  location: DEFAULT_LOCATION,
  offers: [],
  status: RequestStatus.Loading,
};

const reducer = createReducer(initialState, (builder) => [
  builder.addCase(changeLocation, (state, action) => {
    state.location = action.payload;
  }),
  builder.addCase(fetchOffers, (state, action) => {
    state.offers = action.payload;
  }),
  builder.addCase(changeRequestStatus, (state, action) => {
    state.status = action.payload;
  }),
  builder.addDefaultCase((state) => {
    state.location = initialState.location;
    state.offers = initialState.offers;
  }),
]);

export { reducer };
