import { createReducer } from '@reduxjs/toolkit';
import { OFFERS } from '../mocks/offers';
import { changeLocation, fetchOffers } from './actions';
import { DEFAULT_LOCATION } from '../const';

const initialState = {
  location: DEFAULT_LOCATION,
  offers: OFFERS,
};

const reducer = createReducer(initialState, (builder) => [
  builder.addCase(changeLocation, (state, action) => {
    state.location = action.payload;
  }),
  builder.addCase(fetchOffers, (state, action) => {
    state.offers = action.payload;
  }),
  builder.addDefaultCase((state) => {
    state.location = initialState.location;
    state.offers = initialState.offers;
  }),
]);

export { reducer };
