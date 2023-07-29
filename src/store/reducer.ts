import { createReducer } from '@reduxjs/toolkit';
import { CITY } from '../mocks/city';
import { OFFERS } from '../mocks/offers';
import { changeCity, fillOfferList } from './action';

const initialState = {
  city: CITY,
  offers: OFFERS,
};

const reducer = createReducer(initialState, (builder) => [
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
  }),
  builder.addCase(fillOfferList, (state, action) => {
    state.offers = action.payload;
  }),
  // builder.addDefaultCase((state) => {
  // state = initialState;
  // }),
]);

export { reducer };
