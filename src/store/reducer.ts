import { createReducer } from '@reduxjs/toolkit';
import { OFFERS } from '../mocks/offers';
import { changeLocation, fillOfferList } from './actions';

const DEFAULT_LOCATION = 'Paris';

const initialState = {
  location: DEFAULT_LOCATION,
  offers: OFFERS,
};

const reducer = createReducer(initialState, (builder) => [
  builder.addCase(changeLocation, (state, action) => {
    state.location = action.payload;
  }),
  builder.addCase(fillOfferList, (state, action) => {
    state.offers = action.payload;
  }),
  builder.addDefaultCase((state) => state),
]);

export { reducer };
